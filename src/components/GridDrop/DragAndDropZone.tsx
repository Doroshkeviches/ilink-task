import React, {Dispatch, SetStateAction, useCallback, useEffect} from 'react';
import { useQuery } from '@apollo/client';
import { GridContextProvider, swap, move } from "react-grid-dnd";
import { arraySort, createPhraseArray, ItemArrays } from '../../App';
import { GET_WORDS } from '../../query/query';
import DragAndDropGridZone from './DragAndDropGridZone';
import { css } from '@emotion/css';

interface DragProps {
    // TODO: fix any type
    items: ItemArrays
    setItems: (item: ItemArrays) => void
    setSentenceEn: Dispatch<SetStateAction<string |undefined>>
    setIsAnswerTrue: Dispatch<SetStateAction<boolean | undefined>>
    setQuestion: Dispatch<SetStateAction<string | undefined>>
}

const DragAndDropZone: React.FC<DragProps> = ({ items,
    setItems,
    setSentenceEn,
    setIsAnswerTrue,
    setQuestion }) => {
    const {data, loading} = useQuery(GET_WORDS)

    useEffect(() => {
        if (!loading) {
            const num = Math.floor(Math.random() * 4)
            setQuestion(data.sentenceAll[num].ru)
            setSentenceEn(data.sentenceAll[num].en)
            const array = arraySort(createPhraseArray(data.sentenceAll[num].en))
            setItems({
                left: array,
                right: []
            })
        }
    }, [data, loading, setItems, setQuestion, setSentenceEn])

    const onChange = useCallback((sourceId: string, sourceIndex: number, targetIndex: number, targetId: string | undefined) => {
        setIsAnswerTrue(undefined)
        if (targetId) {
            const result = move(
              items[sourceId as keyof ItemArrays],
              items[targetId as keyof ItemArrays],
              sourceIndex,
              targetIndex
            );
            if (sourceId === 'left' && targetId === 'right') {
                return setItems({
                      ...items,
                      [sourceId]: arraySort(result[0]),
                      [targetId]: result[1]
                  }
                )
            }
            if (sourceId === 'right' && targetId === 'left') {
                return setItems({
                      ...items,
                      [sourceId]: result[0],
                      [targetId]: arraySort(result[1])
                  }
                )
            }
        }
        const result = swap(items[sourceId as keyof ItemArrays], sourceIndex, targetIndex);

        if (sourceId === 'left') {
            return setItems({
                ...items,
                [sourceId]: arraySort(result)
            });
        }

        return setItems({
            ...items,
            [sourceId]: result
        });
    },[items, setIsAnswerTrue, setItems])

    return (
      <GridContextProvider onChange={onChange}>
          <div className={css`
              touch-action: none;
              width: 400px;
              margin: 1rem auto;
          `}>
              <div className={css`
                  height: 80px;
                  margin-bottom: 30px;
                  background: repeating-linear-gradient(0deg,
                  #000000,
                  #000000 1px,
                  #ffffff 1px,
                  #ffffff 36px);
              `}>
                  <DragAndDropGridZone  id={'right'} item={items.right}/>
              </div>
              <DragAndDropGridZone id={'left'} item={items.left}/>
          </div>
      </GridContextProvider>
    );
};

export default DragAndDropZone;