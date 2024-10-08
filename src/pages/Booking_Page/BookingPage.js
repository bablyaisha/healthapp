// src/components/BookingPage.js

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import './BookingPage.css';
import Footer from '../../components/Footer/footer';
//import logo from '../../images/logo.png';

const BookingPage = () => {
  const location = useLocation();
  const {amount} = location.state || {amount: 0};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <div className="success-message">Payment Successful!</div>;
  }

  return (
    <>
    {/* // <div className='logo-container'>
    // <img src={logo} alt='logo' className='logo-image' />
    // <h1 className='app-title'>The Health App</h1> */}
      {/* <Navbar /> */}
      <Navbar 
    //   onNavClick={(section) => {
    //     // Navigate to the Home page and scroll to the section
    //     window.location.href = `/home#${section}`;
    //   }}
       />
    <div className="booking-page">
      <h2>Booking Payment</h2>
      <h3>Payment Amount: ₹{amount}</h3>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            placeholder="MM/YY"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Pay</button>
      </form>
    </div>
    {/* </div> */}
    <Footer />
    </>
  );
};

export default BookingPage;
