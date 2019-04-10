import React from 'react';
import {getLocalWeatherData } from '../reduxActions/asyncActions';

const RefreshWeatherBtn = function ({lat, lon}) {
    // console.log('weather btn props',  lat, lon)
    return (
        <button
            className="refresh-weather-btn"
            onClick={() => getLocalWeatherData(lat, lon) }
        >
            Check For Update
        </button>

    )

}

export default RefreshWeatherBtn;