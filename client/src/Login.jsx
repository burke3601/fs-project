import React, {useState} from 'react';
// import LoginForm from './LoginForm';

function Login() {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"

    }
    const [details, setDetails] = useState({name: "", email: "", password: ""});
    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const loginCheck = (details) => {
        console.log(details);

        if (details.email == adminUser.email && details.password == adminUser.password ){
            console.log("Logged in");
            setUser ({
                name: details.name,
                email: details.email
            });
        } else {
            console.log("Try again")
        }
    }

    const Logout = () => {
        console.log("Logout");
        setUser({ name: "", email: ""});
    }


    return(
        <div className="Login">
            {(user.email != "") ? (
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
                        {/* {(error != "") ? ( <div className="error"></div>)} */}
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name"  onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" id="password" onChange={e => setDetails({...details,password: e.target.value})} value={details.password} />
                        </div>
                           <input type="submit" value="LOGIN" onClick={loginCheck} />
                    </div>
                </form>
            )}
        </div>

    )}     
        
    
            
       
    


export default Login