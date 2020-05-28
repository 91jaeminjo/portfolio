import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";
import weatherImage from './weather/weather-icon.jpg'
import taskImage from './task/task-icon.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons'
import './projects.scss'
import '../global.scss'

var quotes=[]
export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quoteData: [],
            allQuotes:[]

        }
        this.getRandomQuote = this.getRandomQuote.bind(this)
    }

    componentDidMount() {
        fetch("https://type.fit/api/quotes")
            .then(function (response) {
                return response.json();
            })
            .then(response => {
                quotes=response
                this.setState({
                    allQuotes:response
                })
                this.getRandomQuote()
                console.log("quote data", this.state.quoteData);
            })
            .catch(err => {
                console.log(err);
            });
    }
    getRandomQuote() {
        let quotes =this.state.allQuotes
        let length = Math.floor(Math.random() * quotes.length)
        while (quotes[length].author === "Buddha") {
            length = Math.floor(Math.random() * quotes.length)
        }

        this.setState({
            quoteData: quotes[length]
        })
    }
    render(){
        return (
          <section className="page-section project" id="projects">
            <div className="container">
              <h2 className="page-section-heading text-center text-uppercase text-dark mb-0">
                Projects
              </h2>
              <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="divider-custom-line"></div>
              </div>
              <h3 className="text-center">
                <FontAwesomeIcon icon={faQuoteLeft} color="#2c3e50" />{" "}
                {this.state.quoteData.text}{" "}
                <FontAwesomeIcon icon={faQuoteRight} color="white" />
              </h3>
              <h4>- {this.state.quoteData.author}</h4>
              <br />
              <button className="btn" onClick={this.getRandomQuote}>
                Random Quote
              </button>
              <br />
              <br />
              <h5>Random Quote API Credit to: https://type.fit/api/quotes</h5>
              <br />
              <br />
              <div className="row no-gutters">
                <div className="col-sm-8 col-md-8 col-lg-6 mx-auto">
                  <Link
                    to="/WeatherApp"
                    className="d-block mx-auto project-item"
                  >
                    <span className="caption text-left">
                      <span className="caption-content">
                        <h3>Weather App</h3>
                        <p className="mb-0">
                          Consuming RESTful API from OpenWeatherMap
                        </p>
                      </span>
                    </span>
                    <img className="img-fluid" src={weatherImage} alt="" />
                  </Link>
                </div>
                <div className="col-sm-8 col-md-8 col-lg-6 mx-auto">
                  <a className="d-block mx-auto project-item" href="http://jae-task-app.s3-website-us-east-1.amazonaws.com/">
                    <span className="caption text-left">
                      <span className="caption-content">
                        <h3>Task Management App</h3>
                        <p className="mb-0">Full-Stack Application</p>
                        <p className="mb-0">Front-End: Angular</p>
                        <p className="mb-0">Back-End: Java Spring Boot</p>
                      </span>
                    </span>
                    <img className="img-fluid" src={taskImage} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        );
    }
    
}