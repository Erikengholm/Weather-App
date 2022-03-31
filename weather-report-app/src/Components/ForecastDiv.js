import React from "react"
import '../Styles/WeatherStyles.css';

const ForecastDiv = (props) =>{


    return (<div key={props.IDKey} className="ForecastDivCss" >
    <p>{props.dates}</p>
    <img src={props.Image} alt={props.desc} />
    <p>Min temp:{props.minTemp}°C</p>
    <p>Max temp:{props.maxTemp}°C</p>
</div>)

}

export default ForecastDiv