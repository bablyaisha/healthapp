import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
// import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  WebsiteRights,
  FooterLink,
  // TextWrapper,
  LinksRow,
  InfoRow
} from './footerElement';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <InfoRow style={{ color: 'white' }}>
              <span>WhatsApp: +91 9431763375</span>
              <span>Call: +91 9006146183</span>
              <span>E-mail: thehealthapp99@gmail.com</span>
            </InfoRow>
            <LinksRow>
              <FooterLink to="/cancellation&refund">Cancellation & Refund</FooterLink>
              <FooterLink to="/privacypolicy">Privacy Policy</FooterLink>
              <FooterLink to="/terms&conditions">Terms & Conditions</FooterLink>
            </LinksRow>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              The Health App
            </SocialLogo>
            
            <WebsiteRights>
              The Health App &copy; {new Date().getFullYear()} All Rights Reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://www.linkedin.com/in/health-app-2a911319b' target='_blank' aria-label='LinkedIn'>
                <FaLinkedinIn />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
