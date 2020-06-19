import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faStar, faTerminal, faGraduationCap, faHeart, faCoffee, faLaptop, faLeaf, faFootballBall } from '@fortawesome/free-solid-svg-icons'
import { faJava, faPython } from '@fortawesome/free-brands-svg-icons'
import '../global.scss'
import './about.scss'
import pdf from "../../resources/Jae-Min_Jo_resume_2020.pdf"
export default class About extends Component {
    
    render(){
        return (
            <section id="about" className="page-section bg-primary text-white mb-0">
                <div className="container">
                    <h1 className="page-section-heading text-center text-uppercase text-white">ABOUT</h1>
                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><FontAwesomeIcon icon={faStar} /></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <div className="time-container content text-left">
                        
                        <h2 className="headline">About Myself</h2>
                        <h4><FontAwesomeIcon icon={faTerminal} color="black" /> Hello, my name is Jae-Min Jo, a software engineer with <FontAwesomeIcon icon={faHeart} color="red" /> and passion.
                            <br />My favorite programming language is Java <FontAwesomeIcon icon={faJava} color="#654321" />, especially with the Java Spring Framework <FontAwesomeIcon icon={faLeaf} color="green" />.
                            <br />
                            <br />Here is a link to my <a href={pdf} target="_blank" rel="noopener noreferrer">resume</a> for your reference.
                        </h4>
                        <br />
                        <br />
                        <h2 className="headline">Technical Background</h2>
                        <h4><FontAwesomeIcon icon={faTerminal} color="black" /> I first started coding in Java in High School, fell in love with programming and decided to study Electrical and Computer engineering.
                            I graduated from the University of Texas at Austin in 2016 <FontAwesomeIcon icon={faGraduationCap} color="black" />.
                            <br/>Through internships and work after graduation, I have gained 

                        </h4>
                        <br />
                        <br />
                        <h2 className="headline">Hobby</h2>
                        <h4><FontAwesomeIcon icon={faTerminal} color="black" /> Having lived in Austin, Texas since 2001, I am a big fan of the University of Texas football team.<br />
                            As a hobby, I like to follow the Longhorns football team. Hook'em <FontAwesomeIcon icon={faFootballBall} color="#BF5700" />.
                        <br />
                        <br />
                        </h4>
                    </div>
                    
                </div>
            </section>
        )
    }
}