import React, { useState } from "react";
import { db, auth } from "../../components/configuration/firebaseConfig";
import { ref, remove, query, orderByChild, equalTo, get } from "firebase/database";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import logo from '../../images/logo.png';
import { NavLogo } from '../../components/navbar/navbarElement';
import './RemoveDetails.css';

const RemoveDetails = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [message, setMessage] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  // Function to setup reCAPTCHA
  const setupRecaptcha = () => {
    return new Promise((resolve, reject) => {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible', // Invisible for production, visible for testing
        'callback': () => resolve(),
        'expired-callback': () => {
          setMessage('Recaptcha expired, please try again.');
          reject('Recaptcha expired');
        }
      }, auth);

      window.recaptchaVerifier.render().then(() => resolve());
    });
  };

  // Function to send OTP
  const sendOtp = async () => {
    try {
      await setupRecaptcha();
      const appVerifier = window.recaptchaVerifier;
      const phoneNumber = "+91" + phone.trim();
      
      const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(result);
      setMessage(`OTP sent to ${phone}`);
      setIsOtpSent(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
      setMessage("Failed to send OTP. Please try again.");
    }
  };

  // Function to verify OTP and delete user details
  const verifyOtpAndDelete = async () => {
    if (!confirmationResult) {
      setMessage("Please send OTP first.");
      return;
    }

    try {
      const result = await confirmationResult.confirm(otp);
      console.log("Result ", result);
      const userRef = query(ref(db, 'India/User_Details'), orderByChild('MobileNoOfUser'), equalTo(phone));
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const userId = Object.keys(snapshot.val())[0]; // Get the first matched record
        const deleteRef = ref(db, `India/User_Details/${userId}`);
        
        await remove(deleteRef);
        setMessage("User details successfully deleted.");
      } else {
        setMessage("User not found.");
      }
    } catch (error) {
      console.error("Error verifying OTP or deleting user details:", error);
      setMessage("Incorrect OTP or error deleting details. Please try again.");
      window.recaptchaVerifier.clear(); // Clear reCAPTCHA for retry
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation for phone number (Indian format)
    const phonePattern = /^[6-9]\d{9}$/; // Simple regex for Indian phone numbers
    if (!phonePattern.test(phone.trim())) {
      setMessage("Please enter a valid phone number.");
      return;
    }

    try {
      await sendOtp();
    } catch (error) {
      setMessage("Error sending OTP, please try again.");
    }
  };

  return (
    <div>
      <div style={{ backgroundColor: 'black', padding: '10px' }}>
        <NavLogo>
          <img src={logo} alt='logo' style={{width:'40px', height:'40px', marginRight:'10px'}} />
          The Health App
        </NavLogo>
      </div>

      <h2>Remove Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Registered Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Registered Contact Number:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Registered Email ID:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isOtpSent}>Send OTP</button>
      </form>

      {isOtpSent && (
        <>
          <h3>Enter OTP</h3>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button onClick={verifyOtpAndDelete}>Verify OTP & Delete</button>
        </>
      )}

      <div id="recaptcha-container"></div>

      <p>{message}</p>
    </div>
  );
};

export default RemoveDetails;
