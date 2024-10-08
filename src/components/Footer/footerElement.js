import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #101522;
  padding: 4rem 0 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  margin-bottom: 10px;

  span {
    margin: 0 10px;
  }

  @media screen and (max-width: 820px) {
    flex-direction: column;
    span {
      margin: 5px 0;
    }
  }
`;

export const LinksRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 820px) {
    margin: 5px 0;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;

  &:hover {
    color: #01bf71;
    transition: all 0.3s ease-out;
    text-decoration: none;
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  margin-left: 10px;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin-left: 10px;
`;
