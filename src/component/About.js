import React from 'react'
import {
    Email,
    GitHub,
    LinkedIn,
    WhatsApp
} from '@mui/icons-material';

function About() {
    return (
        <div className='about'>
            <div className='text' style={{ color: '#606060' }}>
                <h2>About Us</h2>
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
        </div>
    )
}

export default About