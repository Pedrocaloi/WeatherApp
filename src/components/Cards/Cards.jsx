import React from 'react';
import '../Cards/Cards.css';


import Card from '../Card/Card.jsx';

export default function Cards({cities, onClose}) {
  if(cities){
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
      <div>Sin ciudades</div>
    )
  }
}
