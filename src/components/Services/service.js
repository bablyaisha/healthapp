import React from 'react'
import { useNavigate } from 'react-router-dom'
import Icon1 from '../../images/website.jpeg'
// import Icon2 from '../../images/cab.jpg'
import Icon3 from '../../images/png-3.gif'
// import Icon4 from '../../images/loan.jpg'
import Icon5 from '../../images/emergency.jpg'
// import Icon6 from '../../images/attend.jpg'
import {ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP} from './serviceElement';

const Services = () => {
  const navigate = useNavigate();

  const handleCardClick = (paymentAmount) => {
    navigate('/booking', {state: {amount: paymentAmount}});
  };

  return (
    <>
      <ServicesContainer id="services">
       <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
        {/* <Link to='/booking'> */}
         <ServicesCard onClick={() => handleCardClick(1000)}>
          <ServicesIcon src={Icon1} />
           <ServicesH2><b>Booking Your Doctor</b></ServicesH2>
           <ServicesP>Schedule and manage consultations with your preferred doctors. 
           HealthApp ensures that your appointments are always at your fingertips.
</ServicesP>
         </ServicesCard>
      
       
         {/* <ServicesCard onClick={() => handleCardClick(800)}>
         <ServicesIcon src={Icon2} />
          <ServicesH2><b>Cab to Hospital</b></ServicesH2>
          <ServicesP>We provide cab facility to the customers to reach the respected hospital.</ServicesP>
        </ServicesCard> */}
       
        <ServicesCard onClick={() => handleCardClick(1000)}>
        <ServicesIcon src={Icon3} />
         <ServicesH2><b>Save your Time</b></ServicesH2>
         <ServicesP>We keep you up-to-date about the timing of your appointment with respective Doctor in real-time basis.
         You can see your updated time and slot in real-time.</ServicesP>
       </ServicesCard>
  
      {/* <ServicesCard onClick={() => handleCardClick(700)}>
        <ServicesIcon src={Icon4} />
         <ServicesH2><b>Loan Facility</b></ServicesH2>
         <ServicesP>We provide instant loan facility for the medical service through our app at hospital.</ServicesP>
  </ServicesCard> */}

  <ServicesCard onClick={() => handleCardClick(800)}>
  <ServicesIcon src={Icon5} />
  <ServicesH2><b>Emergency Service</b></ServicesH2>
  <ServicesP>We'll connect the patient to the nearest hospital for quick ambulance support by
   sharing your location with the nearest Hospital. </ServicesP>
</ServicesCard>

{/* <ServicesCard onClick={() => handleCardClick(500)}>
  <ServicesIcon src={Icon6} />
  <ServicesH2><b>Personal Attendant</b></ServicesH2>
  <ServicesP>On request we'll provide a attendant for elder citizens to reach hospital and get back to home safely.</ServicesP>
</ServicesCard> */}

        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services
