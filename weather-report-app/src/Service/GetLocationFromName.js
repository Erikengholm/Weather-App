function CleanTheString(stringValue){
    var separateWord = stringValue.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
       separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
       separateWord[i].substring(1);
    }
    String(separateWord).trim();
    return separateWord.join(' ');
}

const GeoLocationFromName = async (cityName) =>{

    var NewCityName = CleanTheString(cityName);
    let values;

    var queryCityName = String(NewCityName).replaceAll(" ","%20")
    return new Promise(function(resolve, reject) {

    if(cityName !==""){
         fetch("https://api.openweathermap.org/geo/1.0/direct?q="+queryCityName+"&limit=1&appid=92526e142060bc0fdeddb4e5094317b5")
                    .then((res) => res.json())
                    .then((json) => {
                        values = "lat="+json[0].lat+"&lon="+json[0].lon;
                        resolve(values)
                    })
    }
    else{
        if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition((result)=>{
                var crd = result.coords;
                values = "lat="+crd.latitude+"&lon="+crd.longitude;
                resolve(values)
            });
          } 
    }
})}
export default GeoLocationFromName;



