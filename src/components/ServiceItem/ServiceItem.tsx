import React from 'react'
import "./ServiceItem.css"
import { Link } from 'react-router-dom'

type ServiceItemProps = {
    image: string
    title: string
    desc: string
}

const ServiceItem = ({image, title, desc}:ServiceItemProps) => {
  return (
    <div className='service-item d-f jc-sb'>
        <div> <Link to='/service-single'><img src={image} alt="service-img" /></Link> </div>
        <div className="service-item-title">{title}</div>
        <p className="service-item-desc">{desc}</p>
    </div>
  )
}

export default ServiceItem