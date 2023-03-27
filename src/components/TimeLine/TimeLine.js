import React, { useState, useRef, useEffect } from 'react';

import { TimeLineSocialContainer, CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from '../Header/HeaderStyles';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from '../Footer/FooterStyles';



const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionDivider /> <br/>
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      In 2018, I traded in my hospitality career for full-time daddy-daughter adventures! This life shift sparked my curiosity for web development, and I dove headfirst into this thrilling new world. With oodles of extra time at home, I eagerly changed course and navigated the seas of self-learning. My dedication and zest for knowledge landed me a spot at the fantastic Kal Academy! I'm always stoked to tackle coding conundrums and thrive on the thrill of cracking them. With my insatiable curiosity, never-ending passion for learning, and knack for teamwork, I'm all set to rock the web development scene!
      </SectionText>
    <SocialIconsContainer>
      <TimeLineSocialContainer>
        {/* <Div3> */}
          <SocialIcons target="_blank" href='https://github.com/JorgeCanul'>
              <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href='https://www.linkedin.com/in/jorge-canul-203199137/'>
              <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href='https://www.instagram.com/jorgecanul2021/'>
              <AiFillInstagram size="3rem" />
          </SocialIcons>
        {/* </Div3> */}
      </TimeLineSocialContainer>
      </SocialIconsContainer>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
        {TimeLineData.map((item, index) => (
          <CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT - 1}>
            <CarouselItem index={index}
            id={`carousel__item-${index}`}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}>
              <CarouselItemTitle>
                {item.year}
              </CarouselItemTitle>
              <CarouselItemText>{item.text}</CarouselItemText>
            </CarouselItem>
          </CarouselMobileScrollNode>
        ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton 
          key={index}
          index={index}
          active={activeItem}
          onClick={(e) => handleClick(e, index)}
          type="button">
            <CarouselButtonDot active={activeItem}/>
          </CarouselButton>
        ))}
      </CarouselButtons>
      <SectionDivider /> <br />
      <SectionTitle>Education</SectionTitle>
      <SectionText>
      Kal Academy | Certificate, 
      Web Development - Full Stack Program <br />
      Udemy | Node with React: Fullstack Web Development by Stephen Grider<br />
      Udemy | The Complete JavaScript Course 2022: From Zero to Expert! by Jonas Schmedtmann <br />
      Udemy | The Complete 2022 Web Development Bootcamp
 by Dr. Angela Yu


      </SectionText>
      <SectionDivider /> <br />
      <SectionTitle>Skills and Abilities</SectionTitle>
      <SectionText>
      MANAGEMENT <br />
	•  In terms of management, I have successfully managed the website implementation process by effectively communicating with project managers, executing the build of websites within the CMS, and ensuring that the website meets accessibility requirements.<br />
       	 • I have also overseen the process from staging to client review, and ensured that the project was completed on time and within budget. <br />  
    MULTIFACETED <br />
   	• My multifaceted skill set has allowed me to work across multiple teams and departments, including PM, QC, Content Writers and SEO.<br />
     • I have also gained experience in website design and development, staging, and client communication, making me a valuable asset to any implementation team.<br/>
	• Fluent in English and Spanish 
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
