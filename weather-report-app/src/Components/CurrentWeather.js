import React from "react"
import GetWeatherData from "../Service/GetWeatherData"
import TimeBox from "./TimeBox"
import '../Styles/WeatherStyles.css';

const currentWeatherDiv = (props) =>{

    var today = new Date();

    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    return (
        <div className="CurrentWeatherDiv">

        <h1>
        {props.CityName}
        </h1>
        <div>

        <p>{props.desc}</p>
        </div>
        <p>
            {props.temp}°C
        </p>
        <p>{date}</p>
        <TimeBox/>

        </div>)

}

export default currentWeatherDiv;