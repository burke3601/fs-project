import React from 'react'
import Sidebar from './Sidebar'
import Graph from './Graph'
import Map from './Map'

const location = {
    address: 'Pueblo Nuevo',
    lat: 14.365316,
    lng: -91.81191,
  }
  
  const locationTwo = {
    address: 'Location 2',
    lat: 16.365316,
    lng: -91.81191,
  
  
  }

function Dashboard(){
    return(
        
        <div className='dashboard'>
            <div className="graphBox">
                <div className="mainGraph">
                    <Graph>

                    </Graph>
                </div>
                <Graph></Graph>
                <Graph></Graph>
                <Graph></Graph>
            </div>
        </div>
          
    )
}


export default Dashboard