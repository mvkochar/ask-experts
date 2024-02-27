import React from 'react'
import './Home.css'
import AboveText from '../components/AboveText/AboveText'
import ServiceItem from '../components/ServiceItem/ServiceItem'

const Home = () => {
  return (
    <main>
      <div className="home-main">
        <div className="home-main-about">
          <h1 className="home-main-title">Your small business growth advisors</h1>
          <p className="home-main-desc">
            Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.
          </p>
          <div className="home-main-actions d-f">
            <button className="home-main-services">Our Services</button>
            <button className='home-main-book'>Book a Meeting</button>
          </div>
        </div>
      </div>
      <div className="home-clients d-f jc-sb align-center">
        <div><img src="images/client-logo1.svg" alt="client-logo1" /></div>
        <div><img src="images/client-logo2.svg" alt="client-logo2" /></div>
        <div><img src="images/client-logo3.svg" alt="client-logo3" /></div>
        <div><img src="images/client-logo4.svg" alt="client-logo4" /></div>
        <div><img src="images/client-logo5.svg" alt="client-logo5" /></div>
        <div><img src="images/client-logo6.svg" alt="client-logo6" /></div>
      </div>
      <div className="home-about d-f">
        <div style={{ width: "420px" }}>
          <AboveText content='About Us' />
          <h2 className="home-about-title">About our Consuting Agency Team</h2>
          <div className="home-about-subtitle">We create experiences and build products that <br /> make business grow</div>
          <p className="home-about-desc">
            Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.
          </p>
          <div className="home-about-counter d-f align-center">
            <div className="counter-item">
              <h5 className='counter-item-num'>400+</h5>
              <p className="counter-item-desc">Business Services</p>
            </div>
            <div className="counter-divider"></div>
            <div className="counter-item">
              <h5 className='counter-item-num'>100+</h5>
              <p className="counter-item-desc">Happy Customer</p>
            </div>
          </div>
        </div>
        <div className="home-about-experience">
          <div><img src="images/happy-about.png" alt="happy-about" /></div>
          <div className="home-about-market d-f align-center">
            <div className="about-market-num">50+</div>
            <p className="about-market-desc">Market Experiences</p>
          </div>
        </div>
      </div>
      <div className="home-services">
        <AboveText content='Services' />
        <h2 className="home-services-title">Get Control Over Your Business I take <br /> your finance to next level</h2>
        <div className="home-services-box d-f">
          <ServiceItem
            image='/images/service1.svg'
            title='Audit & Evaluation'
            desc='Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.'
          />
          <ServiceItem
            image='/images/service2.svg'
            title='Financial Projections'
            desc='Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.'
          />
          <ServiceItem
            image='/images/service3.svg'
            title='Funds and investments'
            desc='Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.'
          />
          <ServiceItem
            image='/images/service4.svg'
            title='Finance & Restructuring'
            desc='Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.'
          />
          <ServiceItem
            image='/images/service5.svg'
            title='Taxes & Efficiency'
            desc='Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.'
          />
          <ServiceItem
            image='/images/service6.svg'
            title='Investment banking'
            desc='Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.'
          />
        </div>
      </div>
    </main>
  )
}

export default Home