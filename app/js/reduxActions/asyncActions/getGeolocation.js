import {asyncTypes} from '../actionTypes';

const getGeolocation = () => {
    const getPositionPromise = function (options) {
        return new Promise(function (resolve, reject) {
          navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    }

    const options = {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0
    };

    return getPositionPromise(options)
        .then((position )=> {
            const {latitude, longitude  } = position.coords;
            const action = {
                type: asyncTypes.getGeolocation,
                geopoint: {
                    lat: latitude,
                    long: longitude
                }
            }
            return action;
        })
        .catch((error)=> {
            console.log('Error inside getGeolocation action creator')
            console.error(error);
            return {
                type: asyncTypes.getGeolocation + '__ERROR'
            }
        });


}

export default getGeolocation;



