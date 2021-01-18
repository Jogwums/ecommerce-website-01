import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { FaShopify, FaShoppingBasket } from "react-icons/fa";

export const Nav = styled.nav`
/* background: #405679; */
background: rebeccapurple;
height: 5rem;
display: flex;
align-items: center; 
justify-content: center;
font-size: 1.25rem;
position: sticky;
top: 0;
z-index: 999;

`;

export const NavbarContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    position: relative;
    margin: 0;

${Container}
`;

export const NavLogo = styled(Link)`
    color: palevioletred;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;

`;

export const NavIcon = styled(FaShopify)`
    margin-right: .5rem;

`;

export const MobileIcon = styled.div`
    display: none;

    @media (max-width: 960px){
        display: block;
        position: absolute;
        top: 10px; right: 10px;
        transform: translate(-100% 60%);
        font-size: 1.8rem;
        cursor: pointer;

    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 5rem;
        border: 2px solid white;

        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.8s ease;
        background: rebeccapurple;
        
    }
`;

export const NavItem = styled.li`
    display: flex;
    height: 3rem;
    border-bottom: 2px solid transparent;
    padding: 0; margin: 0;

    &:hover{
        /* border-bottom: 2px solid #fff; */
    }

    @media (max-width: 960px) {
        width: 100%;
        
        &:hover {
            border: none;
        }
    }
`;

export const NavLinks =  styled(Link)`
    color: #fff;
    align-self: center;
    text-align: center;
    text-decoration: none;
    padding:  1rem 1rem 0 1rem;
    height: 100%;

    @media (max-width: 960px){
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover{
            color: #4b59f7;
            transition: all 0.5s ease;
        }
    }
`;

export const NavItemBtn = styled.li`
    @media (max-width: 960px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }

`;

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;

`;

export const UserId = styled.h3`
    font-size: 1rem;
    background-color: transparent;
    color: white;
    padding: 0 1rem;
    margin: 0;
    border: none;
    box-shadow: 2px 2px 2px rgba(255,255,255,0.1);

    &:hover{
        background-color: rebeccapurple;
        color: white;
        border: none;
    }
`;


export const CartLogo = styled(FaShoppingBasket)`
    margin: .5rem auto;
    color: white;
    
`;

export const CartItem = styled.button`
    padding: .2rem .5rem;
    border-radius: 6px;
    border: none;
    outline: 0;
    margin-right: .5rem;

    background: purple;
    color: white;

    display: flex;
    align-items: center;
    gap: .3rem;
    
    &:hover ${CartLogo} {
        margin: .5rem;
        color: white;
        z-index: 2;
    }
`;

