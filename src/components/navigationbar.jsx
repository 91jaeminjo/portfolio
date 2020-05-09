import React, { Component } from 'react'




export default class Navigationbar extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.scrollFunction);
  }
  componWillUnmount(){
    window.removeEventListener("scroll",this.scrollFunction);
  }
  scrollFunction() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 80,
      navEl = document.getElementById("mainNav");
      if(navEl!=null){  
        if (distanceY > shrinkOn) {
          navEl.classList.add("navbar-shrink");
        } else {
          navEl.classList.remove("navbar-shrink");
        }
      }
  }
  render() {
      
      return (
        <nav id="mainNav" className="navbar navbar-expand-lg fixed-top bg-secondary text-uppercase">
          <a className="navbar-brand" href="#page-top">Jae-Min</a>
            <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>
            <div id="navbarResponsive" className="collapse navbar-collapse">
              <ul className="nav navbar-nav ml-auto">
                <li role="presentation" className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#projects">Projects</a></li>
                <li role="presentation" className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a></li>
                <li role="presentation" className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a></li>
              </ul>
            </div>
        </nav>
      )
  }
}