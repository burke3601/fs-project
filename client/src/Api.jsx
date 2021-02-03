import React from 'react';

const api = {
    APIkey: "",
    url: "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={APIkey}&units=imperial"
}
const [weather, setWeather]

const fetchWeather = async() => {
    const response = await fetch(`${api}`)
    const data = await response.json()
    console.log(data);
    const {weather} = data
    if (weather) {
        const getWeather = weather.map((w) =>{
            const {
                temp,
                feels_like,
                temp_min,
                temp_max,
                humidity,
                main,
                description,
                icon
            } = weather

            return {
                temp: temp,
                feels_like: feels_like,
                temp_min: temp_min,
                temp_max: temp_max,
                humidity: humidity,
                main: main,
                description: description,
                icon: icon,
            }
        })
        setWeather(getWeather)
    }

}