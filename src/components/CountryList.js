
import React from 'react'
import Cards from './Cards';
import {min,max} from './Colorselect';


 function CountryList({cards}) {

    return (
        
        <div className="card-grid">
            {cards.filter(count => count.deaths > min && count.deaths < max)
             .filter(cards => cards.countery.includes(''))           
            .map(cards => {                            
             return (<Cards cards={cards} key={cards.id}/>)                
           })}
            
        </div>
    )
}

export default CountryList
