import React from 'react';
import Api from './Api'
import{ useState, useEffect } from 'react';


function Weather(props) {
   console.log(props)
  
    return(
        <div className="weather-container">
            <div className="info-container">
                <div className="location-info">
                    <h3>
                      {props && props.data && props.data.length>0?props.data[0].station: "Guatemala"},
                    </h3> 
                    <div></div>
                    <p>
                        Departamento de {props && props.data && props.data.length>0?props.data[0].departamento: "Guatemala"}
                    </p>
                </div> 
                <div className="image-icon">
                    <div
                        fetchWeather = {props.fetchWeather}
                        weather = {props.weather}></div>
                        <img className="img-fluid" alt="logo" src={props.weather && props.weather.current && props.weather.current.weather && 
                        ("https://openweathermap.org/img/w/" +  props.weather.current.weather[0].icon + ".png")
                        }
                    />
                </div>

            </div>
            <div className="temp-info">
                <div className="temp-unit">
                        <div className="current-temp"> 
                            {/* <h3>Current Temp:</h3> */}
                            <br></br>   
                        {props.weather && props.weather.current && props.weather.current.temp + "° C"}  
                        </div>
                </div> 
                <div className="temp-details">
                    <ul>
                        <h3>Details:</h3>
                        <li>feels like: {props.weather && props.weather.current && props.weather.current.feels_like + "° C"}</li>
                        <li>{props.weather && props.weather.current && props.weather.current.weather && props.weather.current.weather[0].description}</li>
                        <li>max temp: {props.weather && props.weather.daily && props.weather.daily[0].temp && props.weather.daily[0].temp.max + "° C" }</li>
                    </ul>
                </div>
             
            </div>
        
            <footer className="footer">
                    Clima
            </footer>
        </div>
    );
}

export default Weather