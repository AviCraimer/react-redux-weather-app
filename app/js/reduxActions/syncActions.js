import {syncTypes} from './actionTypes';
import {dispatch} from '../reduxStore';
// import { bindActionCreators } from 'redux';

// console.log('dispatch in syncActions', dispatch);

const syncActionCreators = {};

syncActionCreators.windowResize = function (windowWidth) {
    const action = {
        type: syncTypes.windowResize,
        windowWidth
    }

    return action;
}



//END OF ACTION CREATORS


//BIND THE ACTION CREATORS TO DISPATCH
const bindActionCreator = function (actionCreator, dispatch) {
    return function (...args) {
        dispatch( actionCreator(...args) );
    }
}

const bindActionCreators = function (actionCreators, dispatch) {
    const boundActionCreators = {};
    //Loop through binding each action creator to dispatch
    for (const key in actionCreators) {
        const func = actionCreators[key];

        //remove underscores from start of key and add bound action creators
        boundActionCreators[key] = bindActionCreator(func, dispatch);
    }
    return boundActionCreators;
}

//Bind Action creators.
const boundSyncActionCreators = bindActionCreators(syncActionCreators, dispatch);

export const {
windowResize,

}  =  boundSyncActionCreators;
// export default boundSyncActionCreators;