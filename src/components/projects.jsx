import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";
import weatherImage from './projects/weather/weather-icon.jpg'
import taskImage from './projects/task/task-icon.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

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
            <section id="projects" className="projects">
                
                <h1 className="text-center section-title-2">PROJECTS</h1>
                
                <hr className="style2" />
                <br />
                <br />
                <h3 className="text-center"><FontAwesomeIcon icon={faQuoteLeft} color="White" /> {this.state.quoteData.text} <FontAwesomeIcon icon={faQuoteRight} color="white" /></h3>
                <h4>- {this.state.quoteData.author}</h4>
                <br />
                <button className="btn" onClick={this.getRandomQuote}>Random Quote</button>
                <br />
                <br />
                <h5>Random Quote API Credit to: https://type.fit/api/quotes</h5>
                <br />
                <br />
                <div className="container ">
                    <div className="row no-gutters">
                        <div className="col-6 project-items">
                            <Link to="/WeatherApp" className="d-block mx-auto ">
                                <div className="caption text-left">
                                    <div className="caption-content">
                                        <h3>Weather App</h3>
                                        <p>Consuming RESTful API from OpenWeatherMap</p>
                                    </div>
                                </div>
                                <img className="img-fluid" src={weatherImage} /></Link>
                        </div>
                        <div className="col-6 project-items">
                            <a className="d-block mx-auto " href="#page-top">
                                <div className="caption text-left">
                                    <div className="caption-content text-danger">
                                        <h3>Task Management App</h3>
                                        <p>Coming Soon...</p>
                                    </div>
                                </div>                                    
                                <img className="img-fluid" src={taskImage} /></a>
                        </div>
                        
                    </div>     
                </div>
            </section>
        )
    }
    
}