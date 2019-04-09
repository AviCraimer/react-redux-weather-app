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

//React-redux connect
const mapStateToProps = (storeState) =>  {

    return {

    }
}

// export default connect(
//     mapStateToProps
//   )(Geolocator);

export default Geolocator;