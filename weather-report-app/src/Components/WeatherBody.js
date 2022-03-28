import React, { useState } from 'react';
import GetWeatherData from "../Service/GetWeatherData"
import '../Styles/WeatherStyles.css';
import CurrentWeatherDiv from "./CurrentWeather";
import ForeCastList from "./CurrentWeather";

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
   
    // ComponentDidMount is used to
    // execute the code 
    /*
    .then((res) => res.json())
            .then((json) => {
                alert(json.timezone)

                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            }) */
    async componentDidMount() {
       const response = await GetWeatherData(this.state.CityName)
        this.setState({ items: response,DataisLoaded:true });
            
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

    </div>
    </>)

}
}

export default WeatherBody;