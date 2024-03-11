import React from 'react'
import './Licenses.css'
import AboveText from '../components/AboveText/AboveText'

const Licenses = () => {
    return (
        <main>
            <div className="licenses-main">
                <div className="licenses-main-info">
                    <AboveText content='Licenses' />
                    <h1 className="licenses-main-title">All asset's Licenses</h1>
                </div>
            </div>
            <div className="licenses-content d-f">
                <div className='d-f jc-sb'>
                    <h2 className="licenses-content-title">Icon & Graphics</h2>
                    <div>
                        <p className="licenses-content-desc">
                            All graphical assets in this template are licensed for personal and commercial use.
                            If you'd like to use a specific asset, please check the license below.
                        </p>
                        <p className="licenses-content-desc" style={{ marginTop: "22px" }}>
                            The iconography used in this Template are licensed for free personal and commercial use.
                            If you'd like to use any specific Icon, you can check the licenses and download the images
                            for free on phosphoricons.
                        </p>
                        <div className="licenses-content-info"><span>Phosphor Icon:</span> Licenses</div>
                    </div>
                </div>
                <div className='d-f jc-sb'>
                    <h2 className="licenses-content-title">Photography</h2>
                    <div>
                        <p className="licenses-content-desc">
                            All images used in the PrimeChat Webflow Template are licensed for free personal and commercial use.
                            If you'd like to use any specific image, you can check the licenses and download the images for free on.
                        </p>
                        <div className="licenses-content-info"><span>Pexels:</span> Licenses</div>
                        <p className="licenses-content-desc" style={{ marginTop: "16px" }}>
                            Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10,
                            Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17, Image 18, Image 19,
                            Image 20, Image 21, Image 22, Image 23, Image 24, Image 25
                        </p>
                        <div className="licenses-content-info"><span>Unplash:</span> Licenses</div>
                        <p className="licenses-content-desc" style={{ marginTop: "16px" }}>
                            Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10
                        </p>
                    </div>
                </div>
                <div className="d-f jc-sb">
                    <h2 className="licenses-content-title">Font</h2>
                    <p className="licenses-content-desc" style={{marginTop: "12px"}}>
                        Consultalk template uses free licensed <span>Google Fonts</span>. 
                        Please check <span>Cabin</span> and <span>Lato</span> 
                    </p>
                </div>
            </div>
            <div className="contact-newsletter d-f jc-sb align-center" style={{marginBottom: "150px"}}>
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

export default Licenses