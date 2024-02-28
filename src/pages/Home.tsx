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
      <div className="home-process d-f">
        <div>
          <AboveText content='Process' bgcolor='var(--primary-02)' txtColor='var(--secondary-02)' />
          <h2 className="home-process-title">There have some easy <br /> steps to join with us!</h2>
          <p className="home-process-desc" style={{ width: "488px" }}>
            Leverage agile frameworks to provide a robust synopsis for high level overviews.
            Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
          </p>
          <div className="home-process-box d-f">
            <div className="home-process-item d-f">
              <div className="process-item-num">1</div>
              <div>
                <h6 className='process-item-title'>Setup Account</h6>
                <p className="process-item-desc">
                  We understand the importance of approaching each work integrally.
                </p>
              </div>
            </div>
            <div className="home-process-item d-f">
              <div className="process-item-num">2</div>
              <div>
                <h6 className='process-item-title'>Consult with us</h6>
                <p className="process-item-desc">
                  Increase social reach and productivity with our App Directory, a collection.
                </p>
              </div>
            </div>
            <div className="home-process-item d-f">
              <div className="process-item-num">3</div>
              <div>
                <h6 className='process-item-title'>Payment & Boost</h6>
                <p className="process-item-desc">
                  We encourage every team member to be a whole person. We have a flexible.
                </p>
              </div>
            </div>
          </div>

        </div>
        <div>
          <AboveText content='Growing with our clients' />
          <h2 className="home-process-title">30 Years of Experience</h2>
          <p className="home-process-desc" style={{ width: "542.18px" }}>
            Capitalize on low hanging fruit to identify a ballpark value added activity beta test.
            Override the digital divide with additional from DevOps.
          </p>
          <p className="home-process-desc" style={{ width: "542.18px", marginTop: "30px" }}>
            Leverage agile frameworks to provide a robust synopsis for high level overviews.
            Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
          </p>
          <div className="home-process-clients d-f">
            <div className="process-clients-item d-f jc-sb">
              <div><img src="images/process-clients1.svg" alt="process-clients1" /></div>
              <div className="clients-item-title">Consistency</div>
              <p className="clients-item-desc">
                Podcasting operational change management  workflow.
              </p>
            </div>
            <div className="process-clients-item d-f jc-sb">
              <div><img src="images/process-clients2.svg" alt="process-clients2" /></div>
              <div className="clients-item-title">Improvement</div>
              <p className="clients-item-desc">
                Podcasting operational change management  workflow.
              </p>
            </div>
            <div className="process-clients-item d-f jc-sb">
              <div><img src="images/process-clients3.svg" alt="process-clients3" /></div>
              <div className="clients-item-title">Branching</div>
              <p className="clients-item-desc">
                Podcasting operational change management  workflow.
              </p>
            </div>
            <div className="process-clients-item d-f jc-sb">
              <div><img src="images/process-clients4.svg" alt="process-clients4" /></div>
              <div className="clients-item-title">Company Growth</div>
              <p className="clients-item-desc">
                Podcasting operational change management  workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-gallery">
        <AboveText
          content='Process'
          bgcolor='var(--primary-02)'
          txtColor='var(--secondary-02)'
        />
        <div className="home-gallery-caption d-f jc-sb">
          <h2 className="home-gallery-title">Our client, global analytical techno <br /> company, wanted to build market.</h2>
          <button className='home-gallery-more'>More Gallery</button>
        </div>
        <div className="home-gallery-box d-f">
           <div className="home-gallery-category d-f jc-sb">
               <div className="category-plus">+</div>
               <div>
                <div className="category-title">Taxes & Efficiency</div>
                <div className="category-subtitle">Business</div>
               </div>
            </div> 
            <div><img src="images/gallery/1.png" alt="gallery1" /></div>
            <div><img src="images/gallery/2.png" alt="gallery2" /></div>
            <div><img src="images/gallery/3.png" alt="gallery3" /></div>
            <div><img src="images/gallery/4.png" alt="gallery4" /></div>
            <div><img src="images/gallery/5.png" alt="gallery5" /></div>
        </div>
      </div>
      <div className="home-counter d-f">
        <div>
          <div className="home-counter-num">1128+</div>
          <p className="home-counter-desc">Successful Work</p>
        </div>
        <div>
          <div className="home-counter-num">908+</div>
          <p className="home-counter-desc">Team member</p>
        </div>
        <div>
          <div className="home-counter-num">258+</div>
          <p className="home-counter-desc">Happy Customers</p>
        </div>
        <div>
          <div className="home-counter-num">564+</div>
          <p className="home-counter-desc">Creative Idea</p>
        </div>
      </div>
    </main>
  )
}

export default Home