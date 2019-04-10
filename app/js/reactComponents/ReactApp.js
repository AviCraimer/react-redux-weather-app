import React from 'react';
// import axios from 'axios';

//react-redux
import {connect} from 'react-redux';
import { getLocalWeatherData } from '../reduxActions/asyncActions';
import {windowResize} from '../reduxActions/syncActions';

//React Components
import Geolocator from './Geolocator';
import WeatherDisplay from './WeatherDisplay';
import RefreshWeatherBtn from './RefreshWeatherBtn';

class ReactApp extends React.Component {

    constructor() {
        super()

        this.state = {};



    }

    componentDidUpdate (prevProps) {
        const {geopoint} = this.props;

        if (prevProps.geopoint !== geopoint && geopoint.lon !== null) {
            getLocalWeatherData(geopoint.lat, geopoint.lon );
        }
    }

    componentDidMount() {

        //Redux async actions





    }//End of componentDidMount

    render() {
        const {lastupdate, geopoint, place} =  this.props;

        return (
        <React.Fragment>
            <Geolocator />
            <main className="main">
                {place ?
                    (<div className='main__header'>
                        <h1>Current Weather</h1>
                        <h2>{place}</h2>
                    </div>)
                    : (
                        <div className='main__header'>
                            <h1>Getting your weather report!</h1>
                        </div>
                    )
                }

                {lastupdate && (
                    <React.Fragment>
                        <WeatherDisplay />
                        <RefreshWeatherBtn {...geopoint}  />
                    </React.Fragment>
                )}

            </main>
        </React.Fragment>
      )
    }
  }

//React-redux connect
const mapStateToProps = (storeState) =>  {
    const {geopoint, city} =  storeState.location;
    const {lastupdate} =  storeState.weatherInfo;
    return {
        geopoint,
        place: city.name,
        lastupdate: lastupdate.value
    }
}

export default connect(
    mapStateToProps
  )(ReactApp);




