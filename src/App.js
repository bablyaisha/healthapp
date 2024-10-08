import React from 'react'
import './App.css';
import Home from './pages/home';
//import Services from './components/Services/service';
import BookingPage from './pages/Booking_Page/BookingPage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import Navbar from './components/navbar/navbar';
import TermsAndConditions from './pages/Terms&Conditions_Page/Terms&Condition';
import PrivacyPolicy from './pages/Terms&Conditions_Page/PrivacyPolicy';
import TermsCondition_Main from './pages/Terms&Conditions_Page/TermsCondition_Main';
import Form from './pages/Form/Form';

function App() {
  return (
    <Router>
    {/* <Navbar /> */}
      <Routes>
       <Route path='/' element={<Home />} exact />
       {/* <Route path='/' element={<About />} exact />
       <Route path='/' element={<Contact />} exact /> */}
       {/* <Route path='/services' element={<Services /> } />  */}
       <Route path='/booking' element={<BookingPage /> } /> 
       <Route path='/cancellation&refund' element={<TermsAndConditions /> } /> 
       <Route path='/privacypolicy' element={<PrivacyPolicy /> } /> 
       <Route path='/terms&conditions' element={<TermsCondition_Main />} />
       <Route path='/remove-details' element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
