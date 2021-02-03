import React from 'react';
import Graph from 'react';
import {Link} from 'react-router-dom';


function Sidebar(){
    return(
        <div className='sidebar'>
            Sidebar
            <ul>
                <li>map</li>
               
               <Link to='/graph'>
               <li>Rio naranjo (San Marcos)</li>
                
                </Link>
                 
                <Link to='/graph'>
                <li> Rio Rocja (Alta Verapaz)</li>  
                </Link>
                

            </ul>
        </div>
    )
}


export default Sidebar