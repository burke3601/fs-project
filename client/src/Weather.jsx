import React from 'react';
import Api from './Api'


function Weather(props) {
   
  
    return(
        <div className="weather-container">
            <div className="info-container">
                <div className="location-info">
                    <h3>
                        L
                    </h3> 
                </div>
                <div className="temp-unit">
                    <p>8 degrees C</p>
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
                        <li>Humidity: 89%</li>
                        <li>Min Temp: 34</li>
                        <li>Max Temp: 89</li>
                    </ul>
                </div>
             
            </div>
        

        </div>
    );
}

export default Weather