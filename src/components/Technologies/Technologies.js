import React from 'react';
import { DiFirebase, DiReact, DiZend, DiJsBadge } from 'react-icons/di';
import { AiOutlineCluster } from "react-icons/ai"
// import { DiJsBadge} from 'react-icons/di'
import { Section, SectionDivider, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, ListIcon } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionSubText>I have work with a range of Technologies in the dev world, from Back-end to Front-end</SectionSubText>
    <List>
      <ListItem>
        <DiReact size="3.5rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/> React.js, Redux,  Next.js, Node.js, Express.js, Styled-Components, Material-UI, diagrams.net, Google DevTools, Git
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3.5rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/> Node and Databases,Postman, Passport, MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
     
      <ListItem>
        <DiJsBadge size="3.5rem"/>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
          Javascript
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
