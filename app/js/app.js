
// React
import React from 'react';
import ReactDOM from 'react-dom';
import ReactApp from './reactComponents/ReactApp';

//Redux
import { Provider } from "react-redux";
import store from './reduxStore';


import fn from './pureFunctions/fn';
//Add fn as global variable so it only needs to be imported once
window.fn = fn;



const rootRender = function () {
    ReactDOM.render(
        <Provider store={store}>
            <ReactApp/>
        </Provider>
        , document.getElementById('reactApp'));
}

//Render the app
rootRender();

export default store;