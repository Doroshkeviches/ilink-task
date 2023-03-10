import React from 'react';
import {StyledButton} from './StyledButton';
import {ButtonProps} from './Button.types';

const Button: React.FC<ButtonProps> = ({children, items, sentenceEn, handleClick}) => {
  return (
    <StyledButton
      onClick={() => {
        handleClick(items, sentenceEn)
      }
    }>
      {children}
    </StyledButton>
  );
};

export default Button;