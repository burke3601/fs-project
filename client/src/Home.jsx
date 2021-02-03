import React from 'react'
import Dashboard from './Dashboard'
import Header from './Header'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Home(){
    return(
        <div className='container'>
            
           <Navbar></Navbar>
            <Sidebar>
                
            </Sidebar>
            <Dashboard>

            </Dashboard>
        </div>
    )
}


export default Home