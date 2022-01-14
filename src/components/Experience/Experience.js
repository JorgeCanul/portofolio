import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './ExperienceStyles';

const data = [
  { text: 'BANQUET MANAGER | OVERLAKE GOLF AND COUNTRY CLUB IN MEDINA, WASHINGTON STATE | 08-2014, 12-2017', description: '• Manage staff from beginning to end of shifts. Mange Social, Business, and golf events. Relations with members and guest, answer questions about every aspect of event services. Liasion between Catering Director,  Floor and Banquet Chef. Key contribution \:\
	 Elevate member and guest satisfaction by providing a superior experience\.\
	 Increase Club profitability by through upselling specialty item\s\
	 Ensure guest satisfaction by investigating and resolving complaints "if any" in a timely manner\.\
	Improve staff efficiency through effective communication and new work methods'},
  {text: 'BANQUET CAPTIAN | THE HARBOR CLUB IN BELLEVUE WASHINGTON STATE | 06/2013 – 08/2014',  description: '• Manage Banquet staff from begging to end of shifts. Manage guest relations and every aspect of event services. Liaison between floor and kitchen\.\
	Key contribution\:\
	• Elevate member and guest satisfaction by providing a superior experienc\e\
	• Ensure guest satisfaction in all banquet events\
	• Improve staff efficiency and success '},
  {text: 'BANQUET STAFF | THE HARBOR CLUB IN BELLEVUE WASHINGTON STATE| 09/2012 – 06/2013', description: `• Prepared, executed and broke down event equipment and service. Coordinated a la carte lunch, dinner and bar service for regular and special events.
	Key contribution:
	• Enhanced member experience by creating a friendly, pleasant environment.
	• Improve efficiency by working in a productive and decisive manner.`},
  {text: `WAITER | CACTUS RESTAURANT IN KIRKLAND WASHINGTON STATE | 09/2012 – 06/2013
  `, description: `• Coordinated customer experience from time of sitting to end of meal.
	Key contribution:
	• Developed customer relationships through friendly and interaction.
	• Provided clarity on menu items and general service questions. 
	• Improved staff relations through encouraging teamwork cooperation.`}
];

const Experience = () => (
  <Section >
    <SectionTitle>E X P E R I E N C E</SectionTitle>
    <Boxes>{
      data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.text}</BoxNum>
          <BoxText>{card.description}</BoxText>

        </Box>
      ))}</Boxes>
  </Section>
);

export default Experience;
