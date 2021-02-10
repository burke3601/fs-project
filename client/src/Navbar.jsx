import React from 'react';
import {Link} from 'react-router-dom'

function Navbar(){
    return(
<nav className="navbar">
    <div classname="headernav">
        <h3>Sistema de Alerta Temprana</h3>
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
</nav>
    )
}

export default Navbar