import React from 'react';
import galileolcon from './galileoIcon.png'

function Footer() {
    return(
        <div className= "footer">
            <div className='galileo-box'>
                <img className="galileo" src={galileolcon} alt={galileolcon}/>
            </div>

        </div>
    )
}

export default Footer