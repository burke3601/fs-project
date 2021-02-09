import React from 'react'
import Sidebar from './Sidebar'
import Graph from './Graph'
import Map from './Map'
import {useEffect} from 'react'


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