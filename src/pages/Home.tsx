import React from 'react'
import './Home.css'

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
    </main>
  )
}

export default Home