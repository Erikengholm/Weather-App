import WeatherBody from "./Components/WeatherBody";
import AddCookie from "./Service/CreateCookiesService"
import FavoritesPlaces from "./Components/FavoritesPlaces"
import React from  "react"
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      CityName: ""
      
    };
    this.cityNameRef = React.createRef();
    this.ListToNameRef = this.ListToNameRef.bind(this);


  }
  ListToNameRef(input) {
    this.setState({ CityName: input})
    this.cityNameRef.current.value = input
}
  render() {
  return (
    <div className="App">
        <FavoritesPlaces key={this.ListToNameRef} setRef={this.ListToNameRef}/>
        <button onClick={ () =>AddCookie(this.cityNameRef.current.value)}>&#11088;</button>
        <input type="text" ref={this.cityNameRef} /> 
        <button onClick={() => this.setState({ CityName: this.cityNameRef.current.value })}>
          Sök för ny stad
        </button>        
        <WeatherBody key={this.state.CityName} CityName={this.state.CityName} />
    </div>
  );
  }
}

export default App;
