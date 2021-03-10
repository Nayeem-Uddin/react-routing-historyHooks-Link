import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    // console.log(props.country);
    const {name, capital, region, demonym} = props.country;
    const history = useHistory();
    const handleByClick = (name) =>{
        const url = `/details/${name}`
        history.push(url)
    }
    const countryStyle = {
        border:'2px solid lightgrey',
        margin:'20px',
        padding:'20px',
        borderRadius:'20px',
        textAlign:'center'
    }
    return (
        <div style={countryStyle}>
            <h2>Name : {name}<Link to={`/details/${name}`}> Show Details</Link></h2>
            <h2>demonym : {demonym}</h2>
            <h2>capital : {capital}</h2>
            <h2>region : {region}</h2>
            <button onClick={()=> handleByClick(name)}>Click Me</button>
        </div>
    );
};

export default Country;