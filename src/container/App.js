import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, matchPath } from 'react-router-dom';
import './App.css';

import Ciudad from '../components/Ciudad/Ciudad.jsx'
import About from '../components/About/About.jsx'
import Nav from '../components/Nav/Nav.jsx';
import Cards from '../components/Cards/Cards.jsx';

export default function App() {
  const[cities, setCities] = useState([]);
  const match = matchPath()
  
  
  function onSearch(ciudad){
    const apiKey = '4ae2636d8dfbdc3044bede63951a019b'
  
  

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then(r => r.json())
    .then((recurso) =>{
      if(recurso.main !== undefined){
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
        setCities(oldCities => [...oldCities, ciudad]);
      } 
    });
  }

  function onFilter(ciudadId){
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) return ciudad[0];
    else return null;
  }

  function onClose(id){
    setCities((oldCities) => oldCities.filter(c => c.id !== id));
  }
    
    return (
    <div className="App">
      <BrowserRouter>
      
          <Nav onSearch={onSearch}/>
   
          <Routes>
            
            <Route exact path='/ciudades' element={<Cards cities={cities} onClose={onClose}/>}/>
            
            <Route exact path='/ciudad/:ciudadId' element={<Ciudad city={onFilter(match.params.ciudadId)}/>}/>
      
            <Route exact path='/about' element={<About/>}/>
          
          </Routes>
          
      </BrowserRouter>
      
    </div>
   );
}


