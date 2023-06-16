import React, { useState } from 'react';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

import emailjs from 'emailjs-com';
import { useRef } from 'react';

function Contact() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const form = useRef();
  const sumbitform = (e) => {
    e.preventDefault();
    console.log(contact);
    // emailjs
    //   .sendForm(
    //     'service_sks6eif',
    //     'template_oeubmzr',
    //     e.target,
    //     'QlkifqbMNW8h68Ebj'
    //   )
    //   .then(
    //     (result) => {
    //       window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };
  const handleContact = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };
  return (
    <div className="contact">
      <div className="text" style={{ color: '#606060' }}>
        <h2>Contact Us</h2>
      </div>
      <div className="contact-form">
        <div className="location">
          <div className="location-text ">
            <span> get </span>
            <span>in touch</span>
          </div>
        </div>
        <form className="form-input" onSubmit={sumbitform}>
          <input
            type="text"
            value={contact.name}
            id="name"
            name="name"
            placeholder="Enter name"
            autoComplete="off"
            required
            onChange={(e) => handleContact(e)}
          />

          <input
            type="email"
            value={contact.email}
            id="email"
            name="email"
            placeholder="enater email"
            autoComplete="off"
            required
            onChange={(e) => handleContact(e)}
          />
          <input
            type="phone"
            value={contact.phone}
            id="phone"
            name="phone"
            placeholder="phone"
            autoComplete="off"
            required
            onChange={(e) => handleContact(e)}
          />

          <textarea
            type="text"
            value={contact.message}
            id="message"
            name="message"
            placeholder="message"
            autoComplete="off"
            required
            onChange={(e) => handleContact(e)}
          ></textarea>

          <button type="sumbit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
