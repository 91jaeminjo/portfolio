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
                        <h4><br /><FontAwesomeIcon icon={faTerminal} color="black" /> Hello, my name is Jae-Min Jo, a software engineer with <FontAwesomeIcon icon={faHeart} color="red" /> and passion.
                            My favorite programming language is Java <FontAwesomeIcon icon={faJava} color="#654321" />, especially with the Java Spring Framework <FontAwesomeIcon icon={faLeaf} color="green" />, but I like programming in general regardless of the language.
                            I enjoy working with technologies involved in full-stack web development and enterprise software.
                            <br />
                        </h4>
                        <br />
                        <br />
                        <h2 className="headline">Technical Background</h2>
                        <h4><br /><FontAwesomeIcon icon={faTerminal} color="black" /> In 2006, I first started coding in Java in High School, fell in love with programming and continued to build/extend my knowledge in software to date.
                            In 2016, I graduated from the University of Texas at Austin with a bachelor's degree in Electrical and Computer Engineering <FontAwesomeIcon icon={faGraduationCap} color="black" />.
                            <br /><br />In college, I worked mostly with low-level/embedded systems software in languages such as C and assembly, but had experience in wide range of fields in software:
                            <br />
                            <br />
                            <h5>
                            <ul>
                                    <li className="tab">Computer Architecture - built an assembler/compiler and a computer simulator LC3-b architecture.</li><br />
                                    <li className="tab">Embedded Systems - programmed ARM based Microcontrollers to build DC Motor, Audio Player, etc.</li><br />
                                    <li className="tab">Hardware Languages/FPGA - programmed FPGAs in Verilog and VHDL to implement MIPS processor, stack calculator, etc.</li><br />
                                    <li className="tab">High Performance Computing - built software in a supercomputer to compute large datasets.</li>
                            </ul>
                            </h5>
                            <br/>After graduating from the University, I worked as:
                            <br/>
                            <h5>
                            <ul>
                                <br />
                                <li className="tab">Test Engineer at Microsemi - worked with RF circuitry and test program software in C. </li>
                                <br />
                                <li className="tab">PLC Engineer at Plus Engineering - programmed PLCs controlling slurry distribution systems (semiconductor equipment) in assembly language.</li>
                            </ul>
                            </h5>
                            <br /><span className="link">For more details about my experience, please refer to my <a href={pdf} target="_blank" rel="noopener noreferrer">resume</a>.</span>
                            <br />
                        </h4>
                        <br />
                        <br />
                        <h2 className="headline">Hobby</h2>
                        <h4><br /><FontAwesomeIcon icon={faTerminal} color="black" /> I am a big fan of the University of Texas football team.
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