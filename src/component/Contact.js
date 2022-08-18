import React, { useState } from 'react'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import {
    Email,
    GitHub,
    LinkedIn,
    WhatsApp
} from '@mui/icons-material';


function Contact() {
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
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
                    <div className='media'>
                        <div className='mobile'>
                            <WhatsApp />
                            <span>:</span>
                            <span>9821131412</span>
                        </div>
                        <div className='mobile'>
                            <Email />
                            <span>:</span>
                            <span>suryamani123@gmail.com</span>
                        </div>
                        <div className='social'>
                            <span>Social-media</span>
                            <a href='https://github.com/suryamani1kumar'>
                                <GitHub />
                            </a>
                            <a href='https://www.linkedin.com/in/suryamani-kumar-75a42920a/'>
                                <LinkedIn />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='form-input'>
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
                    <textarea ></textarea>

                    <button type='sumbit'>Sumbit</button>
                </div>

            </div>
        </div>
    )
}

export default Contact