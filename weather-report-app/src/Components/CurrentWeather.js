import React from "react"
import GetWeatherData from "../Service/GetWeatherData"
import TimeBox from "./TimeBox"
import '../Styles/WeatherStyles.css';

const currentWeatherDiv = (props) =>{

    var today = new Date();

    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let imageUrl = "http://openweathermap.org/img/wn/"+props.image+"@2x.png"
    return (
        <div className="CurrentWeatherDiv">

        <h1>
        {props.CityName}
        </h1>
        <div>
        <img src={imageUrl} alt={props.desc} />
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