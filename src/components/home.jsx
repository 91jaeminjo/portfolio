import React, { Component } from 'react'
import profilePic from '../images/web-profile-pic.jpg'
import '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class Home extends Component {

    

    render() {
        return (
            <header className="masthead bg-primary text-white text-center">
                <div className="container"><img id="profile-pic" className="d-block mx-auto mb-5 circular-border" src={profilePic} />
                    
                    <h1>Jae-Min Jo</h1>
                    <hr className="style" />
                    <h2 className="mb-0">Fullstack Web Developer - Software Engineer</h2>
                </div>
            </header>
        )
    }
}