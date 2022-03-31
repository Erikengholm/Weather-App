import React from 'react';
import GetWeatherData from "../Service/GetWeatherData"
import '../Styles/WeatherStyles.css';
import CurrentWeatherDiv from "./CurrentWeather";
import ForeCastList from "./ForecastList";

class WeatherBody extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            CityName:props.CityName,
            items: [],
            DataisLoaded: false
        };
    }
   
    async componentDidMount() {
        GetWeatherData(this.state.CityName).then(json =>{
            this.setState({ items: json,DataisLoaded:true })
        })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
                <>
    <div className="CurrentWeatherContainerDiv">
        <CurrentWeatherDiv CityName={this.state.CityName} desc={items.current.weather[0].description} temp={items.current.temp} image={items.current.weather[0].icon}/>
    </div>

    <div>
        <ForeCastList Forecast={items.daily} />
    </div>
    </>)

}
}

export default WeatherBody;