// Slider.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


const Slider = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="icon " onClick={toggleSlider}>
        <FontAwesomeIcon icon={faBars} color="white" size="2x" />
        <div  style={{ display: 'grid', justifyContent: 'space-evenly' }}>
          <a href="http://linkedin.com/in/Kavya H S">   <i className="bi bi-linkedin text-white" style={{ fontSize: '25px'}}></i></a>
          <a href="mailto:kavyasuresh510@gmail.com"><i className="bi bi-envelope text-white" style={{ fontSize: '25px'}}></i></a>
          <a href="https://github.com/Kavyahs123"><i className="bi bi-github text-white"  style={{ fontSize: '25px'}}></i></a>
        </div> 
      </div>
      {isOpen && (
        <div className="slider">
          {/* <div className="close-icon" onClick={toggleSlider}>
            <FontAwesomeIcon icon={faTimes} color="#093523" size="2x" />
          </div> */}
          <p><a href="#home" style={{textDecoration:'none',color:'#eee',letterSpacing:'0.5px'}}>Home</a></p>
          <p><a href="#skills" style={{textDecoration:'none',color:'#eee',letterSpacing:'0.5px'}}>Skills</a></p>
          <p><a href="#education" style={{textDecoration:'none',color:'#eee',letterSpacing:'0.5px'}}>Education</a></p>
          <p><a href="#certification" style={{textDecoration:'none',color:'#eee',letterSpacing:'0.5px'}}>Certification</a></p>
          <p><a href="#experience" style={{textDecoration:'none',color:'#eee',letterSpacing:'0.5px'}}>Experience</a></p>
          <p><a href="#contact" style={{textDecoration:'none',color:'#eee',letterSpacing:'0.5px'}}>Contact</a></p>
        
         
        </div>
      )}
    </div>
  );
};

export default Slider;
