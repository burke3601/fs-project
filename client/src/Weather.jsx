import React from 'react';


function Weather() {
  
    return(
        <div className="weather-container">
            <div className="info-container">
                <div className="location-info">
                    <h3>
                        L
                    </h3>
                <div className="temp-unit">
                    <p>8 degrees C</p>
                </div>
               
                </div>
            </div>
            <div className="temp-info">
                 <div className="image-icon">
                    <img src="/public/icons8-rope-bridge-50.png"alt="weather-logo"/>
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