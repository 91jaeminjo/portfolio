import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";
import weatherImage from './projects/weather/weather-icon.jpg'
import taskImage from './projects/task/task-icon.jpg'


export default class Projects extends Component {
    render(){
        return (
            <section id="projects" className="projects">
                <div className="container">
                    <h1 className="text-center section-title">PROJECTS</h1>
                    
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
                                        <h3>Task App</h3>
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