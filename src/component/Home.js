import React from 'react'
import {
    GitHub,
    LinkedIn,
    Twitter,
    Instagram,
} from '@mui/icons-material';
function Home() {
    return (
        <div className='home'>
            <div>
                <h1>Suryamani</h1>
                <h2>kumar</h2>
            </div>
            <div>
                <h3>Full stack Developer</h3>
            </div>
            <div style={{ display: 'flex' }}>
                <div><span><GitHub /></span></div>
                <div><span><Twitter /></span></div>
                <div><span><LinkedIn /></span></div>
                <div><span><Instagram /></span></div>
            </div>
            <div>
                <button>click</button>
                <button>contacts</button>
            </div>

        </div>

    )
}

export default Home;