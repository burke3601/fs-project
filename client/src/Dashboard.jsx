import React from 'react'
import Sidebar from './Sidebar'
import Graph from './Graph'
import Map from './Map'


function Dashboard(){
    return(
        <div className= 'container'>
            <div className='dashboard'>
               
                
                <Sidebar>
                    <Graph />
                </Sidebar>
            </div>
        </div>
    )
}


export default Dashboard