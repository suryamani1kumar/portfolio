import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Form from './Form';
import { contactForm, erroronBlur, validation } from '../utils/input';

function Contact() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [blurError, SetblurError] = useState({});

  const sumbitform = (e) => {
    e.preventDefault();
    const err = validation(contact, SetblurError);
    if (err) {
      return;
    }
    // console.log('err', err);
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
        <form onSubmit={sumbitform}>
          {contactForm(contact, blurError).map((input, i) => (
            <Form
              key={i}
              {...input}
              onChange={(e) => handleContact(e)}
              onBlur={(e) => erroronBlur(e, SetblurError)}
            />
          ))}
          <textarea
            type="text"
            value={contact.message}
            id="message"
            name="message"
            placeholder="Comment"
            autoComplete="off"
            required
            onChange={(e) => handleContact(e)}
            onBlur={(e) => erroronBlur(e, SetblurError)}
          ></textarea>
          {blurError.message}
          <button type="sumbit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
