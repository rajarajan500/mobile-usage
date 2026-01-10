import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';


function App() {
  
  useState(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
 <div>
  <HashRouter>
  
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
 
  </HashRouter>
 </div>
  )
}

export default App
