import React from 'react'
import AboveText from '../components/AboveText/AboveText'
import './About.css'
import TeamMember from '../components/TeamMember/TeamMember'

const About = () => {
  return (
    <main>
      <div className="about-main">
        <div className="about-main-info">
          <AboveText
            content='Services'
          />
          <h1 className="about-main-title">Creative Services For Boost Your Business Growth</h1>
        </div>
      </div>
      <div className="about-vision d-f">
        <div>
          <AboveText
            content='Our vision'
            bgcolor='var(--primary-02)'
            txtColor='var(--secondary-02)'
          />
          <h2 className="about-vision-title">Turn your ideas into reality.</h2>
          <p className="about-vision-desc">
            Capitalize on low hanging fruit to identify a ballpark value added activity beta test.
            Override the digital divide with additional from DevOps.
          </p>
          <ul className="about-vision-list">
            <li>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day.</li>
            <li>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test override the digital.</li>
          </ul>
        </div>
        <div><img src="images/about-vision.png" alt="about-vision" /></div>
      </div>
      <div className="about-counter d-f">
        <div>
          <div className="about-counter-num">1128+</div>
          <div className="about-counter-desc">Successful Work</div>
        </div>
        <div>
          <div className="about-counter-num">908+</div>
          <div className="about-counter-desc">Team member</div>
        </div>
        <div>
          <div className="about-counter-num">258+</div>
          <div className="about-counter-desc">Happy Customers</div>
        </div>
        <div>
          <div className="about-counter-num">264+</div>
          <div className="about-counter-desc">Creative Idea</div>
        </div>
      </div>
      <div className="about-features">
        <div className="d-f jc-sb">
          <div>
            <AboveText
              content='Growing with our Clients'
            />
            <h2 className="about-features-title">Our core values & principles</h2>
            <p className="about-features-desc">
              Capitalize on low hanging fruit to identify a ballpark value added activity beta test.
              Override the digital divide with additional from DevOps.
            </p>
          </div>
          <button type='button' className='about-features-touch'>Get in touch</button>
        </div>
        <div className="about-features-box d-f jc-sb">
          <div className="about-features-item d-f jc-sb">
            <div><img src="images/about-features1.svg" alt="about-features1" /></div>
            <div className="features-item-title">Creative Ideas</div>
            <p className="features-item-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec aliquam.
            </p>
            <a href="" className="features-item-more">Read More</a>
          </div>
          <div className="about-features-item d-f jc-sb">
            <div><img src="images/about-features2.svg" alt="about-features2" /></div>
            <div className="features-item-title">Best Features</div>
            <p className="features-item-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="" className="features-item-more">Read More</a>
          </div>
          <div className="about-features-item d-f jc-sb">
            <div><img src="images/about-features3.svg" alt="about-features3" /></div>
            <div className="features-item-title">Experience</div>
            <p className="features-item-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec aliquam.
            </p>
            <a href="" className="features-item-more">Read More</a>
          </div>
          <div className="about-features-item d-f jc-sb">
            <div><img src="images/about-features4.svg" alt="about-features4" /></div>
            <div className="features-item-title">Easy Solutions</div>
            <p className="features-item-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="" className="features-item-more">Read More</a>
          </div>
        </div>
      </div>
      <div className="about-video">
        <AboveText
          content='Our History'
          bgcolor='var(--primary-02)'
          txtColor='var(--secondary-02)'
        />
        <h2 className="about-video-title">Better Website Means A User Experience</h2>
        <p className="about-video-desc">
          Ippsum is the result of synergy between our teams and our customers.
          Our company culture is focused on excellent productivity, customer satisfaction,
          respect for team and individual achievements.
        </p>
        <div className="about-video-content"><img src="images/about-video.png" alt="Video" /></div>
      </div>
      <div className="about-team">
        <AboveText
          content='Our team'
        />
        <h2 className="about-team-title">We champion the bold to achieve the extraordinary</h2>
        <p className="about-team-desc">
          Ippsum is the result of synergy between our teams and our customers.
          Our company culture is focused on excellent productivity, customer satisfaction, respect for team.
        </p>
        <div className="about-team-box d-f">
          <TeamMember
            image='images/team1.png'
            position='CEO at Company'
            bgColor='var(--primary-01)'
            txtColor='var(--primary-03)'
            fName='Sarah Jasmine'
            desc='Leverage agile frameworks to provide a robust synopsis for high level overviews.'
          />
          <TeamMember
            image='images/team2.png'
            position='Manager'
            fName='John Carter'
            desc='Leverage agile frameworks to provide a robust synopsis for high level overviews.'
          />
          <TeamMember
            image='images/team3.png'
            position='CEO at Company'
            fName='Daisy Stella'
            desc='Leverage agile frameworks to provide a robust synopsis for high level overviews.'
          />
        </div>
      </div>
      <div className="home-book d-f align-center" style={{marginBottom: "105.19px"}}>
        <div>
          <AboveText
            content='Book now'
            bgcolor='var(--primary-02)'
            txtColor='var(--secondary-02)'
          />
          <h2 className="home-book-title">Better Consult, <span>Better</span> Results</h2>
          <p className="home-book-desc">
            Our software development agency has a growth up to 30% per each year.
            If you are result-oriented, not afraid to take initiative - drop us a note and join our team!
          </p>
          <button className="home-book-call">+800 1234 654</button>
        </div>
        <div><img src="images/home-book.png" alt="home-book" /></div>
      </div>
    </main>
  )
}

export default About