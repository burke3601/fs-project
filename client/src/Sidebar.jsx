
import React from 'react'
import { Link } from 'react-router-dom'
 
function Sidebar(props){
    return(
        <div className='sidebar'>
            <div className = 'sidebarLinks'>
                    <Link to='/home'>
                        <div className="sidebarItem">  
                            <img className="icon" src="https://img.icons8.com/ios/20/000000/brittany-map.png"/>
                            View Map
                        </div>
                    </Link>
                    <br/>
                    <Link to='/graphs'onClick={props.getRocja}>
                        <div className="sidebarItem">   
                            <img className="icon" src="https://img.icons8.com/ios-glyphs/20/000000/rope-bridge.png"/>
                            Rio Rocja 
                            Pontila
                        </div> 
                    </Link>
                    <br/>
                    <Link to='/graphs' onClick={props.getNaranjo}>
                        <div className="sidebarItem">  
                            <img className="icon" src="https://img.icons8.com/ios-glyphs/20/000000/rope-bridge.png"/>
                           Rio Naranjo 
                        </div>
                    </Link>
                </div>

        </div>
    )
}


export default Sidebar