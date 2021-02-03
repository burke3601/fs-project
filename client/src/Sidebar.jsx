
import React from 'react'
import { Link } from 'react-router-dom'
 
function Sidebar(){
    return(
        <div className='sidebar'>
            <div className = 'sidebarLinks'>
                    <Link to='/map'>
                        <div className="sidebarItem">  
                            <img className="icon" src="https://img.icons8.com/ios/20/000000/brittany-map.png"/>
                            View Map
                        </div>
                    </Link>
                    <br/>
                    <Link to='/rocja'>
                        <div className="sidebarItem">   
                            <img className="icon" src="https://img.icons8.com/ios-glyphs/20/000000/rope-bridge.png"/>
                            Rio Rocja 
                            Pontila
                        </div> 
                    </Link>
                    <br/>
                    <Link to='/naranjo'>
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