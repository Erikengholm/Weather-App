import GeoLocationFromName from './GetLocationFromName';

const WeatherData = async (cityName) =>{
    return new Promise(function(resolve, reject) {
        GeoLocationFromName(cityName).then((response) =>{

            let apiUrl = "https://api.openweathermap.org/data/2.5/onecall?"+response+"&exclude=hourly,minutely,alerts&appid=92526e142060bc0fdeddb4e5094317b5&units=metric"
    
            fetch(
                apiUrl)
                            .then((res) => res.json())
                            .then((json) => {
                                resolve(json)
                            }
                            )
                        }
                        )
    })
}
export default WeatherData;
