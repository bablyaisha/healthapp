// src/pages/TermsAndConditions.js

import React from 'react';
import './Terms&Condition.css'; // Import the CSS file
import { WebsiteRights } from '../../components/Footer/footerElement';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/Footer/footer';

const PrivacyPolicy = () => {
  return (
    <div className="terms-container">
    <Navbar />
      <h1>Privacy Policy for Health App Appointment Booking Service</h1>
      <h2>1. Introduction</h2>
      <p>
        At Health App, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
      </p>
      <h2>2. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li><strong>Personal Information:</strong> Includes your name, email address, phone number, and any other information you provide when creating an account or booking an appointment.</li>
        <li><strong>Payment Information:</strong> Details necessary to process your payments, such as credit card numbers, billing address, and other related information.</li>
        <li><strong>Health Information:</strong> Information about your medical history, symptoms, and other health-related data shared with doctors through our platform.</li>
        <li><strong>Usage Data:</strong> Information about your interactions with our app, including log data, IP address, device information, and browsing activity.</li>
      </ul>
      <h2>3. How We Use Your Information</h2>
      <p>We use the information we collect for the following purposes:</p>
      <ul>
        <li><strong>Appointment Management:</strong> To schedule and manage your appointments with doctors.</li>
        <li><strong>Service Improvement:</strong> To enhance the functionality and user experience of our Health App.</li>
        <li><strong>Payment Processing:</strong> To securely process payments for appointments booked through our platform.</li>
        <li><strong>Communication:</strong> To communicate with you regarding your appointments, account, and any updates to our services or policies.</li>
        <li><strong>Compliance and Security:</strong> To comply with legal obligations and ensure the security of our platform and users.</li>
      </ul>
      <h2>4. Sharing Your Information</h2>
      <p>We do not sell or share your personal information with third parties except in the following circumstances:</p>
      <ul>
        <li><strong>With Doctors:</strong> We share necessary information with doctors to facilitate your appointments.</li>
        <li><strong>With Service Providers:</strong> We may share information with third-party service providers who assist us in operating our platform and processing payments.</li>
        <li><strong>For Legal Reasons:</strong> We may disclose your information if required by law or in response to legal proceedings, such as a court order or subpoena.</li>
      </ul>
      <h2>5. Data Security</h2>
      <p>
        We implement appropriate security measures to protect your personal information from unauthorized access, use, or disclosure. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
      </p>

      <h2>6. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li><strong>Access and Update:</strong> Access and update your personal information at any time through your account settings.</li>
        <li><strong>Delete:</strong> Request the deletion of your personal information, subject to certain legal obligations.</li>
        <li><strong>Withdraw Consent:</strong> Withdraw your consent for us to process your information, though this may affect your ability to use our services.</li>
      </ul>
      <h2>7. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on our website or within the Health App, and the effective date will be indicated at the top of the policy.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
      </p>
      <p><strong>Email:</strong> thehealthapp99@gmail.com</p>

      <p>
        By using our Health App, you acknowledge that you have read and understood this Privacy Policy and agree to our collection, use, and disclosure of your information as described herein.
      </p>

      <p>Thank you for trusting Health App with your healthcare needs.</p>
      <WebsiteRights>The health app &copy; {new Date().getFullYear()}  All Rights Reserved.</WebsiteRights>

    </div>
  );
};

export default PrivacyPolicy;
