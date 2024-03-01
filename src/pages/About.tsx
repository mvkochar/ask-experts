import React from 'react'
import AboveText from '../components/AboveText/AboveText'
import './About.css'

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
    </main>
  )
}

export default About