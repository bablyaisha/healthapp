import React , {useState} from 'react'
import Video from '../../vedios/video.mp4';
import {HeroContainer,HeroBg,VideoBg,
    HeroContent,HeroH1,HeroP,
    HeroBtnWrapper,ArrowForward,ArrowRight
} from './heroElements';
import {Button} from '../ButtonElement';


function HeroSec() {
    const[hover, setHover] = useState(false);

    const onHover =() => {
        setHover(!hover);
    }
  return (
   <HeroContainer id='home'>
     <HeroBg>
     <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
     </HeroBg>
     <HeroContent>
     <HeroH1>Meeting with Doctor is now Easy</HeroH1>
     <HeroP>
      Sign Up now to save your time. Make an appointment with
      your doctor without wasting time in big queue.
     </HeroP>
     <HeroBtnWrapper>
      <Button to="signup" onMouseEnter={onHover} 
      onMouseLeave={onHover} primary='true' dark='true'
      smooth={true} 
      duration={400} 
      spy={true} 
      exact='true' 
      offset={-5}
      >
       Get started {hover ? <ArrowForward /> : <ArrowRight />}
      </Button>
     </HeroBtnWrapper>
     </HeroContent>
   </HeroContainer>
  )
}

export default HeroSec
