import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom';

const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?'
const apiKey = 'appid=939ac13658fad1c02b7fcad388a113d2'
const imperialUnit = 'units=imperial'
const defaultLocation = 'Austin,Texas'
export default class WeatherApp extends Component {
    constructor(props){
        super(props)
        this.state={

            weatherInfo:[],
            weatherInfo:'',
            mainWeather: '',
            weatherDesc: '',
            temperature: '',
            tempFeelsLike: '',
            tempMax: '',
            tempMin: '',
            windSpeed: '',
            windDirection: '',
            windUnit: '',
            humidity: ''
        }
    }
    
    componentDidMount() {
        fetch(weatherUrl+'q='+defaultLocation+'&'+imperialUnit+'&'+apiKey)
        .then(res=>res.json())
        .then((data)=>{
            console.log("weather obj: ", data);
            this.setState({                
                weatherInfo:data,
                mainWeather: data.weather[0].main,
                weatherDesc: data.weather[0].description,
                temperature: data.main.temp,
                tempFeelsLike: data.main.feels_like,
                tempMax: data.main.temp_max,
                tempMin: data.main.temp_min,
                windSpeed: data.wind.speed,
                windDirection: data.wind.deg,
                windUnit: data.wind.unit,
                humidity: data.main.humidity
            })
        })
        .catch(console.log)
    }

    render(){
        return(
            <div className="container-fluid">
              <h1 className="text-center">Weather App</h1>
              <br />
              
              <p>Today's Weather in Austin, Texas: {this.state.temperature}F (possibly ranging from {this.state.tempMin}F to {this.state.tempMax}F</p>
              <p>It feels like: {this.state.tempFeelsLike}</p>
              <p>Winds blowing at {this.state.windSpeed}mph {this.state.windDirection}</p>
              <p>Humidity is {this.state.humidity}%</p>
              <br />
              <br />
                <div className="project-items">
                    <Link to={process.env.PUBLIC_URL}>Home</Link>
                </div>
            </div>
            
        )
    }
}