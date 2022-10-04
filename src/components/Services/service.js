import React from 'react'
import Icon1 from '../../images/png-1.png'
import Icon2 from '../../images/png-2.png'
import Icon3 from '../../images/png-3.png'
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
           <ServicesH2><b>Reduce Expenses</b></ServicesH2>
           <ServicesP>We help in reducing tax</ServicesP>
         </ServicesCard>
         <ServicesCard>
         <ServicesIcon src={Icon2} />
          <ServicesH2><b>virtual office</b></ServicesH2>
          <ServicesP>We help in reducing tax</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon3} />
         <ServicesH2><b>cash payment</b></ServicesH2>
         <ServicesP>We help in reducing tax</ServicesP>
       </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Services
