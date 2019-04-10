import {asyncTypes} from '../actionTypes';
import axios from 'axios';
const parseString = require('xml2js').parseString;

//This function transforms the xml data to JSON as instructed in the test.
const xmlToJsonPromise = function (xml, options) {
    return new Promise(function (resolve, reject) {
       parseString (xml, options, function (err, data) {
        if (err) {
            reject(err)
        } else {
            resolve(JSON.stringify(data));
        }
       });
    });
}




const getLocalWeatherData = (lat, lon) => {

    return axios({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',

        params: {
            lat,
            lon,
            mode: 'xml',
            APPID: 'fb9dfa509278baf71a17af96fe1b4289'
        }
    }).then((response)=> {
        console.log(response)

        return xmlToJsonPromise(response.data, {trim: true, explicitArray: false, mergeAttrs: true}).then( data => {
            data = JSON.parse(data);
            data = data.current;
            console.log(data);
            const {city, ...weatherInfo} = data;

            return  {
                type: asyncTypes.getLocalWeatherData,
                weatherInfo,
                location: {
                    city
                }
            }
        })
        .catch(err => console.error(err) );


        // const weatherData =  parseString(response.data,
        //     {trim: true, explicitArray: false, mergeAttrs: true },
        //     function (err, data) {
        //         if (err) {
        //             console.error(err);
        //         }
        //         return data.current;
        // });
        // console.log(weatherData)

        // return weatherData.then(data => {


        // });
    } )
}

export default getLocalWeatherData;



