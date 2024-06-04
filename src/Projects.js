import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const Projects = () => {
  return (
    <div className='mt-5 ' id="project">
      <h5 style={{ textAlign: 'left', padding: '20px', letterSpacing: '0.5px', fontWeight: 'bold', width: '178px', color: 'white', backgroundColor: "#093523" }}><span style={{color:'#FF5733'}}>#</span> Projects</h5>
      <div className='m-4'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faCheck} style={{ color: '#FF5733', marginRight: '10px' }} />
          <div>
            <h5 style={{ fontStyle: 'italic',fontWeight:'bold',color:"#093523" }}>Portfolio Website</h5>
            <p style={{ letterSpacing: '0.3px' }}>Created a personal portfolio website showcasing skills, projects, and achievements <br></br>Implemented clean and modern design using HTML5, CSS3, and BOOTSTRAP components and  JavaScript for functionality <br></br>Incorporated email-js to facilitate efficient communication via contact form.</p>
          </div>
        </div>
      </div>
      <div className='m-4'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faCheck} style={{ color: '#FF5733', marginRight: '10px' }} />
          <div>
            <h5 style={{ fontStyle: 'italic' ,fontWeight:'bold',color:'#093523'}}>Freelancing Website[www.gigleji.com]</h5>
            <p style={{ letterSpacing: '0.3px' }}>Developed a full-fledged freelancing website, serving platform for connecting talents and engager.<br></br> Crafted the website, including home, about, contact, how-we-work , signin, and signup forms, ensuring an intuitive user experience.
   <br></br> Implemented a streamlined engagement posting flow, empowering users to effortlessly post and manage their engagements.</p>
          </div>
        </div>
      </div>
      <div className='m-4'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faCheck} style={{ color: '#FF5733', marginRight: '10px' }} />
          <div>
            <h5 style={{ fontStyle: 'italic',fontWeight:'bold',color:'#093523' }}>Static Website[Ongoing]</h5>
            <p style={{ letterSpacing: '0.3px' }}>Taking charge of the static website design for BuildFortune, a prominent construction company.<br></br> Designing every aspect, from the engaging homepage to the user-friendly contact form and informative about us section.<br></br> Focused on delivering a seamless user experience with a visually appealing UI.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
