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




function Login() {
    const adminUser = {
        userName: "admin",
        password: "admin123"

    }
    const [details, setDetails] = useState({name: "", userName: "", password: ""});
    const [user, setUser] = useState({name: "", userName: ""});
    const [error, setError] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);

    const loginCheck = (details) => {
        console.log(details);

        if (details.userName === adminUser.userName && details.password === adminUser.password ){
            console.log("Logged in");
            setUser ({
                name: details.name,
                email: details.userName
          
           
            });
           setLoginSuccess (true)
        } else {
            console.log("Authentication Does Not Match!!")
            setError("Authentication Does Not Match!!")

            return false
        }
    }

    const Logout = () => {
        console.log("Logout");
        setUser({ name: "", userName: ""});
    }


    return(
        <div className="Login">
            {(user.userName !== "") ? (
                <div className="welcome">
                    <h2>welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <form onSubmit={e => {
                    e.preventDefault();
                    loginCheck(details)
                }}>
                    <div className="form-inner">
                        <h2>Login</h2>
                        {(error !== "") ? ( <div className="error">{error}</div>) : ""}
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name"  onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="userName">Username:</label>
                            <input type="text" name="userName" id="userName" onChange={e => setDetails({...details, userName: e.target.value})} value={details.userName} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" id="password" onChange={e => setDetails({...details,password: e.target.value})} value={details.password} />
                        </div>
                           <input type="submit" value="LOGIN" onClick={loginCheck} />
                    </div>
                </form>
            )}
             {/* make a conditions of if loginSuccess is true then redirect to home */}
            {loginSuccess &&  <Redirect to='/home' />}
        </div>

    )}     
        
    
            
       
    


export default Login