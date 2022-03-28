import FakeJson from './FakeJson.json';

function CleanTheString(stringValue){
    var separateWord = stringValue.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
       separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
       separateWord[i].substring(1);
    }
    String(separateWord).trim();
    return separateWord.join(' ');
}

const WeatherData = (cityName) =>{

    var NewCityName = CleanTheString(cityName);
    
    var queryCityName = String(NewCityName).replaceAll(" ","%20")
   /* fetch(
        "http://api.weatherstack.com/forecast?access_key=1884efe38282eb37704ac76a8810e5db&query=Stockholm&forecast_days=6&hourly=0)
                    .then((res) => res.json())
                    .then((json) => {
                        this.setState({
                            items: json,
                            DataisLoaded: true
                        });
                    })
            }*/
            
    return FakeJson;

}


export default WeatherData;