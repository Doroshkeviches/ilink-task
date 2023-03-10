import { css } from '@emotion/css';
import React from 'react';
import PeopleLogoCircleBottom from './PeopleLogoCircleBottom';
import PeopleLogoCircleTop from './PeopleLogoCircleTop';

const PeopleLogo = () => (
  <div className={css`
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 150px;
        `}>
      <PeopleLogoCircleTop/>
      <PeopleLogoCircleBottom/>
  </div>
);

export default PeopleLogo;