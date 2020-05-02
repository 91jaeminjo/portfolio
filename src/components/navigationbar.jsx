import React, { Component } from 'react'


export default class Navigationbar extends Component {
    render() {
        
        return (
          <div className="navigationbar text-left">
            <img style={{marginLeft:1+'em'}} src={process.env.PUBLIC_URL+'/logo-via-logohub.png'} alt="Logo" height="50px" width="240px"></img>
            <br/>
            <br/>
            <h3 className="font-weight-bold" style={{marginLeft:1+'em'}}>Navigation</h3>
              
              <ul className="nav-items">
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>
        )
    }
}