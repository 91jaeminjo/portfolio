import React, { Component } from 'react'
import profilePic from '../../images/web-profile-pic.jpg'
import './home.scss'
import '../divider.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default class Home extends Component {
    render() {
        return (
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <img className="masthead-pic mb-5" src={profilePic} alt="" />
                <h1 className="masthead-heading text-uppercase mb-0">Jae-Min Jo</h1>
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><FontAwesomeIcon icon={faStar} /></div>
                <div className="divider-custom-line"></div>
            </div>
            <p className="masthead-subheading mb-0">Fullstack Web Developer - Software Engineer</p>
            </div>
        </header>
        )
    }
}