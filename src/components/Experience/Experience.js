import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './ExperienceStyles';
import { ExperienceData } from '../../constants/constants';


const Experience = () => (
  <Section >
    <SectionTitle>Experience</SectionTitle>
    <Boxes>{
      ExperienceData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.text}</BoxNum>
          <BoxText>{card.description}</BoxText>

        </Box>
      ))}</Boxes>
  </Section>
);

export default Experience;
