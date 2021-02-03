import React from 'react';
import {Link} from 'react-router-dom'


<nav className="navbar">
    <div className="nav-center">
        <Link to='/'>
            <img src="./logo.svg" alt="app-logo" className="logo" />
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

export default Navbar