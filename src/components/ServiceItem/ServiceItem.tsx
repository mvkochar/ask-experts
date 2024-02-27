import React from 'react'
import "./ServiceItem.css"

type ServiceItemProps = {
    image: string
    title: string
    desc: string
}

const ServiceItem = ({image, title, desc}:ServiceItemProps) => {
  return (
    <div className='service-item d-f jc-sb'>
        <div><img src={image} alt="service-img" /></div>
        <div className="service-item-title">{title}</div>
        <p className="service-item-desc">{desc}</p>
    </div>
  )
}

export default ServiceItem