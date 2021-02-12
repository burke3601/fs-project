import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logoutIcon from './images/logoutIcon.png'

function Logout(props) {

  const onClick = async (e) => {
    e.preventDefault();
    props.doLogout();
  };

  return (
    <Link to="/" >
        <button onClick={onClick}>
        <img className="sidebar-button"  src={logoutIcon}/>
        </button>
    </Link>
  );
}


export default Logout;