import React, {useState} from 'react';
//import {REACT_APP_API_KEY} from './config'



function Api(props){
   
   
    console.log(props)


return(
    <div>
        <button onClick={props.fetchWeather}>submit</button>
        <img className="img-fluid" src="openweathermap.org/img/w/{props.weather && props.weather.current && props.weather.current.weather && props.weather.current.weather[0].icon}.png"/>
            
        
    </div>
);

}
//fetchWeather()


export default Api;