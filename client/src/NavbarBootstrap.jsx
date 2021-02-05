import React from 'react'

import { 
    BrowserRouter as Router, 
    Link,
    Switch,
    Route
  } from 'react-router-dom';
import Home from './Home';
// import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap'

function NavbarBootstrap(props){
  
    return(
        
        
        <div >
            <ReactBootStrap.Navbar bg="success text-light" expand="lg" >
                <ReactBootStrap.Navbar.Brand href="#home">Sistema de Alerta Temprana</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                    {/* <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#link">Link</ReactBootStrap.Nav.Link> */}
                    <ReactBootStrap.NavDropdown title="Rivers" id="basic-nav-dropdown">
                        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Rio Rocja Pontila</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Rio Naranjo</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Divider />
                        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
                    </ReactBootStrap.NavDropdown>
                    </ReactBootStrap.Nav>
                    {/* <ReactBootStrap.Form inline>
                    <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <ReactBootStrap.Button variant="outline-success">Search</ReactBootStrap.Button>
                    </ReactBootStrap.Form> */}
                </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
          


        </div>
        

    )
}


export default NavbarBootstrap 