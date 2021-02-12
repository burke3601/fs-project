import React from 'react'
import Graph from './Graph'
import Weather from './Weather'

import { 

  Link,
 
} from 'react-router-dom';

import TimeButton from './TimeButton'



function Dashboard(props){

  let num = parseInt(props.count)
  console.log(props.data)
  let alertColor = ''
  let alertMessage = ''
  if(props && props.data && props.data[0].station=== (props.data[1].station)){
    console.log(props.data[props.data.length - 1].level)
    if(props.data[props.data.length - 1].level <= 7){
       alertColor = "green"
       alertMessage = "Alerta VERDE"
    } else if (props.data[props.data.length - 1].level > 7 && props.data[props.data.length - 1].level <= 14){
      alertColor = "orange"
      alertMessage = "Alerta NARANJA"
    }else if (props.data[props.data.length - 1].level > 14){
      alertColor = "red"
      alertMessage = "Alerta ROJA"
    }
    console.log(alertColor)
  console.log(props.count)
    
  return(
        
        
        <div className='dashboard' style={props.toggle ? {gridColumn: '4/13'}:{gridColumn: '1/13'}}>

            <div className='weatherAndButtons'>
                <div >
                  <Weather 
                    data = {props.data}
                    fetchWeather = {props.fetchWeather}
                    weather={props.weather}
                  />
                </div>
                <div className="dashboardbuttons">
               

                    <div  className="alertBox">
                      

                    <h3  className="alert" style={{backgroundColor: alertColor}}>
                      {alertMessage} nivel: {props.data[props.data.length - 1].level}
                    </h3><h3>Estacion: {props.data[0].station}</h3>
                    <h3>Mostrando ultimas:  </h3>  
                  </div>
                    <br/>
                    <Link>
                      <TimeButton 
                        data = {props.data}
                        handleClick = {(e) => {
                          props.addHour(props.data[0].station)
                        }}
                        //count = {props.count}
                        text = {"+"}>
                      </TimeButton>
                    </Link>
                    <h2>
                      {num}
                    </h2>
                    <Link to='/graphs'>
                      <TimeButton 
                        data = {props.data}
                        handleClick = {(e) => {
                          props.subtractHour(props.data[0].station)
                        }}
                        // count = {props.count}
                        text = {"-"}>
                      </TimeButton>
                    </Link>
                    <br/>
                    <h3>horas</h3>
                  
                  <div className = "extendedperiodbuttons">
                      <Link to='/graphs'>
                        <TimeButton 
                          data = {props.data}
                          handleClick = {(e) => {
                            props.setCount(1)
                            props.getDay("day", props.data[0].station)
                            }}
                          count = {props.count}
                          text = {"Dia"}>
                        </TimeButton>
                        <TimeButton 
                          data = {props.data}
                          handleClick = {(e) => {
                            props.setCount(1)
                            props.getDay("week", props.data[0].station)
                            }}
                          count = {props.count}
                          text = {"Semana"}>
                        </TimeButton>
                        <TimeButton 
                          data = {props.data}
                          handleClick = {(e) => {
                            props.setCount(1)
                            props.getDay("month", props.data[0].station)
                            }}
                          count = {props.count}
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
                      
  }else{
    return(
    <div className='dashboard' style={props.toggle ? {gridColumn: '4/13'}:{gridColumn: '1/13'}}>
  
  <div className='weatherAndButtons'>
  <div >
    <Weather 
      data = {props.data}
      fetchWeather = {props.fetchWeather}
      weather={props.weather}
    />
  </div>
  <div className="dashboardbuttons">
    <div>
      


      <h3>Mostrando ultimas:</h3>
      <br/>
      <Link>
        <TimeButton 
          data = {props.data}
          handleClick = {(e) => {props.addHour(props.data[0].river)}}
          
          text = {"+"}>
        </TimeButton>
      </Link>
      <h2>
        {num}
      </h2>
      <Link to='/graphs'>
        <TimeButton 
          data = {props.data}
          handleClick = {(e) => {props.subtractHour( props.data[0].river)}}
          
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
          props.setCount(1)
          props.getDay("day", props.data[0].river)
         }}
        count = {props.count }
        text = {"Dia"}>
      </TimeButton>
      <TimeButton 
        data = {props.data}
        handleClick = {(e) => {
          props.setCount(1)
          props.getDay("week", props.data[0].river)
          }}
        count = {props.count }
        text = {"Semana"}>
      </TimeButton>
      <TimeButton 
        data = {props.data}
        handleClick = {(e) => {
          props.setCount(1)
          props.getDay("month", props.data[0].river)
          }}
        count = {props.count}
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
}

  




export default Dashboard