import React from 'react';
// import axios from 'axios';

//react-redux
import {connect} from 'react-redux';
import {loadFaveRidings } from '../reduxActions/asyncActions';
import {windowResize} from '../reduxActions/syncActions';

//React Components
import Geolocator from './Geolocator';

class ReactApp extends React.Component {

    constructor() {
        super()

        this.state = {};



    }

    componentDidUpdate (prevProps) {


    }

    componentDidMount() {

        //Redux async actions





    }//End of componentDidMount

    render() {
        return (
        <React.Fragment>
            <Geolocator />
            <main>
                <h1>Hello World</h1>
            </main>
        </React.Fragment>
      )
    }
  }

//React-redux connect
const mapStateToProps = (storeState) =>  {

    return {

    }
}

export default connect(
    mapStateToProps
  )(ReactApp);




