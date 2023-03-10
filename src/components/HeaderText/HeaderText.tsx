import React from 'react';
import {HeaderTextProps} from './HeaderText.types';
import { styles } from './HeaderText.style';

const HeaderText: React.FC<HeaderTextProps> = ({ children }) => (
  <div className={styles.wrapper}>
      {children}
  </div>
);

export default HeaderText;