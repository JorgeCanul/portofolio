import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Bienvenido, <br/>Welcome to My Portofolio
      </SectionTitle>
      <SectionText>To secure a position in which I can utilize my skills and grow my current  knowledge and skill set</SectionText>
      <Link href='#about'>
      <Button >Learn More</Button>
      </Link>
      
    </LeftSection>

  </Section>
);

export default Hero;