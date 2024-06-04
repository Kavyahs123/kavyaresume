import React from 'react';

export const Education = () => {
  return (
    <div id="education" >
      <h5 style={{ textAlign: 'left', padding: '20px', letterSpacing: '0.5px', fontWeight: 'bold', width: '178px', color: 'white', backgroundColor: "#093523" }}>
        <span style={{color:'#FF5733'}}>#</span> Education
      </h5>
      <section className='d-flex'>
      <div>
          <div className="vertical-line">
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>

        
        <div className=" m-4">
      <section className='d-flex'>
        <div className='horizontal-line'>

        </div>
          <div className="card" >
            <div style={{display:'flex',justifyContent:'space-between',backgroundColor:'#eee',padding:'8px',width:'700px'}}> 
              <h5 style={{letterSpacing:'0.5px'}}>Bachelor Of Engineering(ECE) </h5> 
              <h6 style={{color:'#FF5733',fontWeight:"bold"}}>8cgpa</h6>
            </div>
            <h6 className="pt-2" style={{color:'#093523',fontStyle:'italic'}}>Coorg Institue Of technology - Kodagu</h6>
            <h6 style={{color:"#8c8787"}}>2018 - 2022 </h6>
          </div>

          </section>
          <section className='d-flex'>
          <div className='slanted-line'></div>
          <div className="card" >
            <div style={{display:'flex',justifyContent:'space-between',backgroundColor:'#eee',padding:'8px',width:'700px'}}>
              <h5 style={{letterSpacing:'0.5px'}}>PCMB </h5> 
              <h6 style={{color:'#FF5733',fontWeight:"bold"}}>84%</h6>
            </div>
            <h6 className="pt-2" style={{color:'#093523',fontStyle:'italic'}}>Excellent PU College - Mangaluru</h6>
            <h6 style={{color:'#8c8787'}}>2016 - 2018</h6>
          </div>
          </section>
        </div>
      </section>
    </div>
  );
};
