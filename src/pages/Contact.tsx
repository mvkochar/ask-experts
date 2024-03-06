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
        </main>
    )
}

export default Contact