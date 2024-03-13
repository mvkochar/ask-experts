import React from 'react'
import './TeamMember.css'
import { Link } from 'react-router-dom'

type TeamMemberProps = {
    image: string
    position: string
    bgColor?: string
    txtColor?: string
    fName: string
    desc: string
}

const TeamMember = ({ image, position, bgColor = "#181818", txtColor = "#FFFFFF", fName, desc }: TeamMemberProps) => {
    return (
        <div className='team-member d-f jc-sb'>
            <div className="team-member-main" style={{ background: `url(${image}) no-repeat` }}>
                <div className="team-member-pos" style={{ backgroundColor: bgColor, color: txtColor }}>{position}</div>
            </div>
            <Link to='/team-single' className="team-member-fname">{fName}</Link>
            <p className="team-member-desc">{desc}</p>
            <div className="team-member-social d-f">
                <div><img src="images/instagram.svg" alt="Instagram" /></div>
                <div><img src="images/facebook.svg" alt="Facebook" /></div>
                <div><img src="images/twitter.svg" alt="Twitter" /></div>
            </div>
        </div>
    )
}

export default TeamMember