import React from 'react'
import './ServiceSingle.css'
import AboveText from '../components/AboveText/AboveText'
import FaqItem from '../components/FaqItem/FaqItem'



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
                        <div>
                            <svg width="34" height="27" viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.6923 0.0632324H1.30769C0.960871 0.0632324 0.628254 0.200197 0.383014 0.443994C0.137774 0.687791 0 1.01845 0 1.36323V23.4632C0 24.1528 0.275549 24.8141 0.766028 25.3017C1.25651 25.7893 1.92174 26.0632 2.61538 26.0632H31.3846C32.0783 26.0632 32.7435 25.7893 33.234 25.3017C33.7244 24.8141 34 24.1528 34 23.4632V1.36323C34 1.01845 33.8622 0.687791 33.617 0.443994C33.3717 0.200197 33.0391 0.0632324 32.6923 0.0632324ZM2.61538 10.4632H9.15385V15.6632H2.61538V10.4632ZM11.7692 10.4632H31.3846V15.6632H11.7692V10.4632ZM2.61538 18.2632H9.15385V23.4632H2.61538V18.2632ZM31.3846 23.4632H11.7692V18.2632H31.3846V23.4632Z" fill="#181818" />
                            </svg>
                        </div>
                        <div className="content-item-title">The Balance Sheet</div>
                        <p className="content-item-desc">
                            The Balance Sheet is a summary of the assets and liabilities and equity
                            of a business at a specific point of time.
                        </p>
                    </div>
                    <div className="service-content-item">
                        <div>
                            <svg width="38" height="27" viewBox="0 0 38 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M35.2857 0.0632324H2.71429C1.99441 0.0632324 1.30402 0.337331 0.794996 0.825231C0.285968 1.31313 0 1.97486 0 2.66486V8.01445V23.4616C0 24.1516 0.285968 24.8133 0.794996 25.3012C1.30402 25.7891 1.99441 26.0632 2.71429 26.0632H35.2857C36.0056 26.0632 36.696 25.7891 37.205 25.3012C37.714 24.8133 38 24.1516 38 23.4616V2.66486C38 1.97486 37.714 1.31313 37.205 0.825231C36.696 0.337331 36.0056 0.0632324 35.2857 0.0632324ZM20.3571 20.8762H17.6429C17.2829 20.8762 16.9377 20.7392 16.6832 20.4952C16.4287 20.2513 16.2857 19.9204 16.2857 19.5754C16.2857 19.2304 16.4287 18.8996 16.6832 18.6556C16.9377 18.4117 17.2829 18.2746 17.6429 18.2746H20.3571C20.7171 18.2746 21.0623 18.4117 21.3168 18.6556C21.5713 18.8996 21.7143 19.2304 21.7143 19.5754C21.7143 19.9204 21.5713 20.2513 21.3168 20.4952C21.0623 20.7392 20.7171 20.8762 20.3571 20.8762ZM31.2143 20.8762H25.7857C25.4258 20.8762 25.0806 20.7392 24.8261 20.4952C24.5716 20.2513 24.4286 19.9204 24.4286 19.5754C24.4286 19.2304 24.5716 18.8996 24.8261 18.6556C25.0806 18.4117 25.4258 18.2746 25.7857 18.2746H31.2143C31.5742 18.2746 31.9194 18.4117 32.1739 18.6556C32.4284 18.8996 32.5714 19.2304 32.5714 19.5754C32.5714 19.9204 32.4284 20.2513 32.1739 20.4952C31.9194 20.7392 31.5742 20.8762 31.2143 20.8762ZM2.71429 6.71364V2.66486H35.2857V6.71364H2.71429Z" fill="#181818" />
                            </svg>
                        </div>
                        <div className="content-item-title">Income Statement</div>
                        <p className="content-item-desc">
                            The Income (Profit and Loss) Statement, commonly referred to as the P&L statement,
                            summarizes the revenue and expenses for a specific time period (one month, one quarter, one year, etc.)
                        </p>
                    </div>
                    <div className="service-content-item">
                        <div>
                            <svg width="36" height="31" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36 28.8133C36 29.1448 35.8736 29.4627 35.6485 29.6971C35.4235 29.9315 35.1183 30.0632 34.8 30.0632H1.2C0.88174 30.0632 0.576515 29.9315 0.351472 29.6971C0.126428 29.4627 0 29.1448 0 28.8133C0 28.4818 0.126428 28.1639 0.351472 27.9294C0.576515 27.695 0.88174 27.5633 1.2 27.5633H34.8C35.1183 27.5633 35.4235 27.695 35.6485 27.9294C35.8736 28.1639 36 28.4818 36 28.8133ZM1.245 11.6578C1.17349 11.3959 1.18607 11.1168 1.28084 10.8629C1.3756 10.6091 1.54737 10.3945 1.77 10.2517L17.37 0.252124C17.5588 0.128702 17.7771 0.0632324 18 0.0632324C18.2229 0.0632324 18.4412 0.128702 18.63 0.252124L34.23 10.2517C34.4517 10.3947 34.6225 10.6091 34.7168 10.8624C34.811 11.1157 34.8235 11.394 34.7523 11.6553C34.6811 11.9167 34.5301 12.1467 34.3222 12.3107C34.1143 12.4746 33.8608 12.5636 33.6 12.564H30V22.5636H32.4C32.7183 22.5636 33.0235 22.6953 33.2485 22.9297C33.4736 23.1641 33.6 23.482 33.6 23.8135C33.6 24.145 33.4736 24.463 33.2485 24.6974C33.0235 24.9318 32.7183 25.0635 32.4 25.0635H3.6C3.28174 25.0635 2.97652 24.9318 2.75147 24.6974C2.52643 24.463 2.4 24.145 2.4 23.8135C2.4 23.482 2.52643 23.1641 2.75147 22.9297C2.97652 22.6953 3.28174 22.5636 3.6 22.5636H6V12.564H2.4C2.13907 12.5643 1.88516 12.476 1.67674 12.3125C1.46832 12.149 1.31676 11.9192 1.245 11.6578ZM20.4 21.3136C20.4 21.6451 20.5264 21.9631 20.7515 22.1975C20.9765 22.4319 21.2817 22.5636 21.6 22.5636C21.9183 22.5636 22.2235 22.4319 22.4485 22.1975C22.6736 21.9631 22.8 21.6451 22.8 21.3136V13.814C22.8 13.4825 22.6736 13.1646 22.4485 12.9302C22.2235 12.6957 21.9183 12.564 21.6 12.564C21.2817 12.564 20.9765 12.6957 20.7515 12.9302C20.5264 13.1646 20.4 13.4825 20.4 13.814V21.3136ZM13.2 21.3136C13.2 21.6451 13.3264 21.9631 13.5515 22.1975C13.7765 22.4319 14.0817 22.5636 14.4 22.5636C14.7183 22.5636 15.0235 22.4319 15.2485 22.1975C15.4736 21.9631 15.6 21.6451 15.6 21.3136V13.814C15.6 13.4825 15.4736 13.1646 15.2485 12.9302C15.0235 12.6957 14.7183 12.564 14.4 12.564C14.0817 12.564 13.7765 12.6957 13.5515 12.9302C13.3264 13.1646 13.2 13.4825 13.2 13.814V21.3136Z" fill="#181818" />
                            </svg>
                        </div>
                        <div className="content-item-title">Financial Plan</div>
                        <p className="content-item-desc">
                            Keep your information current and review the documents on a regular basis
                            (monthly or more often if needed). Review them with key individuals within your company.
                        </p>
                    </div>
                    <div className="service-content-item">
                        <div>
                            <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 0.0632324C15.2422 0.0632324 11.5687 1.17756 8.44417 3.26531C5.31964 5.35306 2.88436 8.32045 1.4463 11.7922C0.0082324 15.264 -0.368031 19.0843 0.365088 22.7699C1.09821 26.4556 2.90778 29.8411 5.56498 32.4983C8.22218 35.1555 11.6077 36.965 15.2933 37.6981C18.9789 38.4313 22.7992 38.055 26.271 36.6169C29.7428 35.1789 32.7102 32.7436 34.7979 29.6191C36.8857 26.4945 38 22.8211 38 19.0632C37.9903 14.0271 35.9855 9.19997 32.4244 5.63887C28.8633 2.07777 24.0361 0.0728895 19 0.0632324ZM21.1923 27.8325H20.4615V29.294C20.4615 29.6816 20.3076 30.0534 20.0335 30.3275C19.7594 30.6016 19.3876 30.7555 19 30.7555C18.6124 30.7555 18.2406 30.6016 17.9665 30.3275C17.6924 30.0534 17.5385 29.6816 17.5385 29.294V27.8325H14.6154C14.2278 27.8325 13.856 27.6785 13.5819 27.4044C13.3078 27.1303 13.1539 26.7585 13.1539 26.3709C13.1539 25.9833 13.3078 25.6115 13.5819 25.3375C13.856 25.0634 14.2278 24.9094 14.6154 24.9094H21.1923C21.7737 24.9094 22.3314 24.6784 22.7425 24.2673C23.1536 23.8561 23.3846 23.2985 23.3846 22.7171C23.3846 22.1356 23.1536 21.578 22.7425 21.1669C22.3314 20.7557 21.7737 20.5248 21.1923 20.5248H16.8077C15.451 20.5248 14.1499 19.9858 13.1906 19.0265C12.2313 18.0672 11.6923 16.7661 11.6923 15.4094C11.6923 14.0527 12.2313 12.7516 13.1906 11.7923C14.1499 10.8329 15.451 10.294 16.8077 10.294H17.5385V8.83246C17.5385 8.44484 17.6924 8.07309 17.9665 7.799C18.2406 7.52491 18.6124 7.37092 19 7.37092C19.3876 7.37092 19.7594 7.52491 20.0335 7.799C20.3076 8.07309 20.4615 8.44484 20.4615 8.83246V10.294H23.3846C23.7722 10.294 24.144 10.448 24.4181 10.7221C24.6922 10.9962 24.8462 11.3679 24.8462 11.7555C24.8462 12.1432 24.6922 12.5149 24.4181 12.789C24.144 13.0631 23.7722 13.2171 23.3846 13.2171H16.8077C16.2263 13.2171 15.6686 13.4481 15.2575 13.8592C14.8464 14.2703 14.6154 14.8279 14.6154 15.4094C14.6154 15.9908 14.8464 16.5484 15.2575 16.9596C15.6686 17.3707 16.2263 17.6017 16.8077 17.6017H21.1923C22.549 17.6017 23.8501 18.1406 24.8094 19.1C25.7688 20.0593 26.3077 21.3604 26.3077 22.7171C26.3077 24.0738 25.7688 25.3749 24.8094 26.3342C23.8501 27.2935 22.549 27.8325 21.1923 27.8325Z" fill="#181818" />
                            </svg>
                        </div>
                        <div className="content-item-title">Financial Ratios</div>
                        <p className="content-item-desc">
                            Ratios are useful when comparing your company with the competition on financial
                            performance and also when benchmarking the performance of your company.
                        </p>
                    </div>
                </div>
            </div>
            <div className="service-expect d-f jc-sb">
                <div><img src="images/service-expect.png" alt="service-expect" /></div>
                <div>
                    <AboveText content="We'll work with you" />
                    <h2 className="service-expect-title">What To Expect</h2>
                    <p className="service-expect-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <ul className="service-expect-points">
                        <li>
                            Bring to the table win-win survival strategies to ensure proactive domination.
                            At the end of the day.
                        </li>
                        <li>
                            Capitalize on low hanging fruit to identify a ballpark value added activity
                            to beta test override the digital.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="service-clients d-f jc-sb">
                <div><img src="images/service-client-logo1.svg" alt="service-client-logo1" /></div>
                <div><img src="images/service-client-logo2.svg" alt="service-client-logo2" /></div>
                <div><img src="images/service-client-logo3.svg" alt="service-client-logo3" /></div>
                <div><img src="images/service-client-logo4.svg" alt="service-client-logo4" /></div>
                <div><img src="images/service-client-logo5.svg" alt="service-client-logo5" /></div>
            </div>
            <div className="service-video">
                <AboveText
                    content='Our History'
                    bgcolor='var(--primary-02)'
                    txtColor='var(--secondary-02)'
                />
                <h2 className="service-video-title">Strategy for Every Stage in the Client's Journey</h2>
                <div className="service-video-content">
                    <iframe
                        width="832" height="319"
                        src="https://www.youtube.com/embed/vZE0j_WCRvI?si=TUDq_LcoxK2YJgqQ"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                    </iframe>
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
                <div><img src="images/service-contact.png" alt="service-contact" /></div>
            </div>
            <div className="service-faq">
                <AboveText
                    content='Faq'
                    bgcolor='var(--primary-02)'
                    txtColor='var(--secondary-02)'
                />
                <h2 className="service-faq-title">Customer Questions</h2>
                <div className="service-faq-content d-f">
                    <FaqItem
                        question="What will happen when I’ve sent my application?"
                        answer='Ippsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team and individual achievements.'
                    />
                    <FaqItem
                        question="Can I get a free trial before I purchase?"
                        answer='Ippsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team and individual achievements.'
                    />
                    <FaqItem
                        question="What should I include in my personal statement?"
                        answer='Ippsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team and individual achievements.'
                    />
                    <FaqItem
                        question="Will membership plans be charged automatically?"
                        answer='Ippsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team and individual achievements.'
                    />
                    <FaqItem
                        question="What will happen when I've sent my application?"
                        answer='Ippsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team and individual achievements.'
                    />
                    <FaqItem
                        question="Can I get a free trial before I purchase?"
                        answer='Ippsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team and individual achievements.'
                    />
                </div>
            </div>
        </main>
    )
}

export default ServiceSingle