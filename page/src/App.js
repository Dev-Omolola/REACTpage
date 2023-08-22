import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import * as Icon from 'react-bootstrap-icons';
// import "../package.json/icofont/css/icofont.min.css";
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Bgpage from './component/Bgpage';
import Logo from './component/Logo';
import Vision from './component/Vision'
import Courses from './component/Courses';
import Study from './component/Study';
import Footer from './component/Footer';
import Tour from './component/Tour';
import News from './component/News';
import Ready from './component/Ready';
import Top from './component/Top';


function App() {
  
  return (
      <div className='App'>
        <Navbar sticky="top"/>
        <div>
           <Hero/>
        </div>
        <div>
          <Bgpage/>
        </div>
        <div>
          <Logo/>
        </div>
        <div>
           <Vision/>
        </div>
        <div>
          <Courses/>
        </div>
        <div>
          <Top/>
        </div>
        <div>
          <Ready/>
        </div>
        <div>
          <News/>
        </div>
        <div>
          <Tour/>
        </div>
        <div>
          <Study/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
  );
}

export default App;
