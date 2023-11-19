import React , { useState } from 'react';
import Navbar from "./Compenent/Routes/Navbar";
import { Routes, Route } from 'react-router-dom';

import Calc from "./Compenent/Routes/Calc";
import Form_task from "./Compenent/Routes/Form_task";
import Api from "./Compenent/Routes/Api";
import ImageSlider from './Compenent/Routes/ImageSlider';
import { SliderData } from './Compenent/Routes/SliderData';
import Home from "./Compenent/Routes/Home";

//import Contenu from "./Compenent/Contenu/Contenu";
import ToggleLangs from "./Compenent/ToggleLangs/ToggleLangs";
import ContextProvider from "./context/langContext"
import Contenu from "./Compenent/Contenu/Contenu";
import './syle.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ContextProvider>
              
             
      <div className={darkMode ? 'App dark-mode' : 'App'}>
           
              
    
          <Navbar />
          <button id='btnd' className={darkMode ? 'btn-light' : 'btn-dark'}  onClick={toggleTheme}>
        {darkMode ? 'Light' : 'Dark'}
      </button>
        
       
       
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Calc' element={<Calc />} />
          <Route path='/Form_task' element={<Form_task />} />
          <Route path='/Api' element={<Api />} />
          <Route path='/ImageSlider' element={<ImageSlider slides={SliderData} />} />
          <Route path='/Langs' element={<><ToggleLangs /><Contenu /></>} />

          <Route path='*' element={<><h1>404</h1></>} />
        </Routes>
        
      </div>
      </ContextProvider>
    
  );
}

export default App;
