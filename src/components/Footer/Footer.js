import React from 'react'
import {FooterContainer, 
         FooterLinksContainer, FooterLinksWrapper, FooterLinksItems,
         FooterLink, FooterLinkTitle, SocialMedia, SocialMediaWrapper,
         SocialLogo,SocialIcon, SocialIcons, SocialIconLink, WebsiteRights  } from './FooterElements'
import {FaFacebook, FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/sign-up">How it works</FooterLink>
                            <FooterLink to="/">Testimonials</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Contact us</FooterLinkTitle>
                            
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">Support</FooterLink>
                            <FooterLink to="/">Destinations</FooterLink>
                            <FooterLink to="/">Sponsorships</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Shop</FooterLinkTitle>
                            
                            <FooterLink to="/">Submit Products</FooterLink>
                            <FooterLink to="/">Ambassadors</FooterLink>
                            <FooterLink to="/">Agency</FooterLink>
                            <FooterLink to="/">Influencer</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/">Facebook</FooterLink>
                            <FooterLink to="/">Github</FooterLink>
                            <FooterLink to="/">Twitter</FooterLink>
                            <FooterLink to="/">Linkedin</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo to="/">
                            <SocialIcon />
                                SHOP
                        </SocialLogo>
                        <WebsiteRights>Jonathan © 2020</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank"
                                            aria-label="Facebook">
                                    <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                                            aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                                            aria-label="Twitter">
                                    <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                                            aria-label="Linkedin">
                                    <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </SocialMedia>
            </FooterContainer>
        </>
    )
}

export default Footer
