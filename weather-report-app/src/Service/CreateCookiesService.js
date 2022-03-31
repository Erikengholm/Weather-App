
import getCookie from "./GetCookieService";

const AddCookie = (cityName) =>{

    let cookiesValues = getCookie("LocationName");
    let cookieArray
    if(cookiesValues === ""){
      cookieArray = []
    }
    else{
       cookieArray = cookiesValues.split(",")
    }
    
    cookieArray.push(cityName)

    var unique = cookieArray.filter(onlyUnique);

    if(cityName !== ""){
        document.cookie = "LocationName="+unique.join();

    }

}
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

export default AddCookie