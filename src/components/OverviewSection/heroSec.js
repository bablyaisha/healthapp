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
     <HeroH1>YOUR HEALTH OUR PRIORITY</HeroH1>
    
     <HeroP>
     We Provide comfort and save your Time.<br></br>
     Explore more about us.
     </HeroP>
     <HeroBtnWrapper>
   
     </HeroBtnWrapper>
     </HeroContent>
   </HeroContainer>
  )
}

export default HeroSec
