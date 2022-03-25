import Currentweather from "./Components/CurrentWeather";
import React,{useRef} from  "react"

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
    <>
      
        <input type="text" ref={this.myRef} /> 
        <button onClick={() => this.setState({ CityName: this.myRef.current.value })}>
          Click me
        </button>        
        <Currentweather CityName={this.state.CityName} />
      
    </>
  );
  }
}

export default App;
