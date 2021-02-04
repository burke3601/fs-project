import React, {useState} from 'react';
//import {REACT_APP_API_KEY} from './config'



function Api(props){
    console.log("Im in the API function");
   



return(
    <div>
        <button onClick={props.fetchWeather}>submit</button>
    </div>
);

}
//fetchWeather()


export default Api;