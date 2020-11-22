import React, { useState, useEffect } from 'react';
import '../app.css'
import axios from 'axios'
import Selection from './Selection'


function Main() {

    const [cards, setCards] = useState([])
    useEffect(() => {
        axios
            .get('https://corona.lmao.ninja/v2/countries/')
            .then(res => {
                setCards(res.data.filter(countery => countery.country.includes('')).map((countery, index) => {
                    //console.log(text)
                    return {
                        id: `${index}`,
                        countery: countery.country,
                        flag: countery.countryInfo.flag,
                        population: countery.population,
                        active: countery.active,
                        deaths: countery.deaths,
                    }
                }))
            })
    }, [])

    return (
        <>
        <div className = "wraps">
        <Selection cards = { cards }/>
        </div>

         </>
          
    );
}

export default Main;