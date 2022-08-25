import React from 'react'
import Logo from '../asset/suryamani.png'

import './header.css'


function Header() {

    return (
        <div className='header'>
            <div className='logo'>
                <img src={Logo} alt='logo' className='imgLogo' />
                <span>S&R$Y</span>
            </div>
            <ul>
                <li >
                    Home
                </li>
                <li>
                    About

                </li>
                <li>
                    Skill
                </li>
                <li>
                    Education
                </li>
                <li>
                    Experience
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </div>
    )
}

export default Header