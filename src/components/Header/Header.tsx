import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <div className="header-info d-f jc-sb align-center">
            <div className="header-schedule">Monday - Friday 8AM - 9PM</div>
            <div className="header-location">725 Park Ave, New York</div>
            <div className="header-social d-f align-center">
                <div><img src="images/header-social1.svg" alt="Instagram" /></div>
                <div><img src="images/header-social2.svg" alt="Facebook" /></div>
                <div><img src="images/header-social3.svg" alt="Twitter" /></div>
                <div><img src="images/header-social4.svg" alt="Linkedin" /></div>
            </div>
        </div>
        <div className="header-bar d-f jc-sb align-center">
             <div><img src="images/logo.svg" alt="Logo" /></div>
             <nav>
                <ul className="header-nav d-f">
                    <li className="header-nav-item"><Link to="/">Home</Link></li>
                    <li className="header-nav-item"><Link to="about">About</Link></li>
                    <li className="header-nav-item"><Link to="services">Services</Link></li>
                    <li className="header-nav-item"><Link to="team">Team</Link></li>
                    <li className="header-nav-item"><Link to="case-study">Case Study</Link></li>
                    <li className="header-nav-item"><Link to="blog">Blog</Link></li>
                    <li className="header-nav-item"><a href="">Contact</a></li>
                </ul>
             </nav>
            <button className='header-call'>+ (888) 452 1505</button>   
        </div>
    </header>
  )
}

export default Header