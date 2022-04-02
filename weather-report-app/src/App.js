import WeatherBody from "./Components/WeatherBody";
import AddCookie from "./Service/CreateCookiesService"
import FavoritesPlaces from "./Components/FavoritesPlaces"
import React,{useState,useRef} from  "react"
import './App.css';


const App = () => {

  
    const cityNameRef = useRef();

    const[CityName,SetCityName] = useState("");

    const[updateValue,UpdateValue] = useState(true);

    const ListToNameRef = (input) => {
      SetCityName(input)
      this.cityNameRef.current.value = input
    }
  return (
    <div className="App">
        <FavoritesPlaces key={updateValue} setRef={ListToNameRef}/>
        <button onClick={ () =>{
            AddCookie(cityNameRef.current.value)
            UpdateValue(!updateValue)
        }
          }>&#11088;</button>
        <input type="text" ref={cityNameRef} /> 
        <button onClick={() => SetCityName(cityNameRef.current.value)}>
          Sök för ny stad
        </button>        
        <WeatherBody key={CityName} CityName={CityName} />
    </div>
  );
}

export default App;
