import {css} from '@emotion/css';
import React from 'react';
import {GridItem} from 'react-grid-dnd';
import {Phrase} from '../../App';

interface DragAndDropGridItemProps {
  elem: Phrase
}

const DragAndDropGridItem: React.FC<DragAndDropGridItemProps> = ({elem}) => (
  <GridItem className={css`
      width: 70px;
    `}>
    <div>
      <div className={css`
          width: 70px;
          height: 30px;
          box-sizing: border-box;
          background: #FFFFFF;
          border: 1px solid #C9C9C9;
          box-shadow: 0 8px 4px -6px rgba(0, 0, 0, 0.25);
          display: flex;
          justify-content: center;
          color: rgb(0, 0, 0);
          font-family: Arial, Helvetica, sans-serif;
          align-items: center;
          border-radius: 13px;
          cursor: grab;
        `}>
        {elem.name}
      </div>
    </div>
  </GridItem>
);

export default DragAndDropGridItem;