import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default class Footer extends Component {
    render() {
        return (

            <footer className="footer text-left small">
                <div className="container text-light">
                    <div className="row">
                        <p className="footer-text">connect via</p>
                        <li className="list-inline-item"><a className="btn btn-social rounded-circle linkedin" role="button" href="https://www.linkedin.com/in/jae-min-jo" target="_blank"><FontAwesomeIcon icon={faLinkedin} color="gray" /></a></li>
                        <li className="list-inline-item"><a className="btn btn-social rounded-circle github" role="button" href="https://github.com/91jaeminjo" target="_blank"><FontAwesomeIcon icon={faGithub} color="gray" /></a></li>
                    </div>
                </div>
            </footer>
        )
    }
}