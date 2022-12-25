import React
 from 'react'
import Video from '../../vedios/video.mp4';
import {HeroContainer,HeroBg,VideoBg,
    HeroContent,HeroH1,HeroP,
    HeroBtnWrapper
} from './heroElements';

function HeroSec() {
  return (
   <HeroContainer id='home'>
     <HeroBg>
     <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
     </HeroBg>
     <HeroContent>
     <HeroH1>We make your work easy</HeroH1>
     <HeroP>
       Explore more about us.
     </HeroP>
     <HeroBtnWrapper>
   
     </HeroBtnWrapper>
     </HeroContent>
   </HeroContainer>
  )
}

export default HeroSec
