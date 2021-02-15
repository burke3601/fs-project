import React from 'react'
import Graph from './Graph'
import Weather from './Weather'

import { 

  Link,
 
} from 'react-router-dom';

import TimeButton from './TimeButton'
import addIcon from './images/addIcon.png'
import subtractIcon from './images/subtractIcon.png'



function Dashboard(props){
  console.log(props.count)
  console.log(props.data)
  let num = parseInt(props.count)
  let alertColor = ''
  let alertMessage = ''
  if(props && props.data && props.data.length > 0 && props.data[0].station=== (props.data[1].station)){
    console.log(props.data[props.data.length - 1].level)
    if(props.data[props.data.length - 1].level <= 7){
       alertColor = "green"
       alertMessage = "ALERTA VERDE"
    } else if (props.data[props.data.length - 1].level > 7 && props.data[props.data.length - 1].level <= 14){
      alertColor = "orange"
      alertMessage = "ALERTA NARANJA"
    }else if (props.data[props.data.length - 1].level > 14){
      alertColor = "red"
      alertMessage = "ALERTA ROJA"
    }
  return(
        
        
        <div className='dashboard'>

           
                <div >
                  <Weather 
                    data = {props.data}
                    fetchWeather = {props.fetchWeather}
                    weather={props.weather}
                  />
                </div>
                <div className="dashboardbuttons">
               

                   
                  <div className="dashBox2">
                     
                  <div className="alertbox1">
                        <p>{alertMessage}</p> <span className="alertcolor" style={{backgroundColor: alertColor}}></span>
                     
                        <p>Nivel: {props.data[props.data.length - 1].level}</p>                     
                       
                        <p>Estacion: {props.data[0].station}</p>
                      </div>
                  <div className="hourbuttons">
                    
                      <Link>
                      <TimeButton 
                          data = {props.data}
                          handleClick = {(e) => {
                            props.subtractHour(props.data[0].station)
                          }}
                          // count = {props.count}
                          text = {<img src={subtractIcon}/>}>
                        </TimeButton>
                      </Link>
                      <h2>
                        {num} Hr
                      </h2>
                      <Link to='/graphs'>
                        <TimeButton 
                          data = {props.data}
                          handleClick = {(e) => {
                            props.addHour(props.data[0].station)
                          }}
                          //count = {props.count}
                          text = {<img src={addIcon}/>}>
                        </TimeButton>
                      </Link>
                  
                      
                    </div>
               
                 
                     
                 
                  <div className = "extendedperiodbuttons">
                      <Link to='/graphs'>
                        <TimeButton 
                          data = {props.data}
                          handleClick = {(e) => {
                            props.setCount(1)
                            props.getDay("day", props.data[0].station)
                            }}
                          count = {props.count}
                          text = {"DIA"}>
                        </TimeButton>
                        <TimeButton 
                          data = {props.data}
                          handleClick = {(e) => {
                            props.setCount(1)
                            props.getDay("week", props.data[0].station)
                            }}
                          count = {props.count}
                          text = {"SEMANA"}>
                        </TimeButton>
                        <TimeButton 
                          data = {props.data}
                          handleClick = {(e) => {
                            props.setCount(1)
                            props.getDay("month", props.data[0].station)
                            }}
                          count = {props.count}
                          text = {"MES"}>
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
    <div className='dashboard' >
  
  
  <div >
    <Weather 
      data = {props.data}
      fetchWeather = {props.fetchWeather}
      weather={props.weather}
    />
  </div>
  <div className="dashboardbuttons">
  <div className="hourbuttons">
      


      
      
      <Link>
      <TimeButton 
          data = {props.data}
          handleClick = {(e) => {props.subtractHour( props.data[0].river)}}
          
          text = {<img src={subtractIcon}/>}>
        </TimeButton>
      </Link>
      <h2>
        {num} Hr
      </h2>
      <Link to='/graphs'>
        <TimeButton 
          data = {props.data}
          handleClick = {(e) => {props.addHour(props.data[0].river)}}
          text = {<img src={addIcon}/>}>
        </TimeButton>
      </Link>
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
        text = {"DIA"}>
      </TimeButton>
      <TimeButton 
        data = {props.data}
        handleClick = {(e) => {
          props.setCount(1)
          props.getDay("week", props.data[0].river)
          }}
        count = {props.count }
        text = {"SEMANA"}>
      </TimeButton>
      <TimeButton 
        data = {props.data}
        handleClick = {(e) => {
          props.setCount(1)
          props.getDay("month", props.data[0].river)
          }}
        count = {props.count}
        text = {"MES"}>
      </TimeButton>
    </Link>


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