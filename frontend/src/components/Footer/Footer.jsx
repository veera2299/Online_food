import React from 'react';
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets';
import v2_logo from '../../assets/v2_logo.png'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='logo' src={v2_logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas illo saepe blanditiis modi quis doloribus.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 123456789</li>
                <li>contact@v2.com</li>
            </ul>
        </div>
      </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © V2@gmail.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
