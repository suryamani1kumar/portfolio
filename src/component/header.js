import React from 'react'
import Logo from '../asset/logo.png'

import './header.css'


function Header() {

    return (
        <div className='header'>
            <div className='logo'>
                <img src={Logo} alt='logo' className='imgLogo' />
            </div>
            <ul>
                <li >
                    Home
                </li>
                <li>
                    About Us

                </li>
                <li>
                    Skill
                </li>
                <li>
                    Service
                </li>
                <li>
                    Project
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </div>
    )
}

export default Header