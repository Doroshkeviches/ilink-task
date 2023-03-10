import {css} from '@emotion/css';
import React from 'react';
import {GridDropZone} from 'react-grid-dnd';
import {Phrase} from '../../App';
import DragAndDropGridItem from './DragAndDropGridItem';

interface DropGridZone {
  item: Phrase[]
  id: string
}

const DragAndDropGridZone: React.FC<DropGridZone> = ({item, id}) => (
  <GridDropZone
    className={css`
        height: 100px;
        padding: 10px;
      `}
    
    id={id}
    boxesPerRow={5}
    rowHeight={35}
  >
    {item.map((el) => (
      <DragAndDropGridItem key={el.id} elem={el} />
    ))}
  </GridDropZone>
);

export default DragAndDropGridZone;