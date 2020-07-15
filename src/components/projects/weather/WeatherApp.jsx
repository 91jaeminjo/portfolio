import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom';
import './weather.scss'

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?'
const iconUrl = 'http://openweathermap.org/img/wn/'
const apiKey = 'appid=939ac13658fad1c02b7fcad388a113d2'
const imperialUnit = 'units=imperial'

export default class WeatherApp extends Component {
    
  defaultLocation = ''

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
      icon: ""
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
    this.showCurrentPosition = this.showCurrentPosition.bind(this);
    this.showError = this.showError.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.defaultLocationWeather();
        this.navSlide();
        
        
    }
    
    defaultLocationWeather(){
      console.log("inside default location weather ")
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showCurrentPosition,this.showError);
      }
      else {
        this.defaultLocation='Austin,Texas'
        console.log("geolocation is not supported by this browser. default location: Austin, Texas")
        fetch(
          weatherUrl +
          'q=' +
          this.defaultLocation +
          '&' +
          imperialUnit +
          '&' +
          apiKey
        )
          .then((res) => res.json())
          .then((data) => {

            this.setState({
              location: this.state.city + ", " + this.state.state,
              zipcode: "",
              city: "",
              state: "",
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
              icon: iconUrl+data.weather[0].icon+"@2x.png"
            });
          })
          .catch(console.log);
      }
    }
    showCurrentPosition(position){
      console.log(position)
      console.log("default location:")
      console.log(this.defaultLocation)

        this.defaultLocation = "lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;

        fetch(
          weatherUrl +
          this.defaultLocation +
          '&' +
          imperialUnit +
          '&' +
          apiKey
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            this.setState({
              location: data.name + ", " + data.sys.country,
              zipcode: "",
              city: "",
              state: "",
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
              icon: iconUrl + data.weather[0].icon + "@2x.png"
            });
          })
          .catch(console.log);
      
    }
    showError(error){
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log("User denied the request for Geolocation.")
          break;
        case error.POSITION_UNAVAILABLE:
          console.log("Location information is unavailable.")
          break;
        case error.TIMEOUT:
          console.log("The request to get user location timed out.")
          break;
        case error.UNKNOWN_ERROR:
          console.log("An unknown error occurred.")
          break;
      }
      this.defaultLocation = 'Austin,Texas'
      
      fetch(
        weatherUrl +
        'q=' +
        this.defaultLocation +
        '&' +
        imperialUnit +
        '&' +
        apiKey
      )
        .then((res) => res.json())
        .then((data) => {

          this.setState({
            location: this.state.city + ", " + this.state.state,
            zipcode: "",
            city: "",
            state: "",
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
            icon: iconUrl + data.weather[0].icon + "@2x.png"
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
          icon: iconUrl + data.weather[0].icon + "@2x.png"
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
          icon: iconUrl + data.weather[0].icon + "@2x.png"
        });
        })
        .catch(console.log);
        window.scrollTo(0, 0);
        
    }

    render() {
    return (
      <div className="weatherApp">
        <nav>
          <div className="logo text-uppercase mr-auto pl-5">
            <h3>Weather</h3>
          </div>
          <ul className="nav-links ml-auto pr-3">
            <li>
              <Link to={process.env.PUBLIC_URL}>Portfolio</Link>
            </li>
            <li>
              <a href="#about-weather">About</a>
            </li>
        
          </ul>
          <div className="menu">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
        <div className="weather-app">
          <div className="weather-header">
            <h1 className="text-center">Weather App</h1>
          </div>

          <br />
          <br />
          <div className="weather-report col-lg-6 mx-auto">
            <h3>
              Current Weather in {this.state.location}: {this.state.weatherDesc}. <img src={this.state.icon}></img>
            </h3>
            
            <h3>
              Current Temperature: {this.state.temperature}
              F <br />(may range from {this.state.tempMin}F to{" "}
              {this.state.tempMax}F)
            </h3>
            <br />
            <h3>It feels like: {this.state.tempFeelsLike}F</h3>
            <br />
            <h3>
              Winds blowing at {this.state.windSpeed}mph{" "}
              {this.state.windDirection}
            </h3>
            <br />
            <h3>Humidity is {this.state.humidity}%</h3>
          </div>
          <br />
          <div className="col-lg-10 mx-auto">
            <br />
            <hr />
            <br />
            <br />
          </div>
          <div className="col-lg-8 mx-auto">
            <h4>
              Enter Location: Zipcode in the United States
            </h4>

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
                  type="submit">
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
            <h4>
              Enter Location: City and State in the United States
            </h4>
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
                  type="submit">
                  Send
                </button>
              </div>
            </form>
            <br />
          </div>
          <div id="about-weather" className="weather-header">
            <h1 className="text-center">About Weather App</h1>
          </div>
          <div className="weather-body col-lg-10 mx-auto">
            <br />
            <br />
            <br />
            <h5>
              This weather application asks permission for user's location, fetches the weather information of user location.
              <br/>
              If user denies to share their location, weather information of Austin, Texas is fetched by default.
              <br />
              <br />
              Users can also fetch weather data by inputting the zipcode, or the city and state information.
              <br />
              <br />
              Weather API used: <a href="https://openweathermap.org/api">OpenweatherMap</a>
              <br />
              <br />
              <br />
              <br />
            </h5>
          </div>
        </div>
      </div>
    );
    }
}