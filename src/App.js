import React from 'react'
import './App.css';
import Home from './pages/home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SignInPage from './pages/signin';

function App() {
  return (
    <Router>
      <Routes>
       <Route path='/' element={<Home />} exact />
       <Route path='/signin' element={<SignInPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
