import React from 'react'
import Icon1 from '../../images/png-1.png'
import Icon2 from '../../images/png-2.jpeg'
import Icon3 from '../../images/png-3.gif'
import {ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP} from './serviceElement'

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
       <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
         <ServicesCard>
          <ServicesIcon src={Icon1} />
           <ServicesH2><b>Website Development</b></ServicesH2>
           <ServicesP>We have experienced website developers who work on both front part and back part of the website. </ServicesP>
         </ServicesCard>
         <ServicesCard>
         <ServicesIcon src={Icon2} />
          <ServicesH2><b>Mobile App Development</b></ServicesH2>
          <ServicesP>We have experienced mobile App developers who work for you and make your mobile app more efficient, user-friendly and attractive.</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon3} />
         <ServicesH2><b>Graphic Designing</b></ServicesH2>
         <ServicesP>We have experienced graphic designers who makes good and structure designs for you.</ServicesP>
       </ServicesCard>
       <ServicesCard>
        <ServicesIcon src={Icon3} />
         <ServicesH2><b>Content Writing</b></ServicesH2>
         <ServicesP>Need help in content writing here you can give us your work and we provide you with good contents.</ServicesP>
       </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Services
