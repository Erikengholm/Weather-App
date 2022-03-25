import React from "react"
import cloudy from "../Images/cloudy.png"
import GetWeatherData from "../Service/GetWeatherData"

const currentWeatherDiv = (props) =>{

    var img;
    var alt;
    GetWeatherData(props.CityName)
   /* switch(props.WeatherImage){

        case "sunny":
            img = cloudy;
            alt = "Overcast"
        break;

        default:
            alt = "???"


    }*/

    return (<div>
        <h1>
            {props.CityName}
        </h1>
    </div>)

}

export default currentWeatherDiv;