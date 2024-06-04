import React from 'react';
import pnt from '../src/images/pnt.png';
import frntd from '../src/images/frontnd.png';
import prblm from '../src/images/react .png';

export const Certification = () => {
  return (
    <div id="certification">
      <h5 style={{ textAlign: 'left', padding: '20px', letterSpacing: '0.5px', fontWeight: 'bold', width: '178px', color: 'white', backgroundColor: "#093523" }}><span style={{color:'#FF5733'}}>#</span> Certification</h5>
      <div className="certification-container " style={{ display: "flex",width:'100%' }}>
        <div className="cert-card m-4" style={{boxShadow:'2px 2px 2px 2px rgba(0,0,0,0.5)'}} >
          <img src={pnt} alt="PNT Certification" width="274px" height="220px" />
          
        </div>
        <div className="cert-card m-4" style={{boxShadow:'2px 2px 2px 2px rgba(0,0,0,0.5)'}}>
          <img src={frntd} alt="Frontend Certification" width="274px" height="220px"  />
         
        </div>
        <div className="cert-card m-4" style={{boxShadow:'2px 2px 2px 2px rgba(0,0,0,0.5)'}}>
          <img src={prblm} alt="React Certification" width="274px" height="220px" />
          
        </div>
      </div>
    </div>
  );
};
