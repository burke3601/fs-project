import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import {Link} from 'react-router-dom'
import Logout from './Logout';
import buttonIcon from './images/buttonIcon.png'
import logoutIcon from './images/logoutIcon.png'

function Navbar(props){

    return(

        <nav className="navbar">
            <div className="satgal">
                <Link to='/home'>home</Link>   
                <div className="sidebar-button-container">
                    <img className="sidebar-button" onClick={()=>{props.setToggle(!props.toggle)}} src={buttonIcon}/>
                </div>
            </div>
            <div className="satgal1">
                <h1>SATGAL</h1>
                <h5>Sistema de Alerta Temprana Galileo</h5>
            </div>
            <div className="satgal2">
                <Link to='/about'>about</Link>
            
                <div className="sidebar-button-container">
                    <img className="sidebar-button" onClick={()=>{props.setToggle(!props.toggle)}} src={logoutIcon}/>
                </div>
                    {/* <Logout doLogout={props.doLogout}/> */}
            </div>
        </nav>
    )
}

export default Navbar