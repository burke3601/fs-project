import React from 'react'
import Sidebar from './Sidebar'
import Graph from './Graph'
import Map from './Map'


function Dashboard(){
    return(
        
            <div className='dashboard'>
                
                <div className="graphBox">
                <div className="mainGraph">
                    <Graph>

                    </Graph>
                </div>
                    <Graph>

                    </Graph>
                    <Graph>

                    </Graph>
                    <Graph>

                    </Graph>
                </div>
                <Map>

                </Map>
            </div>
      
    )
}


export default Dashboard