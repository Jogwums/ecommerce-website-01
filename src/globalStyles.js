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

export const Button = styled.button`
    border-radius: 4px;
    white-space: nowrap;
    background: ${({primary}) => (primary ? '#4b59f7' : '#0467fb')};
    padding: ${({big}) => (big? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: 0;
    cursor: pointer;

    &:hover{
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${({ primary }) => ( primary ? '#0467fb' : '#4b59f7')};
    }

    @media (max-width: 960px) {
        width: 100%;

    }    
    
`;



export default GlobalStyle;