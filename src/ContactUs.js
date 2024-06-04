import React,{useState} from 'react';
import thankyou from '../src/images/thank.gif';
import emailjs from 'emailjs-com';



export const ContactUs = () => {
  const [submitted,setSubmitted]=useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else {
      newErrors.name = "";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    // Validate phone
    const phoneRegex = /^[0-9]{10}$/; // Adjust as per your phone number format
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
      isValid = false;
    } else {
      newErrors.phone = "";
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else {
      newErrors.message = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs.send('service_v10l8n9', 'template_gi5tqfy', formData, 'J7Bp_V5chIrngGAkE')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        
      });
  }
  };

  return (
    <div  id="contact">
                 <h5 className="mt-2" style={{ textAlign: 'left', padding: '20px', letterSpacing: '0.5px', fontWeight: 'bold', width: '178px', color: 'white', backgroundColor: "#093523" }}><span style={{color:'#FF5733'}}>#</span> Contact</h5>
{submitted ?(
  <div >
<img  src={thankyou} alt="thankyou" width="250px" height="250px"></img>
  </div>
):(
    <div>

      
        <div className="m-4 " style={{letterSpacing:'1px'}}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>
            <button type="submit" className="btn text-white" style={{ marginBottom: '20px', letterSpacing:'1px',width: '100%',backgroundColor:"#FF5733" }}>
              Submit
            </button>
          </form>
        </div>
        </div>
  )}
    </div>
  )
}
