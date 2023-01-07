import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {
    //  FaFacebook, FaInstagram,
     FaLinkedinIn
    //  , FaTwitter, FaYoutube 
    } from 'react-icons/fa'
import {
    FooterContainer,
    // FooterLink,
    // FooterLinkItems,
    // FooterLinkTitle,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterWrap,SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialIconLink,WebsiteRights
} from './footerElement'
import { TextWrapper } from '../InfoSection/infoElement'

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
                       { /*<FooterLinkItems>
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
                        </FooterLinkItems>*/}
                        <p style={{color: 'white'}}>For any queries - </p>
                        <TextWrapper style={{color: 'white'}}>&nbsp;Whatspp at :  +91 9431763375 || call us at: 9006146183
                        </TextWrapper>
                        <TextWrapper style={{color: 'white'}}>&nbsp;|| E-mail: thehealthapp99@gmail.com</TextWrapper>
                    </FooterLinksWrapper>
                   
                </FooterLinksContainer>
                
                <SocialMedia>
                
                 <SocialMediaWrap>

                   <SocialLogo to='/' onClick={toggleHome}>The Health App</SocialLogo>
                   <WebsiteRights>The health app &copy; {new Date().getFullYear()}  All Rights Reserved.</WebsiteRights>
               <SocialIcons>
                     <SocialIconLink href='https://www.linkedin.com/in/health-app-2a911319b' target='_blank' aria-label='LinkedIn'>
                    
                     <FaLinkedinIn />
                     </SocialIconLink>
                     
                   </SocialIcons>
                 </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
