import React, { useState } from 'react';

import { Link } from 'react-router-dom';


function Logout(props) {

  const onClick = async (e) => {
    e.preventDefault();
    props.doLogout();
  };

  return (
    <Link to="/" onClick={onClick}>
       SALIR
    </Link>
  );
}


export default Logout;