import { Link } from 'react-router-dom';
import React from 'react';
import Logo from '../img/Logo.png'
import SearchBar from '../SearchBar/SearchBar.jsx';

import './Nav.css';

export default function Nav({onSearch}) {
  return (
    <nav className='searchBar'>
      <Link to='/WeatherApp'>
        <img src={Logo} id='logoHenry' alt='Img'></img>
      </Link>
      <Link to='/About'>
        <span className='About'>About</span>
      </Link>
      <SearchBar onSearch={onSearch} />
      <hr/>
    </nav>
  );
};


