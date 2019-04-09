import {combineReducers} from 'redux';

import location from './location';
//import other sectional reducers



const rootReducer = combineReducers({
    location

});

export default rootReducer;


//Boiler plate reducer
// const reducer = function (state, action) {
//     const initialState = {};

//     if (state === undefined) {return initialState;}
//     return state;
// }