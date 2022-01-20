import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import {MdThumbsUpDown} from 'react-icons/md'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineInstagram, AiFillYoutube, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'

function Footer () {

    return (
        <div className='container-footer'>
          <div className='body-footer'> 
            <div className='upper-footer'>  
                <div className='footer-subscribe'>
                    <h2>Join our exclusive membership to receive the latest news and trends</h2>
                    <h3>You can unsubscribe at any time.</h3>
                    <div className='footer-contact'>
                        <form>
                            <input type='email' placeholder='Your Email' className='footer-input'/>
                            <input type ='submit' value ='Subscribe' className='footer-button'/>
                        </form>
                    </div>
                </div>
                <div className='footer-more'>
                    <div className='footer-content'>
                        <h1>About Us</h1>
                        <ul>
                            <li>How it works</li>
                            <li>Testimonials</li>
                            <li>Careers</li>
                            <li>Investors</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                    <div className='footer-content'>
                        <h1>Contact Us</h1>
                        <ul>
                            <li>Contact</li>
                            <li>Support</li>
                            <li>Destinations</li>
                            <li>Sponsorships</li>
                        </ul>
                    </div>
                    <div className='footer-content'>
                        <h1>Videos</h1>
                        <ul>
                            <li>Submit Video</li>
                            <li>Ambassadors</li>
                            <li>Agency</li>
                            <li>Influencer</li>
                        </ul>
                    </div>
                    <div className='footer-content'>
                        <h1>Social Media</h1>
                        <ul>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Youtube</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bottom-footer'>
                <div className='logo-footer'>
                    <MdThumbsUpDown className='image-footer'/>
                    <h1>LAVISH</h1>
                </div>
                <p>LAVISH © 2020</p>
                <div className='footer-social-icons'>
                    <FaFacebook className='social-icon'/>
                    <AiOutlineInstagram className='social-icon'/>
                    <AiFillYoutube className='social-icon'/>
                    <AiOutlineTwitter className='social-icon'/>
                    <AiFillLinkedin className='social-icon'/>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Footer;