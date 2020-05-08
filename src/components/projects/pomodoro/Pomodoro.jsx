import React, { Component } from 'react'
import SetTime from './SetTime'
import {
    Link
} from 'react-router-dom';

var timeInterval


export default class TimeClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breakLength: 5,
            sessionLength: 25,
            currentSession: "Session",
            currentStatus: "Stopped",
            time: 1500,
            timeInterval: '',
            restart: 0,
            count: 0
        };

        this.incBreakLength = this.incBreakLength.bind(this);
        this.decBreakLength = this.decBreakLength.bind(this);
        this.incSessionLength = this.incSessionLength.bind(this);
        this.decSessionLength = this.decSessionLength.bind(this);
        this.startStop = this.startStop.bind(this);
        this.countDown = this.countDown.bind(this);
        this.clock = this.clock.bind(this);
        this.reset = this.reset.bind(this);
    }
    incBreakLength() {
        if (this.state.currentStatus == "Stopped") {
            let session = this.state.currentSession
            var length = this.state.breakLength
            var timer = length * 60
            if (session == "Break") {
                if (length < 60) {
                    this.setState({
                        breakLength: length + 1,
                        time: timer + 60
                    });
                }
            }
            else {
                if (length < 60) {
                    this.setState({
                        breakLength: length + 1,
                    });
                }
            }
        }
    }
    decBreakLength() {
        if (this.state.currentStatus == "Stopped") {
            let session = this.state.currentSession
            var length = this.state.breakLength
            var timer = length * 60
            if (session == "Break") {
                if (length > 1) {
                    this.setState({
                        breakLength: length - 1,
                        time: timer - 60
                    });
                }
            }
            else {
                if (length > 1) {
                    this.setState({
                        breakLength: length - 1
                    });
                }
            }
        }
    }
    incSessionLength() {
        if (this.state.currentStatus == "Stopped") {

            let session = this.state.currentSession
            var length = this.state.sessionLength
            var timer = length * 60
            if (session == "Session") {
                if (length < 60) {
                    this.setState({
                        sessionLength: length + 1,
                        time: timer + 60
                    });
                }
            }
            else {
                if (length < 60) {
                    this.setState({
                        sessionLength: length + 1
                    });
                }
            }
        }
    }
    decSessionLength() {
        if (this.state.currentStatus == "Stopped") {
            let session = this.state.currentSession
            var length = this.state.sessionLength
            var timer = length * 60

            if (session == "Session") {
                if (length > 1) {
                    this.setState({
                        sessionLength: length - 1,
                        time: timer - 60
                    });
                }
            }
            else {
                if (length > 1) {
                    this.setState({
                        sessionLength: length - 1
                    });
                }
            }
        }
    }
    clock() {
        let session = this.state.currentSession;
        let length = 0;
        let status = this.state.currentStatus;

        session == "Session"
            ? (length = this.state.sessionLength)
            : (length = this.state.breakLength)
        let timer = this.state.time;

        /* if(timer===0){
           console.log("timer == ",this.state.time)
           sound.currentTime = 0;
           sound.play();
           
         }*/


        if (this.state.time === 0) {
            this.audioBeep.currentTime = 0
            this.audioBeep.play()
        }
        if (timer < 0) {
            if (session == "Session") {
                this.startStop()
                this.setState({
                    currentSession: "Break",
                    time: this.state.breakLength * 60,
                    restart: 1,
                    count: 1
                })
            }
            else {
                this.startStop()
                this.setState({
                    currentSession: "Session",
                    time: this.state.sessionLength * 60,
                    restart: 1,
                    count: 1
                })
            }
        }

        if (this.state.restart == 1) {
            this.startStop()
            this.setState({
                restart: 0
            })
        }


        let minutes = Math.floor(timer / 60);
        let seconds = timer - minutes * 60;

        seconds = seconds < 10 ? "0" + seconds : seconds;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        return minutes + ":" + seconds;
    }
    countDown() {
        if ((this.state.count > 0) && (this.state.count < 4)) {
            this.setState({
                time: this.state.time - 1,
                count: this.state.count + 1
            })
        }
        else if (this.state.count == 4) {
            this.audioBeep.pause()
            this.audioBeep.currentTime = 0
            this.setState({
                time: this.state.time - 1,
                count: 0
            })
        }
        else {
            this.setState({
                time: this.state.time - 1
            })
        }


    }

    startStop() {
        let status = this.state.currentStatus;

        if (status == "Running") {
            clearInterval(this.state.timeInterval)
            this.setState({
                currentStatus: "Stopped"
            });
        }
        else {

            const intervalId = setInterval(() => {
                this.countDown()
            }, 1000)
            if (this.state.time === 0) {
                this.audioBeep.currentTime = 0
                this.audioBeep.play()
            }
            this.setState({
                timeInterval: intervalId,
                currentStatus: "Running"
            });
        }

    }
    reset() {
        clearInterval(this.state.timeInterval)
        this.setState({
            breakLength: 5,
            sessionLength: 25,
            currentSession: "Session",
            currentStatus: "Stopped",
            time: 1500,
            timeInterval: '',
            restart: 0,
            count: 0
        });
        this.audioBeep.pause()
        this.audioBeep.currentTime = 0
    }
    render() {
        return (
            <div id="timeClock">
                <div>
                    <h1>Time Clock</h1>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <SetTime
                            titleId="break-label"
                            title="Break Length"
                            decId="break-decrement"
                            incId="break-increment"
                            lengthId="break-length"
                            onInc={this.incBreakLength}
                            onDec={this.decBreakLength}
                            length={this.state.breakLength}
                        />
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-5">
                        <SetTime
                            titleId="session-label"
                            title="Session Length"
                            decId="session-decrement"
                            incId="session-increment"
                            lengthId="session-length"
                            onInc={this.incSessionLength}
                            onDec={this.decSessionLength}
                            length={this.state.sessionLength}
                        />
                    </div>
                </div>
                <div>
                    <div id="timer-label">
                        <h3>{this.state.currentSession}</h3>
                    </div>
                    <div id="time-left">
                        <audio id="beep" ref={(audio) => { this.audioBeep = audio; }}>
                            <source src="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3" type="audio/mpeg">
                            </source>
                        </audio>

                        {this.clock()}
                    </div>
                    <br />
                    <button id="start_stop" onClick={this.startStop}>
                        <i className="fa fa-play" />  <i className="fa fa-pause" />
            start/stop
          </button>
                    <button id="reset" onClick={this.reset}>
                        reset
          </button>
                </div>
                <br />
                <Link to={process.env.PUBLIC_URL}>Home</Link>
            </div>
        );
    }
}

