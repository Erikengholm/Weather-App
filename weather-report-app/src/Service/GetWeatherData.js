import GeoLocationFromName from './GetLocationFromName';

const WeatherData = async (cityName) =>{
    let JsonData;

    const response = await GeoLocationFromName(cityName)
    await fetch(
            "https://api.openweathermap.org/data/2.5/onecall?"+response+"&exclude=hourly,minutely,alerts&appid=92526e142060bc0fdeddb4e5094317b5&units=metric")
                        .then((res) => res.json())
                        .then((json) => {
                            JsonData =json

        })
    alert(JsonData.timezone)
    return JsonData

     
}


export default WeatherData;

/**
 */