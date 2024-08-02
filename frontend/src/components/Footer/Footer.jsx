/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'
import { assets } from '../../frontend_assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt=''></img>
                <p>Hi, I'm Pooja Sawant, and welcome to FlavourFly! Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time. At Tomato, we're not just delivering food, we're delivering happiness. Life’s too short for boring meals, lett's make it a delicious adventure!</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt='' />
                    <img src={assets.twitter_icon} alt='' />
                    <img src={assets.linkedin_icon} alt='' />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-9404882548</li>
                    <li>poojasawant1126@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 @ FlavourFly.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
