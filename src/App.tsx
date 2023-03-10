import React, { useState } from 'react';
import Button from './components/Button/Button';
import HeaderText from './components/HeaderText/HeaderText';
import Question from './components/Question/Question';
import './styles/style.css'
import { useTts } from 'tts-react'
import type { TTSHookProps } from 'tts-react'
import DragAndDropZone from './components/GridDrop/DragAndDropZone';
import { css } from '@emotion/css'

export interface Phrase {
    id: number,
    name: string
}
export interface ItemArrays {
    left: Phrase[],
    right: Phrase[]
}


export const arraySort = (arr: any[]) => arr.sort((a, b) => a.id - b.id)

export const createPhraseArray = (string: string) => {
    const array = string.split(' ')
    array.sort((a, b) => a > b ? 1 : -1)
    return array.map((item, index) => ({
        id: index++,
        name: item
    }))
}
function App(this: any) {
    type SpeakProps = Pick<TTSHookProps, 'children'>
    const Speak = ({ children }: SpeakProps) => (
        <>{useTts({ lang: 'en', children, autoPlay: true }).ttsChildren}</>
    )

    const [items, setItems] = useState<ItemArrays>({
        left: [],
        right: []
    });
    const [sentenceEn, setSentenceEn] = useState<string>()
    const [isTrueAnswer, setIsAnswerTrue] = useState<boolean | undefined>(undefined)
    const [question, setQuestion] = useState<string>()


    function handleButtonCheck(items: ItemArrays, sentenceEn: string) {
        const ArrayOfString = items.right.map(item => item.name)
        const string = ArrayOfString.join(' ')
        setIsAnswerTrue(sentenceEn === string)
    }

    return (
        <div className={css`
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        `}>
            <HeaderText>Translate this sentence</HeaderText>
            <Question text={question} />
            <DragAndDropZone
                items={items}
                setItems={setItems}
                setSentenceEn={setSentenceEn}
                setIsAnswerTrue={setIsAnswerTrue}
                setQuestion={setQuestion}
            />
            {isTrueAnswer ? (
                <Speak>
                    <div className={
                        css`
                        font-size: 18px;
                        color: green;
                        text-align: center;
                        margin-bottom: 10px;`
                    }>
                        {sentenceEn}
                    </div>
                </Speak>
              ) : (
              (isTrueAnswer === false) ? (
                  <div className={css`font-size: 18px; color: red;text-align: center;margin-bottom: 10px;`}>Something wrong!</div>
              ) :
                undefined
            )
            }
            <Button handleClick={handleButtonCheck} items={items} sentenceEn={sentenceEn!}>Check</Button>
        </div>
    );

}

export default App;