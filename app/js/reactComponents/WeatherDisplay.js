import React from 'react';


//react-redux
import {connect} from 'react-redux';

class WeatherDisplay extends React.Component {

    constructor() {
        super()

        this.state = {};



    }

    componentDidUpdate (prevProps) {

    }

    componentDidMount() {


    }//End of componentDidMount

    render() {
        const {city, weather, temp} =  this.props;

        return (
        <div className="weather-display">
            <div className="weather-display__summary">
                <div className="weather-display__summary__image-div">
                    <img src={ "http://openweathermap.org/img/w/" + weather.weather.icon + ".png" }  alt=""/>
                </div>

                <p>
                    {fn.captilizeFirstChar(weather.weather.value)}
                </p>
            </div>

            <p>
                <strong>Tempurature: </strong> {temp}&#176;C
            </p>
            <p>
                <strong>Humidity: </strong> {weather.humidity.value}%
            </p>
            <p>
                <strong>Air Pressure: </strong>{weather.pressure.value} hPa
            </p>


        </div>
      )
    }
  }

//React-redux connect
const mapStateToProps = (storeState) =>  {
    const {city} =  storeState.location;
    const weather =  storeState.weatherInfo;

    const temp = fn.roundToXDecimalPlaces(fn.kelvinToCelcius(weather.temperature.value), 1);


    return {
        city,
        weather,
        temp
    }
}

export default connect(
    mapStateToProps
  )(WeatherDisplay);




