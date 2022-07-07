import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
 const [city, setCity] = useState("");
 const history = useHistory();
 
  const handleChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  }


  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      history.push("/ciudades")
      e.target[0].value = "";
    }}>
      <input 
        className="input"
        type="text"
        placeholder="Ciudad..."
        onChange={handleChange}
      />
      
       <input  className="boton" type="submit" value="Agregar"/>
      
    </form>
    
  );
}
