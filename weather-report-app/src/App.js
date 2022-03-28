import Currentweather from "./Components/CurrentWeather";
import WeatherBody from "./Components/WeatherBody";

import React from  "react"
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      CityName: 'Stockholm'
    };
    this.myRef = React.createRef();

  }
  render() {
  return (
    <div className="App">
      
        <input type="text" ref={this.myRef} /> 
        <button onClick={() => this.setState({ CityName: this.myRef.current.value })}>
          Click me
        </button>        
        <WeatherBody CityName={this.state.CityName} />
      
    </div>
  );
  }
}

export default App;
