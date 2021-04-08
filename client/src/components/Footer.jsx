import React from 'react';
import galileolcon from '../images/galileo.jpeg'
import caritaslcon from '../images/CARITAS_SN_MARCOS.png'
import conredlcon from '../images/conredresize1.png'
import trocairelcon from '../images/trocaireIcon.png'
import iccIcon from '../images/iccIcon.png'

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