import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

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
      In 2018 I left the hospitality industry to be at home with my daughter full-time. This change was the catalyst to my shifting focus to learning web development which I had recently developed an interest in. I quickly became passionate about the subject and the extra time at home created the perfect opportunity for me to pivot career paths. My drive and focus enabled me to primarily use self-lead learning and the skills I developed culminated into an acceptance to Kal Academy. I am passionate about learning, and 
      enjoy the challenge and reward of solving 
      code-related tasks. I believe my curious 
      nature, continuous love of learning, and 
      ability to work cross-collaboratively will help
      me succeed in the field of web development.
      </SectionText>
      
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
      <SectionTitle>EDUCATION</SectionTitle>
      <SectionText>
      Kal Academy | Certificate, 
      Web Development
      </SectionText>
      <SectionDivider /> <br />
      <SectionTitle>Skills and Abilities</SectionTitle>
      <SectionText>
      MANAGEMENT <br />
	•  I used to oversee and coordinate wait staff during regular club hours and special events <br />
	LIDERSHIP<br />
       	 • Provide help, training and guidance to existing and new club staff <br />  
	MULTIFACED <br />
   	• Thorough understanding of the entire restaurant or Country Club experience as a result of holding many positions within the industry
	Language
	• Fluent in English and Spanish 
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
