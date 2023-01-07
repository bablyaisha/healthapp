import React from 'react'
import Icon1 from '../../images/website.jpeg'
import Icon2 from '../../images/mobile.gif'
import Icon3 from '../../images/png-3.gif'
// import Icon4 from '../../images/content.gif'
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
           <ServicesH2><b>Booking in Hospitals</b></ServicesH2>
           <ServicesP>We provide a booking system to the customer to have appointment with the respected doctor.</ServicesP>
         </ServicesCard>
         <ServicesCard>
         <ServicesIcon src={Icon2} />
          <ServicesH2><b>Cab to Hospital</b></ServicesH2>
          <ServicesP>We provide cab facility to the customers to reach the respected hospital.</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon3} />
         <ServicesH2><b>Save your Time</b></ServicesH2>
         <ServicesP>We keep you up-to-date about the timing of the doctors in and out.</ServicesP>
       </ServicesCard>
      {/* <ServicesCard>
        <ServicesIcon src={Icon4} />
         <ServicesH2><b>Content Writing</b></ServicesH2>
         <ServicesP>Need help in content writing here you can give us your work and we provide you with good contents.</ServicesP>
  </ServicesCard> */}
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Services
