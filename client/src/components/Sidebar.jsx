
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import buttonIcon from '../images/buttonIcon.png'
const center = {
    lat: 15.4651,
    lng: -90.3843
  }
function Sidebar(props){

    
    

    return(
        <div className="sidbardiv">
        <div className="sidebar-button-container">
                    <img className="sidebar-button" onClick={()=>{props.setToggle(!props.toggle)}} src={buttonIcon}/>
                </div>
        <div className={props.toggle ? 'sidebar': 'sidebar hidden'}>
           
            <div className = 'sidebarLinks'>
                
                    <Link  to='/home' onClick={()=>{
                        props.fetchWeather()
                        props.setToggle(false)
                    }}>
                         <span> Ver <br/>
                           Mapa</span> 
                    </Link>
                  
                    <Link   to='/graphs' onClick={()=>{
                        props.getRocja()
                        props.setToggle(false)
                    }}>
                        <span>Rio Icbolay</span> 
                    </Link>
                
                    <Link  to='/graphs' onClick={()=>{
                        props.getNaranjo()
                        props.setToggle(false)
                    }}>
                        <span>Rio Naranjo</span>  
                    </Link>
                    
            </div>
        </div>
        </div>
        
    )
}


export default Sidebar