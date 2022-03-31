import React from "react"
import getCookie from "../Service/GetCookieService"
import "../Styles/Misc.css";

const FavoritesPlaces = ({ setRef }) =>{
    let cookies = getCookie("LocationName");
    let displayForm = "block" 
    if(cookies === ""){
        displayForm = "none"
    }
    let arrayCookies = cookies.split(",");

    const list = arrayCookies.map(listItem => {

        return(<li className="FavoritesList" onClick={() =>{setRef(listItem)}}>{listItem}</li>)

    });

    return (<ul style={{display: displayForm}} className="FavoritesDiv">{list}</ul>)
}
export default FavoritesPlaces