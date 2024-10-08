import React from 'react'
import './App.css';
import Home from './pages/home';
//import Services from './components/Services/service';
import BookingPage from './pages/Booking_Page/BookingPage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import Navbar from './components/navbar/navbar';
import TermsAndConditions from './pages/TermsConditionsPage/TermsCondition';
import PrivacyPolicy from './pages/TermsConditionsPage/PrivacyPolicy';
import TermsConditionMain from './pages/TermsConditionsPage/TermsConditionMain';
// import Form from './pages/Form/Form';

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
       <Route path='/terms&conditions' element={<TermsConditionMain />} />
       {/* <Route path='/remove-details' element={<Form />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
