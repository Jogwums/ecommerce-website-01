// main css file 
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;

    }
    body{
        color: white;
    }
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1250px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 3rem;
    padding-right: 3rem;


    @media (max-width: 991px){
        padding-right: 2rem;
        padding-left: 2rem;
        
    }
`;

export const CardGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    margin: 0 auto;

    width: 100%;

`;

export const Button = styled.button`
    border-radius: 4px;
    white-space: nowrap;
    background: ${({primary}) => (primary ? '#4b59f7' : '#6c0c9c')};
    background: ${({secondary}) => (secondary ? '#6c0c9c' : '#6c0c9c')};
    background: ${({pay}) => (pay ? '#000' : '#4b59f7')};
    background: ${({green}) => (green ? '#32a852' : '#4b59f7')};
    padding: ${({big}) => (big? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '22px' : '16px')};
    font-size: ${({fontSmall}) => (fontSmall ? '12px' : '16px')};
    outline: none;
    border: 0;
    cursor: pointer;
    width: ${({full}) => (full ? '100%' : '')};
    font-weight: bolder;

    &:hover{
        transition: all 0.3s ease-out;
        background: ${({ primary }) => ( primary ? '#0467fb' : '#32a852')};
        background: ${({pay}) => (pay ? '#0c6c9c' : '#4b59f7')};
        background: #fff;
        color: ${({green}) => (green ? '#32a852' : '#4b59f7')};
        border: 2px solid;
    }

    @media (max-width: 960px) {
        width: 100%;

    }    
    
`;



export default GlobalStyle;