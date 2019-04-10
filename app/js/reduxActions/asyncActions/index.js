import {dispatch} from '../../reduxStore';
import _loadLocalStorage from './loadLocalStorage';
import _getGeolocation from './getGeolocation';
import _getLocalWeatherData from './getLocalWeatherData';
//This is a custom written alternative to Redux-thunk or other middle-ware that I wrote myself to handle aynchronus action creation and dispatching. It uses vanilla JavaScript promises to get the job done.


let asyncActionCreators = {
    _loadLocalStorage,
    _getGeolocation,
    _getLocalWeatherData
};


///Binding the action creators to asynchronously dispatch to redux store.
const dispatchAsyncAction = (actionPromise) => {
    actionPromise.then(actionOrActions =>{
        //Async action creator returns either a single action, or an array of actions.

        if (Array.isArray(actionOrActions)) {//Test to see if it returns an array
            actionOrActions.forEach(action => dispatch(action));
        } else {
            dispatch(actionOrActions);
        }

        } ) //End of .then
        .catch((error) => {
            console.log('ERROR THAT IS NOT CAUGHT IN ASYNC ACTION CREATOR!');
            console.log('ACTION NOT DISPATCHED!' );
            console.log(error);
        } )
        ;
}

const bindAsyncActionCreator = function (actionCreator) {
    return function (...args) {
        dispatchAsyncAction( actionCreator(...args) );
    }
}


//Loop through binding each action creator to dispatch
for (const key in asyncActionCreators) {
    const func = asyncActionCreators[key];

    //remove underscores from start of key and add bound action creators
    asyncActionCreators[key.replace('_','')] = bindAsyncActionCreator(func);
}

//Named Exports of each action creator
export const {
    loadLocalStorage,
    getGeolocation,
    getLocalWeatherData

}  =  asyncActionCreators;
