import React, {Component} from 'react';
import Home from './components/home'
import Navigationbar from './components/navigationbar'
import Projects from './components/projects';
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import TimeClock from './components/projects/pomodoro/Pomodoro'
import WeatherApp from './components/projects/weather/WeatherApp'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

library.add(fab, faGithub, faCoffee, faLinkedin)

class App extends Component {
  constructor(props) {
    super(props) 
  }
  render(){
    return (
    
      <div className="App">
        <Navigationbar />
        <Home />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
      
    );
  }
}

export default function AppRouter(){
  return (
    <Router>
        <Switch>
          <Route path={process.env.PUBLIC_URL} components={App}>
            <App />
          </Route>
          <Route exact path="/TimeClock">
            <TimeClock />
          </Route>
          <Route exact path="/WeatherApp">
            <WeatherApp />
          </Route>
        </Switch>
      </Router >
  )

}