import React from 'react';
import {Link} from 'react-router-dom'

function Navbar(){
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
        </div>
        
        
    </div>
    <div className="nav-center">
        <Link to='/'>
            
        </Link>
        <ul className="nav-links">
            <li>
                <Link to='/'>home</Link>
            </li>
            <li>
                <Link to='/about'>about</Link>
            </li>
        </ul>
        
    </div>
</nav>
    )
}

export default Navbar