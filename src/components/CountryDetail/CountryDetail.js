import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Details from '../Details/Details';

const CountryDetail = () => {
    const {name} = useParams()
    const [detailsCountry, setDetailsCountry] = useState([])
    // const {area, borders, flag} = detailsCountry;
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${name}`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetailsCountry(data))
    },[])
    const countryStyle = {
        border:'2px solid lightgrey',
        margin:'20px',
        padding:'20px',
        borderRadius:'20px',
        textAlign:'center'
    }
    return (
        <div style={countryStyle}>
            <h2>This is {name} country</h2>
            {/* <h4>Details Country Length : {detailsCountry.length}</h4> */}
            {
                detailsCountry.map(details => <Details details={details}></Details>)
            }
        </div>
    );
};

export default CountryDetail;