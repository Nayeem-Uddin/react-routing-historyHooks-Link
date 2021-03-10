import React from 'react';

const Details = (props) => {
    // console.log(props);
    const {area, borders, flag} = props.details;
    return (
        <div>
            <h4>Area : {area} </h4>
            <h6>Borders : {borders } </h6>
            <img src={flag} alt="This is the flag"/>
        </div>
    );
};

export default Details;