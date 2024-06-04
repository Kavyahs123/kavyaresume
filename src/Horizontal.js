import React, { useState } from 'react';
import html from '../src/images/html.png';
import css from '../src/images/css.png';
import js from '../src/images/js.png';
import react from '../src/images/react.png';
import boostrap from '../src/images/bootstrap.png';
import sass from '../src/images/sass.png';
import java from '../src/images/java.png';
import mongo from '../src/images/mongo.png';
import sql from '../src/images/sql.png';
import vue from '../src/images/vue.png';



export const Horizontal = () => {
  const [showThirdRow, setShowThirdRow] = useState(false);

  const toggleThirdRow = () => {
    setShowThirdRow(!showThirdRow);
  };

  return (
    <>
      <div id="skills">
        <h5 style={{ textAlign: 'left', padding: '20px', letterSpacing: '0.5px', fontWeight: 'bold', width: '178px', color: 'white', backgroundColor: "#093523" }}>
          <span style={{ color: "#FF5733" }}>#</span> Skills
        </h5>
        <div className="d-grid mt-4">
          <section className='d-flex m-4'>
            <div className="card-container" >
              <div className="skill-card" >
                <div className="image-container">
                  <img src={html} alt=" " className="image" />
                  <p>Proficient in creating semantic and accessible HTML structures.</p>
                </div>
              </div>
            </div>
            <div className="card-container">
              <div className="skill-card">
                <div className="image-container">
                  <img src={css} alt=" " className="image" />
                  <p>Strong command of CSS for styling and layout, including flex box and grid layout.</p>
                </div>
              </div>
            </div>
            <div className="card-container" >
                <div className="skill-card">
                  <div className="image-container">
                    <img src={js} alt=" " className="image" />
                    <p>Practical experience in using JavaScript for dynamic and interactive web applications.</p>
                  </div>
                </div>
              </div>

            

          </section>

          <section className='d-flex m-4'>
          <div className="card-container" >
              <div className="skill-card">
                <div className="image-container">
                  <img src={react} alt=" " className="image" />
                  <p>Skilled in developing dynamic, single-page applications using ReactJS, proficiently leveraging concepts such as routing, virtual DOM manipulation, ES6 syntax, JSX, and functional components.</p>
                </div>
              </div>
            </div>
            <div className="card-container">
              <div className="skill-card">
                <div className="image-container">
                  <img src={mongo} alt=" " className="image" />
                  <p>Familiar with working with MongoDB. Have experience in basic design and implementation of MongoDB schemas, indexing, and queries.</p>
                </div>
              </div>
            </div>
            <div className="card-container">
              <div className="skill-card">
                <div className="image-container">
                  <img src={boostrap} alt=" " className="image" />
                  <p>Familiarity with the Bootstrap framework for rapid and responsive frontend development.</p>
                </div>
              </div>
            </div>
          
           

          </section>

          {showThirdRow && (
            <>
            <section className='d-flex m-4'>
           
              <div className="card-container" >
                <div className="skill-card">
                  <div className="image-container">
                    <img src={vue} alt=" " className="image" />
                    <p>Understanding the concept of Vue components and how to create, nest, and reuse them to build complex user interfaces.</p>
                  </div>
                </div>
              </div>
              <div className="card-container">
                <div className="skill-card">
                  <div className="image-container">
                    <img src={sass} alt=" " className="image" />
                    <p>Understanding how to declare and use variables to store reusable values such as colors, font sizes, or breakpoints, allowing for easier maintenance and consistency across stylesheets.</p>
                  </div>
                </div>
              </div>
              <div className="card-container">
              <div className="skill-card">
                <div className="image-container">
                  <img src={java} alt=" " className="image" />
                  <p>Good knowledge of Oops concept like Abstraction, Encapsulation, Polymorphism, Inheritance. Strong in Exception handling and written custom exception.</p>
                </div>
              </div>
            </div>
              
            </section>
            <section className='m-4'>
            <div className="card-container" >
              <div className="skill-card">
                <div className="image-container">
                  <img src={sql} alt=" " className="image" />
                  <p>Solid understanding of RDBMS concepts. Comfortable with writing SQL statements like DDL, DML, DQL etc. Implemented Joins and sub queries</p>
                </div>
              </div>
            </div>
          </section>
            </>
          )}

         
        </div>
        <div style={{ textAlign:'center'}}>
          <button onClick={toggleThirdRow} style={{border:"none",backgroundColor:'white', animation: `${showThirdRow ? 'blinkingUp' : 'blinkingDown'} 1s infinite alternate`}}>{showThirdRow ? <i class="bi bi-chevron-bar-up" style={{fontSize:'50px',color:'#FF5733',paddingLeft:'180px'}}>  </i> : <i style={{fontSize:'50px',color:'#FF5733',paddingLeft:'180px'}} class="bi bi-chevron-bar-down"></i>}</button>
        </div>
      </div>
    </>
  )
}
