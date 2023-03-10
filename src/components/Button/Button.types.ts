import {ItemArrays} from '../../App';

export interface ButtonProps {
  children: string,
  items: ItemArrays,
  sentenceEn: string,
  handleClick: (items: ItemArrays, sentenceEn:string)=> void
}