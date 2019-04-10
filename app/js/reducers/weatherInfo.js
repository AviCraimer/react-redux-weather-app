import {asyncTypes, syncTypes} from '../reduxActions/actionTypes';


const weatherInfo = function (state, action) {
    const initialState = {
            "temperature": {

            },
            "humidity": {},
            "pressure": {},
            "wind": {
              "speed": {},
              "gusts": {},
              "direction": {}
            },
            "clouds": {},
            "visibility": {},
            "precipitation": {},
            "weather": {},
            "lastupdate": {
                "value": ""
            }
    }

    if (state === undefined) {return initialState;}

    switch (action.type) {
        case asyncTypes.getLocalWeatherData: {

            return {...state, ...action.weatherInfo}
        }


    }

    return state;
}//End of reducer

export default weatherInfo;