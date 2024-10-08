// src/pages/TermsAndConditions.js

import React from 'react';
import './Terms&Condition.css'; // Import the CSS file
import { WebsiteRights } from '../../components/Footer/footerElement';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/Footer/footer';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
    <Navbar />
      <h1>Cancellation and Refund Policy for Health App Appointment Booking Service</h1>
      <p>Welcome to our Health App! Please read these Terms and Conditions carefully before using our appointment booking service.</p>

      <h2><strong>Cancellations and Refunds</strong></h2>
      <p>Cancellations are subject to the cancellation policy of the respective doctor or healthcare provider. Refunds, if applicable, can be requested within 3 days of booking and will be processed according to the doctor's cancellation policy and our refund policy.
      Refund if approved will be initiated within 7 business days.</p>

      <p>By using our Health App, you agree to abide by these Terms and Conditions. Thank you for choosing our platform to manage your healthcare appointments efficiently.</p>
    
      <WebsiteRights>The health app &copy; {new Date().getFullYear()}  All Rights Reserved.</WebsiteRights>
    
    </div>
  );
};

export default TermsAndConditions;
