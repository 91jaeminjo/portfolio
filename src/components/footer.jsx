import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons'

export default class Footer extends Component {
    render() {
        return (

            <footer className="footer text-light">
                <div className="row small">
                    
                    
                        <p className="footer-text">connect via</p>
                    
                        <li className="list-inline-item"><a className="btn btn-social rounded-circle" role="button" href="https://www.linkedin.com/in/jae-min-jo" target="_blank"><FontAwesomeIcon icon={faLinkedin} color="gray" /></a></li>
                        <li className="list-inline-item"><a className="btn btn-social rounded-circle" role="button" href="https://github.com/91jaeminjo" target="_blank"><FontAwesomeIcon icon={faGithub} color="gray" /></a></li>
                        <li className="list-inline-item"><a className="btn btn-social rounded-circle" role="button" href="#" target="_blank" title="CodePen link coming soon!"><FontAwesomeIcon icon={faCodepen} color="gray" /></a></li>
                    
                </div>
            </footer>
        )
    }
}