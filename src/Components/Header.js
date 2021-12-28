import React from 'react'
import './Header.css'

function Header(props) {

    return (
        <div className={`${props.dark && 'nav-cont-d'} nav-cont`}>
            <div className='logo-part'>
                <img src="../Images/logo.png" alt="" className='logo' />
                <h2 className='title'>ReactFacts</h2>
            </div>
            <div onClick={props.click} className='toggle-cont'>
                <p className='mode light'>Light</p>
                <div className={`toggle-bar ${props.dark && 'toggle-bar-d'}`}>
                    <div className={`toggle-slider ${props.dark && 'toggle-slider-d'}`}></div>
                </div>
                <p className='mode dark'>Dark</p>
            </div>
        </div>
    )
}

export default Header
