// RemoveDetails.js
import React, { useState } from "react";
import { db, auth } from "../../components/configuration/firebaseConfig";
import { ref, remove, query, orderByChild, equalTo, get } from "firebase/database";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import Navbar from "../../components/navbar/navbar";
import logo from '../../images/logo.png';
import {
    // Nav,
    // NavbarContainer, 
    NavLogo,
    // MobileIcon, 
    // NavMenu, 
    // NavItem, 
    // NavLinks,
    } from '../../components/navbar/navbarElement'
import './RemoveDetails.css';

const RemoveDetails = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [message, setMessage] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false); // New state for tracking OTP sent

  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'normal', // Change to 'normal' for debugging (invisible for production)
      'callback': (response) => {
        // reCAPTCHA solved, allow OTP request
        sendOtp();
      },
      'expired-callback': () => {
        // Response expired, reCAPTCHA reset required.
        setMessage('Recaptcha expired, please try again.');
      }
    }, auth);
  };

  const sendOtp = () => {
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    const phoneNumber = "+91" + phone.trim(); // Add country code

    console.log("Sending OTP to:", phoneNumber); // Log the phone number
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((result) => {
        setConfirmationResult(result);
        setMessage("OTP sent to " + phone);
        setIsOtpSent(true); // Set to true after OTP is sent
      })
      .catch((error) => {
        console.error("Error during OTP sending:", error);
        setMessage("Failed to send OTP.");
      });
  };

   // Verify OTP and delete the user's data
  const verifyOtpAndDelete = () => {
    confirmationResult.confirm(otp).then((result) => {
      // User signed in successfully
      const user = result.user;
    //   const userId = user.uid; // This is the unique ID used to delete from Firebase

      // Reference to user's data in the database
      const userRef = query(ref(db, 'India/User_Details'),orderByChild('MobileNoOfUser'), equalTo(phone));
      get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          // Step 2: Get the userId (key)
          const userId = Object.keys(snapshot.val())[0]; // Assuming first match, as phone number should be unique
 // : Delete the user's record using userId
 const deleteRef = ref(db, `India/User_Details/${userId}`);
      // Delete the user's record
      remove(deleteRef)
        .then(() => {
          setMessage("User details successfully deleted.");
        })
        .catch((error) => {
          console.error("Error deleting user details:", error);
          setMessage("Error deleting user details.");
        });
    }else {
        setMessage("User not found.");
      }
    }).catch((error) => {
      console.error("Error querying user:", error);
      setMessage("Error finding user.");
    });
}).catch((error) => {
    console.error("Error verifying OTP:", error);
    setMessage("Incorrect OTP.");
  });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendOtp();
  };

  return (
    <div>
    <div style={{ backgroundColor: 'black', padding: '10px' }}>
      <NavLogo>
        <img src={logo} alt='logo' style={{width:'40px', height:'40px', marginRight:'10px'}} />
        The Health App</NavLogo>
        </div>
        {/* <MobileIcon onClick={toggle}>
          <FaBars /> 
        </MobileIcon> */}
    {/* <Navbar/> */}
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
          <label>Registered Email ID</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isOtpSent}>Send OTP</button>
      </form>

      {confirmationResult && (
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
