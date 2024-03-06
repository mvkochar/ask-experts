import React from 'react'
import './Case.css'
import AboveText from '../components/AboveText/AboveText'

const Case = () => {
    return (
        <main>
            <div className="case-main">
                <div className="case-main-info">
                    <AboveText content='Case Studies' />
                    <h1 className='case-main-title'>Case Studies</h1>
                </div>
            </div>
            <div className="case-blog">
                <div className="case-blog-tabs d-f">
                    <button className='tabs-btn'>All</button>
                    <button className='tabs-btn tabs-btn__active'>Taxes & Efficiency</button>
                    <button className='tabs-btn'>Investment banking</button>
                    <button className='tabs-btn'>Financial Plan</button>
                    <button className='tabs-btn'>Audit & Evaluation</button>
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
                    <div><img src="images/gallery/6.png" alt="gallery6" /></div>
                    <div><img src="images/gallery/7.png" alt="gallery7" /></div>
                    <div><img src="images/gallery/8.png" alt="gallery8" /></div>
                    <div><img src="images/gallery/9.png" alt="gallery9" /></div>
                </div>
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

export default Case