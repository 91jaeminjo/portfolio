import React, { Component } from 'react'
import './navigationbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

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
        <Navbar id="mainNav" className="bg-secondary text-uppercase" collapseOnSelect fixed="top" expand="lg">
          <Container>
            <Navbar.Brand href="#page-top">
              Jae-Min
            </Navbar.Brand>
            <Navbar.Toggle className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" 
              aria-controls="responsive-navbar-nav">Menu <FontAwesomeIcon icon={faBars} color="white" /></Navbar.Toggle>
            
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="navbar-nav ml-auto">                
                <Nav.Link href="#projects" className="nav-link mx-0 mx-lg-1 py-3 px-0 px-lg-3 rounded">Projects</Nav.Link>
                <Nav.Link href="#about" className="nav-link mx-0 mx-lg-1 py-3 px-0 px-lg-3 rounded">About</Nav.Link>
                <Nav.Link href="#contact" className="nav-link mx-0 mx-lg-1 py-3 px-0 px-lg-3 rounded">Contact</Nav.Link>
              </Nav>
                            
            </Navbar.Collapse>
            
          </Container>
        </Navbar>
        
      )
  }
}