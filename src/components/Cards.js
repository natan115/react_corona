import React, {useState} from 'react'

 function Cards({cards}) {
    const [flip, setFlip] = useState(false)

const cardStyle = {
    position: "relative",
    bottom: "-10px"
}

    return (
        <div
        className ={`card ${flip ? 'flip' : ''}`}
          onClick={() => setFlip(!flip)}>
              <div className="front">
                  
                 <h4>{cards.countery}</h4> 
                  <div className="flagsdiv" style ={cardStyle} ><img src={cards.flag} alt="Flag" className="flags" /></div>
              </div>
              <div className="back">
              <h4>Countery:  {cards.countery}</h4> 
              <p>Population: {cards.population}</p>
              <p>Active cases: {cards.active}</p>
              <p>Deaths: {cards.deaths}</p>
              
                 
              </div>
          
        </div>
    )
}
export default Cards