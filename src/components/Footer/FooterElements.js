import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {FaRegCopyright} from 'react-icons/fa'



export const FooterContainer = styled.div`
    /* background-color: #101522; */
    background: rebeccapurple;
    padding: 1rem 0 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const FooterSubscription = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    padding: 24px;
    color: #fff;

`;


export const FooterSubHeading = styled.p`
    font-family: 'Trebuchet MS', 'Lucida Sans', 'Poppins', Arial, sans-serif;
    margin-bottom: 0px;
    font-size: 0px;

`;


export const FooterSubText = styled.p`
    margin-bottom: 0px;
    font-size: 0px;
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 820px){
        flex-direction: column;
        width: 80%;

    }
`;

export const FormInput = styled.input`
    padding: 10px 20px;
    border-radius: 3px;
    margin-right: 10px;
    outline: none;
    border: none;
    font-size: 16px;
    border: 1px solid #fff;

    &::placeholder{
        color: #242424;
    }

    @media (max-width: 820px){
        width: 100%;
        margin: 0 0 16px 0;
    }
`;

export const FooterLinksContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;

    @media (max-width: 820px){
        padding-top: 20px;

    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media (max-width: 820px){
        flex-direction: column;

    }
    
`;

export const FooterLinksItems = styled.div`
    margin: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    justify-content: center;
    width: 160px;
    box-sizing: border-box;
    color: #fff;


    @media (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
        font-size: 1.5rem;
    }
`;

export const FooterLinkTitle = styled.h2`
    margin-bottom: 16px;

`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;


    &:hover{
        color: #0467fb;
        transition: 0.3s ease;

    }
`;

// social media section

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;

    @media (max-width: 820px){
        flex-direction: column;

    }
`;

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

`;

export const SocialIcon = styled(FaRegCopyright)`
    margin-right: 10px;

`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.div`
    margin-left: 10px;
    font-size: 2rem;
    cursor: pointer;
    
`;