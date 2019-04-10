const aTypes = {}

aTypes.sync =  {
    windowResize: 'WINDOW_RESIZE'
}

//Async actions return a promise that resolves to an action. These will be manually bound to dispatch within the .then within the function.
aTypes.async = {
    getGeolocation: 'GET_GEOLOCATION',
    getLocalWeatherData: 'GET_LOCAL_WEATHER_DATA'
}

const {async, sync} = aTypes;

export {async as asyncTypes, sync as syncTypes};

export default aTypes;