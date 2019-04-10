import {asyncTypes, syncTypes} from '../reduxActions/actionTypes';


const location = function (state, action) {
    const initialState = {
        geopoint: {
            lon: null,
            lat: null
        },
        city: {
            name: ''
        }

    }

    if (state === undefined) {return initialState;}

    switch (action.type) {
        case asyncTypes.getGeolocation: {
            const {geopoint} = action;
            return {...state, geopoint}
        }
        case asyncTypes.getLocalWeatherData: {
            return {...state, ...action.location}
        }
    }

    return state;
}//End of reducer

export default location;