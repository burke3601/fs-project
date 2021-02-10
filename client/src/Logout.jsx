import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Logout(props) {

  const onClick = async (e) => {
    e.preventDefault();
    props.doLogout();
  };

  return (
    <Link to="/" >
        <button onClick={onClick}>
        Logout
        </button>
    </Link>
  );
}


export default Logout;