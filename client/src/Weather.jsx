import React from 'react';
import Api from './Api'


function Weather(props) {
   
  
    return(
        <div className="weather-container">
            <div className="info-container">
                <div className="location-info">
                    <h3>
                       Guatemala 
                    </h3> 
                </div>
                <div className="temp-unit">
                    <div
                    weather = 
                    {props.weather && props.weather.current && props.weather.current.temp}
                    >


                    </div>
                </div>
            </div>
            <div className="temp-info">
                 <div className="image-icon">
                 <div
                    fetchWeather = {props.fetchWeather}
                    weather = {props.weather}></div>
                    <img className="img-fluid" alt="logo" src={props.weather && props.weather.current && props.weather.current.weather && 
                    ("https://openweathermap.org/img/w/" +  props.weather.current.weather[0].icon + ".png")
                }
                    />
                </div>
                <div className="temp-details">
                    <ul>
                        <li>feels like: {props.weather && props.weather.current && props.weather.current.feels_like + "°"}</li>
                        <li>{props.weather && props.weather.current && props.weather.current.weather && props.weather.current.weather[0].description}</li>
                        <li>max temp: {props.weather && props.weather.daily && props.weather.daily[0].temp && props.weather.daily[0].temp.max + "°" }</li>
                    </ul>
                </div>
             
            </div>
        

        </div>
    );
}

export default Weather