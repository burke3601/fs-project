
import {Link} from 'react-router-dom'
import Logout from './Logout';
import {useHistory} from 'react-router-dom';
import axios from 'axios'

function Navbar(props){
    const history = useHistory();
    async function doLogout() {
        //executes logout from logout button in navbar
        const logginout = await axios.post("/api/logout")
        console.log('all logged out'); 
        //console.log({history}); 
        //set state to false
        props.isLoggedIn(false)
        history.push("/")
      }

    return(

        <nav className="navbar">
            
            <div className="topnav">
                <Link className="navhome" to='/home'>INICIO</Link>
                <Link className="about" to='/about'>INFORMACIÓN</Link>
                <Logout doLogout={doLogout}/>
            </div>
            <div className="middlenav">
                <div>
                    <h1>SATGAL</h1>
                    
                </div>
            </div>
            
                
            
            
                
               
           
        </nav>
    )
}

export default Navbar