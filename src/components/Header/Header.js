import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Span } from './HeaderStyles';
import { Logo } from '../../constants/constants';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';


const Header = () =>  (
 <Container>
   <Div1>
     <Link href="/">
       <a style={{ display: 'flex', 
       alignItems: 'center', 
       color: 'white', marginBottom: '10px'}}>
         <img style={{padding: '1rem'}} src={Logo.image} width="27%" />
         <Span>Portofolio</Span>
       </a>
     </Link>
   </Div1>
   <Div2>
      <li>
       <Link href='#projects'>
         <NavLink>Projects</NavLink>
       </Link>
       </li>
       <li>
       <Link href='#tech'>
         <NavLink>Technologies</NavLink>
       </Link>
       </li>
       <li>
       <Link href='#about'>
         <NavLink>About</NavLink>
       </Link> 
       </li>
   </Div2>
   <Div3>
     <SocialIcons target="_blank" href='https://github.com/JorgeCanul'>
        <AiFillGithub size="3rem" />
     </SocialIcons>
     <SocialIcons target="_blank" href='https://www.linkedin.com/in/jorge-canul-203199137/'>
        <AiFillLinkedin size="3rem" />
     </SocialIcons>
     <SocialIcons target="_blank" href='https://www.instagram.com/jorgecanul2021/'>
        <AiFillInstagram size="3rem" />
     </SocialIcons>
   </Div3>
 </Container>
);

export default Header;
