import React from 'react';
import Home from './components/home'
import Navigationbar from './components/navigationbar'
import Projects from './components/projects';
import TimeClock from './components/projects/pomodoro/Pomodoro';
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Jae-Min's Portfolio
      </header>
      <body>
        <div className="text-center">
          <Navigationbar />
          <Home />
          <Projects />
          
        </div>

      </body>
    </div>
  );
}

export default function AppRouter(){
  return(
    <Router>
      <div>
      </div>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/TimeClock">
          <TimeClock />
        </Route>
      </Switch>
    </Router>
  )
}
