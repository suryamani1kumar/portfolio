import React, { useState } from 'react'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

import emailjs from 'emailjs-com'
import { useRef } from 'react';


function Contact() {
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const form = useRef()
    const sumbitform = (e) => {
        e.prventDefault()
        emailjs.sendForm('service_sks6eif', 'template_oeubmzr', e.target, 'QlkifqbMNW8h68Ebj')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className='contact'>
            <div className='text' style={{ color: '#606060' }}>
                <h2>Contact Us</h2>
            </div>
            <div className='contact-form'>
                <div className='location'>
                    <div className='location-text '>
                        <span> get </span>
                        <span>in touch</span>
                    </div>
                    
                </div>
                < form className='form-input' onSubmit={sumbitform} ref={form}>
                    <label htmlFor='name'>FirstName</label>
                    <input type='text'
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value)} />
                    <label htmlFor='name'>LastName</label>
                    <input type='text'
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)} />
                    <label htmlFor='email'>Email</label>
                    <input type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor='number'>Number</label>
                    <input type='text'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} />

                    <label htmlFor='message' >Message</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                    <button type='sumbit' >Send Message</button>
                </form>

            </div>
        </div >
    )
}

export default Contact