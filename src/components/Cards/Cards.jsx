import React from 'react';
import './Cards.css';

import Card from '../Card/Card.jsx';

export default function Cards({cities, onClose}) {
  if(cities.length > 0){
    return (
      <div className='cards'>
        {cities.map(c => <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
            key={c.id}
          /> )}
      </div>
    );
  } else {
    return(
      <div>
        <h2 className='error'>Sin ciudades</h2>
        <h6>Ingrese una ciudad en el buscador</h6>
      </div>
    )
  }
}
