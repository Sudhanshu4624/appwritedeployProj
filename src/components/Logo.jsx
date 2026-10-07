import React from 'react'
import logo from '../assets/logo2.png'

function Logo({width = '100px'}) {
    return (
        <div>
            <img src={logo} alt="S-blog" style={{width: width}} />
        </div>
    )
}

export default Logo
