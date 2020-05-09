import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal, faGraduationCap, faHeart, faCoffee, faLaptop, faLeaf, faFootballBall } from '@fortawesome/free-solid-svg-icons'
export default class About extends Component {
    
    render(){
        return (
            <section id="about" className="bg-primary text-white mb-0">
                <div className="timeline">
                    <h1 className="section-title-2">ABOUT</h1>
                    <hr className="style2" />
                    <div className="time-container content text-left">
                        
                        <h2 className="headline">About Myself</h2>
                        <h4><FontAwesomeIcon icon={faTerminal} color="black" /> Hello, my name is Jae-Min Jo, a software engineer with <FontAwesomeIcon icon={faHeart} color="red" /> and passion.
                            <br />My favorite programming language is Java <FontAwesomeIcon icon={faCoffee} color="#654321" />, especially with the Java Spring Framework <FontAwesomeIcon icon={faLeaf} color="green" />.
                            <br />
                            <br />Here is a link to my <a href="#">resume</a> for your reference.
                        </h4>
                        <br />
                        <br />
                        <h2 className="headline">Educational Background</h2>
                        <h4><FontAwesomeIcon icon={faTerminal} color="black" /> I first started coding in Java in High School, fell in love with programming and decided to study Electrical and Computer engineering.
                            I graduated from the University of Texas at Austin in 2016 <FontAwesomeIcon icon={faGraduationCap} color="black" />.

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