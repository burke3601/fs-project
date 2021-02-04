import React from 'react';


function Weather() {
  
    return(
        <div className="weather-container">
            <div className="info-container">
                <div className="location-info">
                    <p>
                        London, GB
                    </p>
                <div className="image-icon">
                    <img src="../public/logo192.png" alt="weather-logo"/>
                </div>
                </div>
            </div>
            <div className="temp-info">
                <div className="temp-unit">
                    <p>8 degrees C</p>
                </div>
                <div className="temp-details">
                    <h4>Details</h4>
                    <p>
                        current temp: 27
                        <br>
                        </br>
                        Hummidy: 87%
                    </p>
                     
                </div>
            </div>
        

        </div>
    );
}

export default Weather