import React, {useState} from 'react';



function Api(props){
   
   
    console.log(props)


return(
    <div>
        <button onClick={props.fetchWeather}>submit</button>
        <h1>
            {props.weather && props.weather.current && props.weather.current.weather && props.weather.current.weather[0].main}
        </h1>
    </div>
);

}
//fetchWeather()


export default Api;