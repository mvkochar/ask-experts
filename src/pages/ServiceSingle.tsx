import React from 'react'
import './ServiceSingle.css'
import AboveText from '../components/AboveText/AboveText'

const ServiceSingle = () => {
    return (
        <main>
            <div className="service-main">
                <div className="service-main-info">
                    <AboveText content='Service Single' />
                    <h1 className="service-main-title">Services Details</h1>
                </div>
            </div>
            <div className="service-content">
                <div className="d-f jc-sb">
                    <div>
                        <img src="images/service-title-icon.svg" alt="Service Icon" />
                        <h2 className="service-content-title">Financial Projections</h2>
                        <p className="service-content-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="service-content-actions d-f">
                        <button><img src="images/prev1.svg" alt="Previous" /></button>
                        <button><img src="images/next1.svg" alt="Next" /></button>
                    </div>
                </div>
                <div className="service-content-box d-f">
                    <div className="service-content-item">
                        <div><img src="images/service-content-item1.svg" alt="Service Content Icon" /></div>
                        <div className="content-item-title">The Balance Sheet</div>
                        <p className="content-item-desc">
                            The Balance Sheet is a summary of the assets and liabilities and equity
                            of a business at a specific point of time.
                        </p>
                    </div>
                    <div className="service-content-item">
                        <div><img src="images/service-content-item2.svg" alt="Service Content Icon" /></div>
                        <div className="content-item-title">Income Statement</div>
                        <p className="content-item-desc">
                            The Income (Profit and Loss) Statement, commonly referred to as the P&L statement,
                            summarizes the revenue and expenses for a specific time period (one month, one quarter, one year, etc.)
                        </p>
                    </div>
                    <div className="service-content-item">
                        <div><img src="images/service-content-item3.svg" alt="Service Content Icon" /></div>
                        <div className="content-item-title">Financial Plan</div>
                        <p className="content-item-desc">
                            Keep your information current and review the documents on a regular basis
                            (monthly or more often if needed). Review them with key individuals within your company.
                        </p>
                    </div>
                    <div className="service-content-item">
                        <div><img src="images/service-content-item4.svg" alt="Service Content Icon" /></div>
                        <div className="content-item-title">Financial Ratios</div>
                        <p className="content-item-desc">
                            Ratios are useful when comparing your company with the competition on financial 
                            performance and also when benchmarking the performance of your company.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ServiceSingle