import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
 const [city, setCity] = useState("");
 const navigate = useNavigate();
 
  const handleChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  }


  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      navigate("/ciudades");
      e.target[0].value = "";
      setCity();
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
