import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Navbar from './navbar.jsx';

import Home from './home.jsx';

import Calculator from '../logic/calculator.jsx';

import Quote from './quote.jsx';

import Timer from './time.jsx';

import Bible from './bible.jsx';

const App = () => (
  <div className='App'>
    <Router>
      <div className='nav-time'>
        <Navbar/>
      </div>
      <div className='timer'>
      <Timer/>
      </div>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/calculator' element={<Calculator initialValue={0}/>}/>
        <Route path='/quote' element={<Quote/>}/>
        <Route path='/bible' element={<Bible/>}/>
      </Routes>
    </Router>
  </div>
);

export default App;
