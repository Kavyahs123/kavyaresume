import React from 'react';
import me from '../src/images/me.jpg';
import myresume from '../src/resume/resume.pdf';
import gif from '../src/images/gif1.gif';
export const About = () => {
  return (
    <div id="home" className="mt-5 d-flex" style={{ justifyContent: 'center', alignContent: 'center' }}>
      <section style={{ display: 'grid', boxShadow: '10px 8px 10px 10px rgba(0,0,0,0.1)' }}>
        <div style={{ textAlign: 'center', backgroundColor: 'black', padding: '50px' }}>
          <img className='mb-2' src={me} alt=" " height="100px" width="100px" style={{ borderRadius: '50%' }}></img>
          <h5 style={{ lineHeight: '24px', fontWeight: 'bold', color: 'white' }}>Kavya H S</h5>
          <div style={{ width: '40px', borderBottom: '2px solid #FF5733', position: 'relative', bottom: '-2px', left: '40%' }}></div>
          <h6 className="pt-4" style={{ letterSpacing: '2px', fontSize: '14px', color: '#eee',fontStyle:'italic' }}>Software Engineer</h6>
          <h6 style={{ letterSpacing: '2px', fontStyle: 'normal', fontSize: '12px', color: '#eee' }}><a href="mailto:kavyakavyagowda80@gmail.com" style={{textDecoration:"none"}}>kavyakavyagowda80@gmail.com</a></h6>
          <h6 style={{ letterSpacing: '2px', fontStyle: 'normal', fontSize: '12px', color: '#eee' }}>8310241431</h6>
        </div>
       <div className="p-4 " style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <a href="http://linkedin.com/in/Kavya H S">   <i className="bi bi-linkedin text-white" style={{ fontSize: '20px' }}></i></a>
          <a href="mailto:kavyasuresh510@gmail.com"><i className="bi bi-envelope text-white" style={{ fontSize: '20px' }}></i></a>
          <a href="https://github.com/Kavyahs123"><i className="bi bi-github text-black" style={{ fontSize: '20px' }}></i></a>
        </div> 
      </section>

      <div className='p-5'    >
      <img src={gif} alt="Hello GIF" style={{ width: '120px'}} />
        <h5 className='pb-2' style={{ letterSpacing: '1px' ,fontStyle:'italic'}}>Here's who I am & what I do</h5>

        <button type="button" className="btn " style={{ backgroundColor: '#FF5733', borderRadius: '20px', marginRight: '10px' }} > <a href={myresume} download="KavyaResume.pdf" style={{ textDecoration: 'none', color: 'white' }} >Resume
        </a>  </button>
        <button type="button" className="btn text-black" style={{ backgroundColor: '#eee', borderRadius: '20px', border: '1px solid gray' }} > <a href="#project" style={{textDecoration:'none',color:'black'}} >Projects
        </a> </button>
        <p className='pt-4' style={{ width: '700px', textAlign: 'justify' }}>
          I specialize in both frontend and backend development. On the frontend, I specialize in crafting user interfaces using a combination of technologies including React.js, Bootstrap, Material-UI components, Vue.js, and Sass. This allows me to create visually appealing and responsive layouts while optimizing performance for enhanced user experiences.
        </p>
        <p style={{ width: '700px', textAlign: 'justify' }}>
          On the backend,  I excel in developing robust RESTful APIs using Node.js and Express.js. My skill set encompasses creating endpoints for various HTTP methods like GET, POST, and DELETE, facilitating smooth data transactions between the client and server.
        </p>
     
      </div>
    
    </div>
  )
}
