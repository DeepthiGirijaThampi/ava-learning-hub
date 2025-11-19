import {useEffect, useState } from "react"
import CustomButton from "../common/CustomButton"
import './contact.css'
export default function Contacts(){
    const [submitted, setSubmitted] = useState(false);
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const handleChange = (e)=>{
     const {name,value} =  e.target;
     setContactData( prev => ({
        ...prev,
        [name]:value
     }));
    };

    const handleFormSubmit = (e)=>{
     e.preventDefault();
     console.log("Form submitted : ",contactData);
     setContactData({
        name : "",
        email : "",
        message: ""
    });
    setSubmitted(true);
    }

    useEffect(() => {
        if (submitted) {
          const timer = setTimeout(() => setSubmitted(false), 4000);
          return () => clearTimeout(timer);
        }
      }, [submitted]);
    //rendering
    return(
        <main className="contact ">
         <div>
     
            <h1 className="page-heading">Contact Us</h1>
    
            <form onSubmit={handleFormSubmit}>
            <label>Name </label><input
            type="text" name="name" 
            value={contactData.name} 
            onChange={handleChange} 
            className="contact-name" 
            required
            />
            <label>Email </label><input 
            type="email" 
            name="email" 
            value={contactData.email} 
            onChange={handleChange} 
            className="contact-email" 
            required
            />
            <label>Message:</label>
            <textarea 
            name="message" 
            rows={4}
            value={contactData.message} 
            onChange={handleChange} 
            className="contact-message" 
            required
            ></textarea>
            <CustomButton text = "Submit" type="submit" />
            </form>
            {
                submitted && (
                    <p className="thankyou">Thank you for your response</p>
                )
            }
        </div>
        </main>
    )
}