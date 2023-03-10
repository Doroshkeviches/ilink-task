import { css } from '@emotion/css';
import React from 'react';
import PeopleLogo from './PeopleLogo/PeopleLogo';
import TextCloudSvg from './TextCloud/TextCloudSvg';

interface QuestionProps {
    text: string | undefined;
}

const Question: React.FC<QuestionProps> = ({text}) => {
    return (
        <div className={css`
        margin: 0 auto;
        display: flex;
        justify-content: center;
        width: 400px;
        `}>
            <PeopleLogo/>
            <TextCloudSvg text={text} />
        </div>
    );
};

export default Question;