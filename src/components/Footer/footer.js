import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import {
    FooterContainer,
    FooterLink,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterWrap,SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialIconLink,WebsiteRights
} from './footerElement'

const Footer = () => {

    const toggleHome= () =>{
        scroll.scrollToTop();
      }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    { /*two wrapper for two columns each column with 2 rows */}
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/signin'>How We work</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms of service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact us</FooterLinkTitle>
                            <FooterLink to='/signin'>contact</FooterLink>
                            <FooterLink to='/signin'>support</FooterLink>
                            <FooterLink to='/signin'>destinations</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to='/signin'>submit videos</FooterLink>
                            <FooterLink to='/signin'>ambassadors</FooterLink>
                            <FooterLink to='/signin'>Agency</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social media</FooterLinkTitle>
                            <FooterLink to='/signin'>Instagram</FooterLink>
                            <FooterLink to='/signin'>Facebook</FooterLink>
                            <FooterLink to='/signin'>Youtube</FooterLink>
                            <FooterLink to='/signin'>Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                 <SocialMediaWrap>
                   <SocialLogo to='/' onClick={toggleHome}>The Health App</SocialLogo>
                   <WebsiteRights>The health app &copy; {new Date().getFullYear()}  All Rights Reserved.</WebsiteRights>
                   <SocialIcons>
                     <SocialIconLink href='//www.facebook.com' target='_blank' aria-label='Facebook'>
                      <FaFacebook />
                     </SocialIconLink>
                     <SocialIconLink href='//www.instagram.com' target='_blank' aria-label='Instagram'>
                      <FaInstagram />
                     </SocialIconLink>
                     <SocialIconLink href='//www.twitter.com' target='_blank' aria-label='Twitter'>
                      <FaTwitter />
                     </SocialIconLink>
                     <SocialIconLink href='//www.linkedin.com' target='_blank' aria-label='LinkedIn'>
                      <FaLinkedinIn />
                     </SocialIconLink>
                     <SocialIconLink href='//www.youtube.com' target='_blank' aria-label='Youtube'>
                      <FaYoutube />
                     </SocialIconLink>
                   </SocialIcons>
                 </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
