import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import './footer.css'


const Footer = () => {
    return (
        <div className="footer" id='contact'>
            <div className="icons-link">
                <a className='footer-link' href='#'><FontAwesomeIcon icon={faFacebookSquare} /></a>

                <a className='footer-link' href='#'><FontAwesomeIcon icon={faInstagram} /></a>

                <a className='footer-link' href='#'><FontAwesomeIcon icon={faTwitter} /></a> <a className='footer-link' href='#'><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
            <div className="footer-text">
                <p>Copyright ©2030 All rights reserved </p>
            </div>
        </div>
    )
}

export default Footer