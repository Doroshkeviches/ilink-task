import styled from '@emotion/styled';

export const StyledButton = styled.button(`
        font-family: Roboto;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
        height: 60px;
        border: none;
        background: linear-gradient(91.2deg, #FFFFFF 0%, #F2F2F2 100%);
        box-shadow: -2px -4px 8px #FFFFFF, 2px 4px 8px rgba(0, 0, 0, 0.2);
        border-radius: 80px;
        cursor: pointer;   
        &:active {box-shadow: inset -2px -4px 12px #FFFFFF, inset 2px 4px 8px rgba(0, 0, 0, 0.2)};
        
    `);