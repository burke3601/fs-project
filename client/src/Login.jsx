import React, {useState} from 'react';
import Home from './Home'
import { 
    BrowserRouter as Router, 
    Link,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { render } from '@testing-library/react';




function Login(props) {
    // const [details, setDetails] = useState({username: "", password: ""});
   const {doLogin, setUsername, username, setPassword, password} = props;
    // const [user, setUser] = useState({userName: ""});
    // const [error, setError] = useState("");
    // const [loginSuccess, setLoginSuccess] = useState(false);

    // const loginCheck = (details) => {
    //     console.log(details);

    //     if (details.userName === adminUser.userName && details.password === adminUser.password ){
    //         console.log("Logged in");
    //         setUser ({
                
    //             userName: details.userName
          
           
    //         });
    //        setLoginSuccess (true)
    //     } else {
    //         console.log("Authentication Does Not Match!!")
    //         setError("Authentication Does Not Match!!")

    //         return false
    //     }
    // }

    // const Logout = () => {
    //     console.log("Logout");
    //     setUser({userName: ""});
    // }


    return(

        <div className="Login">

            <div className="LoginHeader">
                
                <h1>SATGAL</h1>
                <h2>Sistema de Alerta Temprana</h2>
            </div>
            <div className="loginForm">
                <form onSubmit={e => {
                    e.preventDefault();
                    doLogin(username, password)
                    
                }}>
                    
                    <div className="form-inner">
                       
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" name="username" id="username" onChange={e => setUsername(e.target.value)} value={username}  />
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" id="password"  onChange={e => setPassword(e.target.value)} value={password}  />
                           
                        </div>
                           <input type="submit" value="LOGIN" />
                    </div>
                </form>
            </div>
           
            </div>      
           
        

    )}     
        
    
            
       
    


export default Login