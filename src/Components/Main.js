import React from 'react'
import './Main.css'

function Main(props) {
    return (
        <div className={`main-cont ${props.dark && 'main-cont-d'}`}>
            <h1 className={`main-title ${props.dark && 'main-title-d'}`}>Fun facts about React</h1>
            <ul className={`list ${props.dark && 'list-d'}`}>
                <li className='items'>Was first released in 2013</li>
                <li className='items'>Was originally created by Jordhan Walke</li>
                <li className='items'>Has well over 100K stars on Github</li>
                <li className='items'>Is maintained by facebook</li>
                <li className='items'>Powers thousands of enterprise apps, incuding mobile apps</li>
            </ul>
        </div>
    )
}

export default Main
