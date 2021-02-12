
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const center = {
    lat: 15.4651,
    lng: -90.3843
  }
function Sidebar(props){

    
    

    return(
        <>
        <div className={props.toggle ? 'sidebar': 'sidebar hidden'}>
            <div className = 'sidebarLinks'>
                
                    <Link to='/home'onClick={props.fetchWeather}
                      >
                        <div className="sidebarItem">  
                            <img className="icon" src="https://img.icons8.com/ios/20/000000/brittany-map.png"/>
                           <p>View Map</p> 
                        </div>
                    </Link>
                    <br/>
                    <Link to='/graphs'onClick={props.getRocja}>
                        <div className="sidebarItem">   
                            <img className="icon" src="https://img.icons8.com/ios-glyphs/20/000000/rope-bridge.png"/>
                            <p>Rio Rocja 
                            Pontila</p> 
                        </div> 
                    </Link>
                    <br/>
                    <Link to='/graphs' onClick={props.getNaranjo}>
                        <div className="sidebarItem">  
                            <img className="icon" src="https://img.icons8.com/ios-glyphs/20/000000/rope-bridge.png"/>
                          <p>Rio Naranjo</p>  
                        </div>
                    </Link>
                </div>

        </div>
        </>
    )
}


export default Sidebar