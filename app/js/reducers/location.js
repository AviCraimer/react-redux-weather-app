import {asyncTypes, syncTypes} from '../reduxActions/actionTypes';


const location = function (state, action) {
    const initialState = {
        geopoint: {
            long: 0,
            lat: 0
        },
        selectedCityId: 0

    }

    if (state === undefined) {return initialState;}

    switch (action.type) {
        case asyncTypes.getGeolocation: {
            const {geopoint} = action;
            return {...state, geopoint}
        }


    }

    return state;
}//End of reducer

export default location;