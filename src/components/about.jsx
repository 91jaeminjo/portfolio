import React, { Component } from 'react'

export default class About extends Component {
    render(){
        return (
            <section id="about" className="bg-primary text-white mb-0">
                <div className="timeline">
                    <h1 className="section-title">ABOUT</h1>
                    
                    <div className="container left time-container">
                        <div className="content text-left">
                            <h2 className="headline">2020</h2>
                            <p>Seeking a position in web development software engineering</p>
                        </div>
                    </div>
                    <div className="container left time-container">
                        <div className="content text-left">
                            <h2 className="headline">2018-2019</h2>
                            <p>
                                PLC Engineer - PlusENG
                            </p>
                        </div>
                    </div>
                    <div className="container left time-container">
                        <div className="content text-left">
                            <h2 className="headline">2016-2018</h2>
                            <p>
                              Test Engineer - Microsemi
                            </p>
                        </div>
                    </div>

                    <div className="container left time-container">
                        <div className="content text-left">
                            <h2 className="headline">2016</h2>
                            <p>
                            Graduated from the University of Texas at Austin<br />
                            Bachelor of Science in Electrical and Computer Engineering
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}