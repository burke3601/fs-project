import React from 'react'
import Sidebar from './Sidebar'
import Graph from './Graph'

import {useEffect} from 'react'
import Api from './Api'
import Weather from './Weather'

function Dashboard(props){
  
  console.log(props)
  //console.log(props)
    return(
        
        
        <div className='dashboard'>


                <div >
                  <Weather 
                    data = {props.data}
                    fetchWeather = {props.fetchWeather}
                    weather={props.weather}
                  />
                </div>
                  <div>
                    <button  id={ "day"} value={props.data} className="graphButtons" onClick={props.getDay}>Dia</button>
                    <button id="week" className="graphButtons" onClick={props.getWeek}>Semana</button>
                    <button id="month" className="graphButtons" onClick={props.getMonth}>Mes</button>
                    </div>
                <div className="mainGraph">
                    
                    <Graph 
                    data = {props.data}
                    >
                    </Graph>
                    
                </div>
                
            </div>
        

    )
}


export default Dashboard