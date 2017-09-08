import React, {Component} from 'react'
let WeatherMessage = ({location, temp}) => {

    return (
        <div>
            <h2>WeatherMessage Component</h2>
            <p>It is {temp} in {location}</p>
            
        </div>
    );

}
module.exports = WeatherMessage