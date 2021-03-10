import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [country, setCountry] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountry(data.slice(0,20)))
    },[])
    return (
        <div>
            <h2>Country Numbers: {country.length}</h2>
            {
                country.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Home;