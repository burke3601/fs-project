import React from 'react'
import Sidebar from './Sidebar'
import Graph from './Graph'

import {useState, useEffect} from 'react'
import Api from './Api'
import Weather from './Weather'

import { 
   
  Link,
 
} from 'react-router-dom';

import TimeButton from './TimeButton'



function Dashboard(props){
 
  
  
  console.log(props.count)
    return(
        
        
        <div className='dashboard'>
          <div className="weatherAndCounter">


                <div >
                  <Weather 
                    data = {props.data}
                    fetchWeather = {props.fetchWeather}
                    weather={props.weather}
                  />
                </div>
                <div className="dashboardbuttons">
                      <div className="upperButtons">


                        <h3>Mostrando ultimas:</h3>
                        <br/>
                        <Link>
                          <TimeButton 
                            data = {props.data}
                            handleClick = {(e) => {props.addHour(props.count, props.data[0].station)}}
                            count = {props.count - 6}
                            text = {"+"}>
                          </TimeButton>
                        </Link>
                        <h2>
                          {props.count}
                        </h2>
                      
                        <Link to='/graphs'>
                          <TimeButton 
                            data = {props.data}
                            handleClick = {(e) => {props.subtractHour(props.count, props.data[0].station)}}
                            count = {props.count - 6}
                            text = {"-"}>
                          </TimeButton>
                          
                        </Link>
                        <br/>
                        <h3>horas</h3>
                      </div>
                      <div className = "extendedperiodbuttons">
                      <Link to='/graphs'>
                        <TimeButton 
                          data = {props.data}
                          handleClick = {(e) => {
                            props.getDay("day", props.data[0].station)
                            props.setCount(7)}}
                          count = {props.count - 6}
                          text = {"Dia"}>
                        </TimeButton>
                        <TimeButton 
                          data = {props.data}
                          handleClick = {(e) => {
                            props.getDay("week", props.data[0].station)
                            props.setCount(7)}}
                          count = {props.count - 6}
                          text = {"Semana"}>
                        </TimeButton>
                        <TimeButton 
                          data = {props.data}
                          handleClick = {(e) => {
                            props.getDay("month", props.data[0].station)
                            props.setCount(7)}}
                          count = {props.count - 6}
                          text = {"Mes"}>
                        </TimeButton>
                      </Link>


                        </div>
                  </div>
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