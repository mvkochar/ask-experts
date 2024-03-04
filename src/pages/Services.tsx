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
        </main>
    )
}

export default Services