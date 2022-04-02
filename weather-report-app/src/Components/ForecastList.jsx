import React from "react"
import '../Styles/WeatherStyles.css';
import ForecastDiv from "./ForecastDiv";

const ForeCastList = (props) =>{


    let counter = 0;
    var currDate = new Date();

    let list = props.Forecast.map(daily =>{
        counter++
        currDate.setDate(currDate.getDate() + 1);
        let stringValue = (currDate.getFullYear())+"-"+(currDate.getMonth()+1)+"-"+(currDate.getDate());
        let imageUrl = "http://openweathermap.org/img/wn/"+daily.weather[0].icon+"@2x.png"
        if(counter<6){
            return (<ForecastDiv Key={counter} Image={imageUrl} desc={daily.weather[0].desc}
                 minTemp={daily.temp.min} maxTemp={daily.temp.max} dates={stringValue}/>)
        }
        

    });

    return (<div className="ForecastContainer">
        {list}
    </div>)

}

export default ForeCastList;