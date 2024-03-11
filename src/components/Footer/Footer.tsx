import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-bar d-f jc-sb">
        <div className='footer-info'>
          <div><img src="images/footer-logo.svg" alt="footer-logo" /></div>
          <div className="footer-social">Fb./ Ig./ Tw./ Be.</div>
        </div>
        <div>
          <div className="footer-bar-title">Product</div>
          <ul className="footer-bar-list">
            <li><a href="">Service</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Single Service</a></li>
            <li><a href="">Get Quote</a></li>
            <li><a href="">Prices</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-bar-title">Company</div>
          <ul className="footer-bar-list">
            <li><a href="">About</a></li>
            <li><a href="">News</a></li>
            <li><a href="">Contacts</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Our team</a></li>
            <li><a href="">Our approach</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-bar-title">Address</div>
          <p className="footer-address">
            1700 W Blancke St, kiyev port south USA, America
          </p>
          <button type='button' className='footer-book'>Book an Appoinment</button>
        </div>
      </div>
      <div className="footer-copyright">
        &copy;2022 &nbsp; Consultalk.&nbsp; All rights reserved &nbsp; | &nbsp;
        Terms of Service &nbsp; | &nbsp; <Link to="/licenses">Privacy Policy</Link> 
      </div>
    </footer>
  )
}

export default Footer