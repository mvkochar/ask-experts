import React from 'react'
import './Team.css'
import AboveText from '../components/AboveText/AboveText'
import TeamMember from '../components/TeamMember/TeamMember'

const Team = () => {
    return (
        <main>
            <div className="team-main">
                <div className="team-main-info">
                    <AboveText content='Team' />
                    <h1 className="team-main-title">The Consultors</h1>
                </div>
            </div>
            <div className="team-meet">
                <div className='d-f jc-sb'>
                    <div>
                        <h2 className="team-meet-title">Meet Our Great Team</h2>
                        <p className="team-meet-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.
                        </p>
                    </div>
                    <button className='team-meet-join'>Join our team</button>
                </div>
                <div className="team-meet-box d-f">
                    <TeamMember
                        id={0}
                        image='images/team1.png'
                        position='CEO at Company'
                        bgColor='var(--primary-01)'
                        txtColor='var(--primary-03)'
                        fName='Sarah Jasmine'
                        desc='Leverage agile frameworks to provide a robust synopsis for high level overviews.'
                    />
                    <TeamMember
                        id={1}
                        image='images/team2.png'
                        position='Manager'
                        fName='John Carter'
                        desc='Leverage agile frameworks to provide a robust synopsis for high level overviews.'
                    />
                    <TeamMember
                        id={2}
                        image='images/team3.png'
                        position='CEO at Company'
                        fName='Daisy Stella'
                        desc='Leverage agile frameworks to provide a robust synopsis for high level overviews.'
                    />
                    <TeamMember
                        id={3}
                        image='images/team4.png'
                        position='CEO at Company'
                        fName='Maya Elizabeth'
                        desc='Leverage agile frameworks to provide a robust synopsis for high level overviews.'
                    />
                    <TeamMember
                        id={4}
                        image='images/team5.png'
                        position='CEO at Company'
                        fName='Ryan Jackson'
                        desc='Leverage agile frameworks to provide a robust synopsis for high level overviews.'
                    />
                    <TeamMember
                        id={5}
                        image='images/team6.png'
                        position='CEO at Company'
                        fName='Lilly Victoria'
                        desc='Leverage agile frameworks to provide a robust synopsis for high level overviews.'
                    />
                </div>
            </div>
            <div className="team-contact">
                <AboveText
                    content='Contact'
                    bgcolor='#323232'
                    txtColor='var(--secondary-02)'
                />
                <h2 className="team-contact-title">Ready To Talk?</h2>
                <p className="team-contact-desc">
                    Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.
                    Massa placerat duis ultricies lacus sed turpis. Pellentesque  pellentesque habitant morbi tristique.
                </p>
                <form action="" className='team-contact-fm'>
                    <input type="email" name='email' placeholder='your mail address' />
                    <button type='button'>Send Message</button>
                </form>
            </div>
        </main>
    )
}

export default Team