import React from 'react'
import Sidebar from './Sidebar'
import Graph from './Graph'
import Map from './Map'
import {useEffect} from 'react'
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

function Dashboard(props){
  //console.log(props)
    return(
        
        
        <div className='dashboard'>
            
                <div className="mainGraph">
                    {}
                    <Graph data = {props.data}>

                    </Graph>
                   
                </div>
                {/* <Graph></Graph>
                <Graph></Graph>
                <Graph></Graph> */}
            </div>
        

    )
}


export default Dashboard