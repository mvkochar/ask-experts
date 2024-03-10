import React from 'react'
import './Contact.css'
import AboveText from '../components/AboveText/AboveText'

const Contact = () => {
    return (
        <main>
            <div className="contact-main">
                <div className="contact-main-info">
                    <AboveText content='Contact us' />
                    <h1 className="contact-main-title">Feel Free To Reach Us</h1>
                </div>
            </div>
            <div className="contact-talk d-f align-center">
                <div><img src="images/contact-talk.png" alt="contact-talk" /></div>
                <div>
                    <AboveText
                        content="Let's talk"
                        bgcolor='var(--primary-02)'
                        txtColor='var(--secondary-02)'
                    />
                    <h2 className="contact-talk-title">Get In Touch With Us</h2>
                    <p className="contact-talk-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <div className="contact-talk-content d-f">
                        <div className="contact-talk-item d-f">
                            <div><img src="images/talk-phone.svg" alt="talk-phone" /></div>
                            <div>
                                <div className="talk-item-title">Have Any Question?</div>
                                <div className="talk-item-desc">Free +01 238 543 987</div>
                            </div>
                        </div>
                        <div className="contact-talk-item d-f">
                            <div><img src="images/talk-email.svg" alt="talk-email" /></div>
                            <div>
                                <div className="talk-item-title">Write Email</div>
                                <div className="talk-item-desc">info@consultalk.com</div>
                            </div>
                        </div>
                        <div className="contact-talk-item d-f">
                            <div><img src="images/talk-location.svg" alt="talk-location" /></div>
                            <div>
                                <div className="talk-item-title">Visit Anytime</div>
                                <div className="talk-item-desc">King Street, Prior Lake, New York.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-newsletter d-f jc-sb align-center">
                <div>
                    <h3 className="contact-newsletter-title">Subscribe Our Newsletter</h3>
                    <p className="contact-newsletter-desc">Build stronger Customer Relationships with Consultalk</p>
                </div>
                <form action="" className="contact-newsletter-fm">
                    <input type="email" name="email" placeholder='your mail address' />
                    <button type="button">Subscribe</button>
                </form>
            </div>
            <div className="home-contact d-f">
                <div>
                    <AboveText content='Process' />
                    <h2 className="home-contact-title">Contact Us. I'’s Easy.</h2>
                    <p className="home-contact-desc">
                        Leverage agile frameworks to provide a robust synopsis for high level overviews.
                        Iterative approaches to corporate strategy foster collaborative.
                    </p>
                    <div className="home-contact-content d-f">
                        <div className="home-contact-item d-f">
                            <div><img src="images/contact-phone.svg" alt="contact-phone" /></div>
                            <div>
                                <div className="contact-item-title">Call Today</div>
                                <div className="contact-item-desc">+1 800 100 900</div>
                            </div>
                        </div>
                        <div className="home-contact-item d-f">
                            <div><img src="images/contact-schedule.svg" alt="contact-schedule" /></div>
                            <div>
                                <div className="contact-item-title">Monday To Friday</div>
                                <div className="contact-item-desc">9AM - 5PM</div>
                            </div>
                        </div>
                        <div className="home-contact-item d-f">
                            <div><img src="images/contact-location.svg" alt="contact-location" /></div>
                            <div>
                                <div className="contact-item-title">USA Office</div>
                                <div className="contact-item-desc">195 Devonshire St Boston, MA <br /> 02110</div>
                            </div>
                        </div>
                    </div>
                </div>
                <form action="" className='home-contact-fm d-f'>
                    <div className="input-bl d-f">
                        <div>
                            <label htmlFor="fname">Full Name</label>
                            <input type="text" name='fname' id='fname' placeholder='John David' />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' id='email' placeholder='consult@mail.com' />
                        </div>
                    </div>
                    <div className="input-bl d-f">
                        <div>
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" name="phone" id="phone" placeholder='+008 654 231' />
                        </div>
                        <div>
                            <label htmlFor="">Company(optional)</label>
                            <input type="text" name='company' placeholder='yourcompany.com' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="msg">Message</label>
                        <textarea
                            name="msg"
                            id="msg"
                            placeholder='Briefly tell us about your project and your current goals. How can we help you?'>
                        </textarea>
                    </div>
                    <button type='button'>Send Message</button>
                </form>
            </div>
        </main>
    )
}

export default Contact