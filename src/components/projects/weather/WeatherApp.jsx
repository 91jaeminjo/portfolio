import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom';
import './weather.scss'

const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?'
const apiKey = 'appid=939ac13658fad1c02b7fcad388a113d2'
const imperialUnit = 'units=imperial'
const defaultLocation = 'Austin,Texas'
export default class WeatherApp extends Component {
    constructor(props) {
    super(props);
    this.state = {
        city: "Austin",
        state: "Texas",
        zipcode: "",
        location: "",
        weatherInfo: "",
        mainWeather: "",
        weatherDesc: "",
        temperature: "",
        tempFeelsLike: "",
        tempMax: "",
        tempMin: "",
        windSpeed: "",
        windDirection: "",
        windUnit: "",
        humidity: "",
    };
    this.updateZipcodeWeather = this.updateZipcodeWeather.bind(
        this
    );
    this.updateCityStateWeather = this.updateCityStateWeather.bind(
        this
    );
    this.handleZipcode = this.handleZipcode.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.updateZipcodeWeather = this.updateZipcodeWeather.bind(this);
    this.updateCityStateWeather = this.updateCityStateWeather.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.navSlide();
        fetch(
          weatherUrl +
            'q=' +
            defaultLocation +
            '&' +
            imperialUnit +
            '&' +
            apiKey
        )
          .then((res) => res.json())
          .then((data) => {
           
            this.setState({
              location: this.state.city + ", " + this.state.state,
              zipcode:"",
              city:"",
              state:"",
              weatherInfo: data,
              mainWeather: data.weather[0].main,
              weatherDesc: data.weather[0].description,
              temperature: data.main.temp,
              tempFeelsLike: data.main.feels_like,
              tempMax: data.main.temp_max,
              tempMin: data.main.temp_min,
              windSpeed: data.wind.speed,
              windDirection: data.wind.deg,
              windUnit: data.wind.unit,
              humidity: data.main.humidity,
            });
          })
          .catch(console.log);
    }
    
    navSlide (){
        const menu = document.querySelector('.menu');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        menu.addEventListener('click',()=>{
            //toggle nav
            nav.classList.toggle('nav-active');
            //animate links
            navLinks.forEach((link, index)=>{
                if(link.style.animation){
                    link.style.animation=``;
                }
                else{
                    link.style.animation = `navLinkFade 0.5s ease forwards ${
                      index / 7 + 0.5}s`;
                }
            })
            //menu animation
            menu.classList.toggle('rotate')
        })
    }
    handleZipcode(event) {
        
        this.setState({
            zipcode: event.target.value,
        });
    }
    handleCity(event) {
    this.setState({
        city: event.target.value,
    });
    }
    handleState(event) {
    this.setState({
        state: event.target.value,
    });
    }
    updateZipcodeWeather(event) {
        event.preventDefault();
    
        fetch(
            weatherUrl +
            "zip=" +
            this.state.zipcode +
            ",us&" +
            imperialUnit +
            "&" +
            apiKey
        )
        .then((res) => res.json())
        .then((data) => {
        
        this.setState({
            location:"Zip Code: "+this.state.zipcode,
            city:"",
            state:"",
            zipcode:"",
            weatherInfo: data,
            mainWeather: data.weather[0].main,
            weatherDesc: data.weather[0].description,
            temperature: data.main.temp,
            tempFeelsLike: data.main.feels_like,
            tempMax: data.main.temp_max,
            tempMin: data.main.temp_min,
            windSpeed: data.wind.speed,
            windDirection: data.wind.deg,
            windUnit: data.wind.unit,
            humidity: data.main.humidity,
        });
        })
        .catch(console.log);
        window.scrollTo(0,0);
    }

    updateCityStateWeather(event) {
    event.preventDefault();
    
    
    fetch(
        weatherUrl +
        "q=" +
        this.state.city +
        "," + this.state.state + 
        "&" +
        imperialUnit +
        "&" +
        apiKey
    )
        .then((res) => res.json())
        .then((data) => {
        
        this.setState({
            location: this.state.city + ", " + this.state.state,
            zipcode:"",
            city:"",
            state:"",
            weatherInfo: data,
            mainWeather: data.weather[0].main,
            weatherDesc: data.weather[0].description,
            temperature: data.main.temp,
            tempFeelsLike: data.main.feels_like,
            tempMax: data.main.temp_max,
            tempMin: data.main.temp_min,
            windSpeed: data.wind.speed,
            windDirection: data.wind.deg,
            windUnit: data.wind.unit,
            humidity: data.main.humidity,
        });
        })
        .catch(console.log);
        window.scrollTo(0, 0);
        
    }

    render() {
    return (
      <div className="weatherApp">
        <nav>
          <div className="logo text-uppercase">
            <h3>Weather</h3>
          </div>
          <ul className="nav-links">
            <li>
              <Link to={process.env.PUBLIC_URL}>Portfolio</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL}>About</Link>
            </li>
          </ul>
          <div className="menu">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
        <div className="container-fluid weather-app">
          <br />
          <h1 className="text-center">Weather App</h1>
          <br />
          <br />
          <div className="weather-report col-10 mx-auto">
            <p>
              Today's Weather in {this.state.location}: {this.state.temperature}
              F (possibly ranging from {this.state.tempMin}F to{" "}
              {this.state.tempMax}F)
            </p>
            <p>It feels like: {this.state.tempFeelsLike}</p>
            <p>
              Winds blowing at {this.state.windSpeed}mph{" "}
              {this.state.windDirection}
            </p>
            <p>Humidity is {this.state.humidity}%</p>
          </div>

          <br />
          <br />

          <div className="col-lg-8 mx-auto">
            <h5>
              Enter Location: Zipcode or City and State in the United States
            </h5>

            <form
              id="zipcodeWeather"
              onSubmit={this.updateZipcodeWeather.bind(this)}
            >
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Zipcode</label>
                  <input
                    className="form-control"
                    id="zipcode"
                    type="text"
                    required="required"
                    data-validation-required-message="Please enter the zip code."
                    placeholder="Zip Code"
                    value={this.state.zipcode}
                    onChange={this.handleZipcode}
                  />
                  <p className="form-text text-danger help-block"></p>
                </div>
              </div>
              <br />
              <div className="form-group">
                <button
                  className="btn btn-primary btn-xl"
                  id="zipWeatherBtn"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-10 mx-auto">
            <br />
            <hr />
          </div>
          <div className="col-lg-8 mx-auto">
            <form
              id="cityStateWeather"
              onSubmit={this.updateCityStateWeather.bind(this)}
            >
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>City</label>
                  <input
                    className="form-control"
                    id="city"
                    type="text"
                    required="required"
                    data-validation-required-message="Please enter the city."
                    placeholder="City"
                    value={this.state.city}
                    onChange={this.handleCity}
                  />
                  <p className="form-text text-danger help-block"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>State</label>
                  <input
                    className="form-control"
                    id="state"
                    type="text"
                    required="required"
                    data-validation-required-message="Please enter the city."
                    placeholder="State"
                    value={this.state.state}
                    onChange={this.handleState}
                  />
                  <p className="form-text text-danger help-block"></p>
                </div>
              </div>
              <br />
              <div className="form-group">
                <button
                  className="btn btn-primary btn-xl"
                  id="cityStateWeatherBtn"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
            <br />
          </div>
        </div>
      </div>
    );
    }
}