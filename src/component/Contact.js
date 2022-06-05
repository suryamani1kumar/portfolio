import React from 'react'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Contact() {
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
                            <PhoneAndroidIcon />
                            <span>:</span>
                            <span>9821131412</span>
                        </div>
                        <div className='mobile'>
                            <EmailIcon />
                            <span>:</span>
                            <span>suryamani123@gmail.com</span>
                        </div>
                        <div className='social'>
                            <span>Social-media</span>
                            <GitHubIcon />
                            <LinkedInIcon />
                            <WhatsAppIcon />


                        </div>



                    </div>



                </div>
                <div className='form-input'>
                    <label for='name'>FirstName</label>
                    <input type='text' />
                    <label for='name'>LastName</label>
                    <input type='text' />
                    <label for='email'>Email</label>
                    <input type='email' />
                    <label for='number'>Number</label>
                    <input type='text' />

                    <label for='message' >Message</label>
                    <textarea ></textarea>

                    <button type='sumbit'>Sumbit</button>
                </div>

            </div>




        </div>
    )
}

export default Contact