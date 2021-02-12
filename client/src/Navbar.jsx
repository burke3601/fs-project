import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import {Link} from 'react-router-dom'
import Logout from './Logout';
import buttonIcon from './images/buttonIcon.png'


function Navbar(props){

    return(
<nav className="navbar">
    <div className="headerNav">
        <div className="satgal">
            <div className="satgal1">
                <h1>SATGAL</h1>
            </div>
            <div className="satgal2">
                <h5>Sistema de Alerta Temprana Galileo</h5>

            </div>
            <div className="sidebar-button-container">
            <img className="sidebar-button" onClick={()=>{props.setToggle(!props.toggle)}} src={buttonIcon}/>
            </div>
        </div>
        
        
    </div>
    <div className="nav-center">
        <Link to='/'>
            
        </Link>
        <ul className="nav-links">
            <li>
                <Link to='/home'>home</Link>
            </li>
            <li>
                <Link to='/about'>about</Link>
            </li>
           
        </ul>
     
    </div>
<Logout doLogout={props.doLogout}/>
</nav>
    )
}

export default Navbar