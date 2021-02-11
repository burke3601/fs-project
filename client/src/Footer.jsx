import React from 'react';
import galileolcon from './images/galileoIcon.png'
import caritaslcon from './images/caritasIcon.png'
import conredlcon from './images/conredIcon.png'
import trocairelcon from './images/trocaireIcon.jpg'
import iccIcon from './images/iccIcon.jpg'

function Footer() {
    return(
        <div className= "footer">
            <div className='galileo-box'>
                <img className="galileo" src={galileolcon} alt={galileolcon}/>
            </div>
            <div className='caritas-box'>
                <img className="caritas" src={caritaslcon} />
            </div>
            <div className='trocaire-box'>
                <img className="trocaire" src={trocairelcon} />
            </div>
            <div className='conred-box'>
                <img className="conred" src={conredlcon} />
            </div>
            <div className='icc-box'>
                <img className="icc" src={iccIcon} />
            </div>
           

        </div>
    )
}

export default Footer