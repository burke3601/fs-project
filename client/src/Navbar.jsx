import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import {Link} from 'react-router-dom'
import Logout from './Logout';
import buttonIcon from './images/buttonIcon.png'

import {useHistory} from 'react-router-dom';
import axios from 'axios'

function Navbar(props){
    const history = useHistory();
    async function doLogout() {
        //executes logout from logout button in navbar
        const logginout = await axios.post("/api/logout")
        console.log('all logged out'); 
        console.log({history}); 
        //set state to false
        props.isLoggedIn(false)
        history.push("/")
      }
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
                <Logout doLogout={doLogout}/>
                </div>
                   
            </div>
        </nav>

    )
}

export default Navbar