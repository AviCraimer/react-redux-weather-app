import React from 'react';

//Redux action creators
import {getGeolocation} from './../reduxActions/asyncActions'


class Geolocator extends React.Component {

    constructor() {
        super()

        this.state = {};

    }

    componentDidUpdate (prevProps) {


    }

    componentDidMount() {
        getGeolocation()





    }//End of componentDidMount

    render() {
        return (
        <React.Fragment>
        </React.Fragment>
      )
    }
  }

export default Geolocator;