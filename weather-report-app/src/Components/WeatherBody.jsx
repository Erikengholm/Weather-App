import React,{useState,useEffect} from 'react';
import GetWeatherData from "../Service/GetWeatherData"
import '../Styles/WeatherStyles.css';
import CurrentWeatherDiv from "./CurrentWeather";
import ForeCastList from "./ForecastList";

const WeatherBody = ({CityName}) => {

    // Constructor 
    const[items,SetItems] = useState([]);
    const[DataisLoaded,SetDataLoaded] = useState(false);

    useEffect(() => {
        let isMounted = true;               // note mutable flag

            GetWeatherData(CityName).then(json =>{
                if (isMounted){
                    SetItems(json)
                    SetDataLoaded(true)
                }
            })
        return () => { isMounted = false };
    });
        
    if (!DataisLoaded){
        return (<div>
            <h1> Datan håller på och laddas </h1> </div>) ;
    }
       
    else{
        return (
        <>
            <div className="CurrentWeatherContainerDiv">
            <CurrentWeatherDiv CityName={CityName} desc={items.current.weather[0].description} temp={items.current.temp} image={items.current.weather[0].icon}/>
        </div>

        <div>
            <ForeCastList Forecast={items.daily} />
        </div>
        </>
        )
    }    
}



export default WeatherBody;