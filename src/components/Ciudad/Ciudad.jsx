import React from "react";
import { Link, useParams } from "react-router-dom"
import "./Ciudad.css"

export default function Ciudad({onFilter}){
    const params = useParams();
    const city = onFilter(params.ciudadId);
    
    return(
        <div className="ciudad">
            <div className='container'>
                <Link to="/WheatherApp">
                    <h2 className="ciudadNombre">{city.name}</h2>
                </Link>
                <div className="info">
                    <div><b>Temperatura:</b> {city.temp} °c</div>
                    <div><b>Clima:</b> {city.weather}</div>
                    <div><b>Viento:</b> {city.wind} km/h</div>
                    <div><b>Cantidad de nubes:</b> {city.clouds}</div>
                    <div><b>Latitud:</b> {city.latitud}</div>
                    <div><b>Longitud:</b> {city.longitud}°</div>
                </div>
            </div>
        </div>
    )
}