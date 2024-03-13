import React from 'react'
import './TeamSingle.css'

const TeamSingle = () => {
    return (
        <main>
            <div className="team-info d-f jc-sb">
                <div className="team-info-img">
                    <img src="images/team1.png" alt="Team Member" />
                    
                </div>
                <div>
                    <div className="team-info-caption d-f">
                        <div>
                            <div className="team-info-name">Sarah Jasmine</div>
                            <div className="team-info-pos">CEO at Company</div>
                        </div>
                        <div className="team-info-social d-f">
                            <div><img src="images/team-social1.svg" alt="Facebook" /></div>
                            <div><img src="images/team-social2.svg" alt="Instagram" /></div>
                            <div><img src="images/team-social3.svg" alt="Twitter" /></div>
                            <div><img src="images/team-social4.svg" alt="Linked In" /></div>
                        </div>
                    </div>
                    <p className="team-info-desc">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit sed do.
                    </p>
                    <h3 className="experience-title">Past experience</h3>
                    <p className="team-info-desc">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit sed do.
                    </p>
                    <p className="team-info-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
            <div className="contact-newsletter d-f jc-sb align-center" style={{marginBottom: "166px"}}>
                <div>
                    <h3 className="contact-newsletter-title">Subscribe Our Newsletter</h3>
                    <p className="contact-newsletter-desc">Build stronger Customer Relationships with Consultalk</p>
                </div>
                <form action="" className="contact-newsletter-fm">
                    <input type="email" name="email" placeholder='your mail address' />
                    <button type="button">Subscribe</button>
                </form>
            </div>
        </main>
    )
}

export default TeamSingle