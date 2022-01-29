import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { Container, Div1, Div2, Div3, NavLink } from '../../components/Header/HeaderStyles';

const Footer = () => {
  return (


    <FooterWrapper>

      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href='tel:425-289-8878'>(425)289-8878</LinkItem>
      </LinkColumn>

      <LinkColumn>
      <LinkTitle>email</LinkTitle>
      <LinkItem href='mailto:chivas818@gamil.com'>Email@chivas818@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
     

    <SocialIconsContainer>
      <SocialContainer>
        <CompanyContainer>
          <Slogan>Learning <br />Every day</Slogan>
        </CompanyContainer>
     <SocialIcons target="_blank" href='https://github.com/JorgeCanul'>
        <AiFillGithub size="3rem" />
     </SocialIcons>
     <SocialIcons target="_blank" href='https://www.linkedin.com/in/jorge-canul-203199137/'>
        <AiFillLinkedin size="3rem" />
     </SocialIcons>
     <SocialIcons target="_blank" href='https://www.instagram.com/jorgecanul2021/'>
        <AiFillInstagram size="3rem" />
     </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
