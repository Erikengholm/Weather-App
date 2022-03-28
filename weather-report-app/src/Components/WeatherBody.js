import React from "react"
import GetWeatherData from "../Service/GetWeatherData"
import '../Styles/WeatherStyles.css';
import CurrentWeatherDiv from "./CurrentWeather";
import ForeCastList from "./CurrentWeather";

const WeatherBody = (props) =>{

    var JSONDATA = GetWeatherData(props.CityName)
    var today = new Date();

    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//        <img src={props.JSONDATACurrent.weather_icons[0]} alt={props.JSONDATACurrent.weather[2]} />

    return (
    <>
    <p>{JSONDATA.lat}</p>
    <div className="CurrentWeatherContainerDiv">
        <CurrentWeatherDiv CityName={props.CityName} desc={JSONDATA.current.weather[0].description} temp={JSONDATA.current.temp}/>
    </div>
    </>)

}

export default WeatherBody;