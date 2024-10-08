import React from 'react';
import './Terms&Condition.css'; // Import the CSS file
import { WebsiteRights } from '../../components/Footer/footerElement';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/Footer/footer';

const TermsCondition_Main = () => {
    return (
        <div className="terms-container">
        <Navbar />
          <h1>Terms & Conditions for Health App Appointment Booking Service</h1>
          <p>Welcome to our Health App! Please read these Terms and Conditions carefully before using our appointment booking service.</p>
    
          <h2><strong>1. Booking and Appointment Services</strong></h2>
          <p>Our Health App provides a platform where patients can book appointments with doctors in real-time. The appointments are scheduled based on availability provided by the doctors.</p>
    
          <h2><strong>2. Service Fee</strong></h2>
          <p>For each appointment booked through our Health App, we charge a service fee of 10% of the total appointment cost. This fee covers the use of our platform and payment processing services.</p>
    
          <h2><strong>3. Payment</strong></h2>
          <p>Payments for appointments booked through our Health App are processed securely using the payment method selected by the patient (e.g., credit card, debit card). The total amount paid by the patient includes the doctor’s consultation fee plus our 10% service fee.</p>
    
          <h2><strong>4. Liability</strong></h2>
          <p>We act as an intermediary between patients and doctors for appointment bookings and do not provide medical services. We are not liable for any disputes, claims, losses, or damages arising out of or related to appointments booked through our platform.</p>
    
          <h2><strong>5. User Responsibilities</strong></h2>
          <p>Users (patients and doctors) are responsible for providing accurate information and maintaining the confidentiality of their account credentials. Users agree not to use the Health App for any unlawful or prohibited activities.</p>
    
          <h2><strong>6. Modification of Terms</strong></h2>
          <p>We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website or within the Health App.</p>
    
          <h2><strong>7. Termination</strong></h2>
          <p>We reserve the right to terminate or suspend access to our Health App for any user who violates these Terms and Conditions or engages in fraudulent activities.</p>
    
          <h2><strong>8. Governing Law</strong></h2>
          <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of India.</p>
    
          <h2><strong>9. Contact Us</strong></h2>
          <p>If you have any questions or concerns about these Terms and Conditions, please contact us at <strong>Email:</strong> thehealthapp99@gmail.com.</p>
    
          <p>By using our Health App, you agree to abide by these Terms and Conditions. Thank you for choosing our platform to manage your healthcare appointments efficiently.</p>
    
          <WebsiteRights>The health app &copy; {new Date().getFullYear()}  All Rights Reserved.</WebsiteRights>
        
        </div>
      );
    };


export default  TermsCondition_Main;