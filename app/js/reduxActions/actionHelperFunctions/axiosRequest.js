import axios from 'axios';

export const axiosRequest = function (apiUrl, paramsObj) {

    return axios({
        method: 'GET',
        url: apiUrl,
        dataResponse: 'xml',
        params: paramsObj
    });
}