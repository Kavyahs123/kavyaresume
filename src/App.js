import './App.css';
import { About } from './About';
import { Education } from './Education';
import { Horizontal } from './Horizontal';
import Slider from './Slider';
import { Certification } from './Certification';
import { Projects } from './Projects';
import { Experience } from './Experience';
import { ContactUs } from './ContactUs';
import { UpArrow } from './UpArrow';

function App() {
  return (
    <div className="App" style={{ display: 'flex', position: 'absolute'}}>
      <div style={{ width: '20%', backgroundColor: '#093523' }}>
       
      </div>
      <div style={{ width: '62%' }}>
       
        <About />
        <Projects/>
        <Experience/>
        <Education/>
        <Horizontal/>
        <Certification/>
        <ContactUs/>
       <UpArrow/>
       
      </div>
      <div style={{position:'relative',left:'26%',width:'5%',backgroundColor:'#FF5733'}}>
     <Slider/>
      </div>
    </div>
  );
}

export default App;
