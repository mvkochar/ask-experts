import React from 'react'
import './Services.css'
import AboveText from '../components/AboveText/AboveText'
import ServiceItem from '../components/ServiceItem/ServiceItem'

const Services = () => {
    return (
        <main>
            <div className="services-main">
                <div className="services-main-info">
                    <AboveText
                        content='Services'
                    />
                    <h1 className="services-main-title">Creative Services For Boost <br /> Your Business Growth</h1>
                </div>
            </div>
            <div className="home-services" style={{ marginTop: 0 }}>
                <AboveText
                    content='Services'
                    bgcolor='var(--primary-02)'
                    txtColor='var(--secondary-02)'
                />
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
            <div className="services-process d-f">
                <div><img src="images/services-process.png" alt="services-process" /></div>
                <div>
                    <AboveText
                        content='Process'
                    />
                    <h2 className="services-process-title">Our Consuting Service <br /> Development</h2>
                    <div className="services-process-content d-f">
                        <div className="services-process-item d-f">
                            <div><img src="images/services-process1.svg" alt="services-process1" /></div>
                            <div>
                                <div className="process-item-title">Banking and Finance</div>
                                <p className="process-item-desc">
                                    Professionally fashion wireless leadership rather than prospective experiences
                                    my cardinate clicks-and-mortar testing whereas.
                                </p>
                            </div>
                        </div>
                        <div className="services-process-item d-f">
                            <div><img src="images/services-process2.svg" alt="services-process2" /></div>
                            <div>
                                <div className="process-item-title">Logistic and Transportation</div>
                                <p className="process-item-desc">
                                    Compellingly embrace empowered e-business after user friendly intellectual capital.
                                    Interactively actualize front-end processes.
                                </p>
                            </div>
                        </div>
                        <div className="services-process-item d-f">
                            <div><img src="images/services-process3.svg" alt="services-process3" /></div>
                            <div>
                                <div className="process-item-title">Trading</div>
                                <p className="process-item-desc">
                                    Uniquely matrix economically sound value through cooperative technology parallel
                                    task fully researched data and enterprise.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="services-pricing">
                <AboveText
                    content='Pricing'
                    bgcolor='var(--primary-02)'
                    txtColor='var(--secondary-02)'
                />
                <h2 className="services-pricing-title">Our Pricing Plan</h2>
                <div className="services-pricing-box d-f">
                    <div className="services-pricing-item">
                        <div className="pricing-item-main">
                            <div className="pricing-item-title">Basic Plan</div>
                            <p className="pricing-item-desc">
                                The argument in favor of using to
                                filler text goes something.
                            </p>
                            <div className="pricing-item-rate d-f align-center">
                                <div className="pricing-item-price">$35</div>
                                <AboveText
                                    content='Monthly'
                                    bgcolor='#3E3E3E'
                                    txtColor='var(--secondary-02)'
                                />
                            </div>
                        </div>
                        <ul className="pricing-item-points">
                            <li>24/7 system monitoring</li>
                            <li>Security management</li>
                            <li>Secure finance backup</li>
                            <li>Remote support</li>
                        </ul>
                        <button className='pricing-item-get'>Get This Plan</button>
                    </div>
                    <div className="services-pricing-item">
                        <div className="pricing-item-main">
                            <div className="pricing-item-title">Standard Plan</div>
                            <p className="pricing-item-desc">
                                The argument in favor of using to
                                filler text goes something.
                            </p>
                            <div className="pricing-item-rate d-f align-center">
                                <div className="pricing-item-price">$56</div>
                                <AboveText
                                    content='Monthly'
                                    bgcolor='var(--primary-02)'
                                    txtColor='var(--secondary-02)'
                                />
                            </div>
                        </div>
                        <ul className="pricing-item-points">
                            <li>24/7 system monitoring</li>
                            <li>Security management</li>
                            <li>Secure finance backup</li>
                            <li>Remote support</li>
                        </ul>
                        <button className='pricing-item-get'>Get This Plan</button>
                    </div>
                    <div className="services-pricing-item">
                        <div className="pricing-item-main">
                            <div className="pricing-item-title">Premium Plan</div>
                            <p className="pricing-item-desc">
                                The argument in favor of using to
                                filler text goes something.
                            </p>
                            <div className="pricing-item-rate d-f align-center">
                                <div className="pricing-item-price">$75</div>
                                <AboveText
                                    content='Monthly'
                                    bgcolor='#3E3E3E'
                                    txtColor='var(--secondary-02)'
                                />
                            </div>
                        </div>
                        <ul className="pricing-item-points">
                            <li>24/7 system monitoring</li>
                            <li>Security management</li>
                            <li>Secure finance backup</li>
                            <li>Remote support</li>
                        </ul>
                        <button className='pricing-item-get'>Get This Plan</button>
                    </div>
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

export default Services