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
             {/* <h1 className='login-header'>SATGAL</h1> */}
            {/* {(user.userName !== "") ? (
                <div className="welcome">
                    <h2>welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : ( */}
                <form onSubmit={e => {
                    e.preventDefault();
                    doLogin(username, password)
                    // loginCheck(details)
                }}>
                    {/* <h1 className='login-header'>SATGAL</h1> */}
                    <div className="form-inner">
                        {/* <h2>Login</h2> */}
                        {/* {(error !== "") ? ( <div className="error">{error}</div>) : ""} */}
                        {/* <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name"  onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                        </div> */}
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
           
             {/* make a conditions of if loginSuccess is true then redirect to home */}
            {/* {loginSuccess &&  <Redirect to='/home' />} */}

           
        </div>

    )}     
        
    
            
       
    


export default Login