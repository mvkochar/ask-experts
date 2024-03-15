import React from 'react'
import './BlogItem.css'
import { Link } from 'react-router-dom'

type BlogItemProps = {
    id?: number
    image: string
    title: string
    desc: string
    authorPhoto: string
    authorName: string
    date: string
}

const BlogItem = ({id=0, image, title, desc, authorPhoto, authorName, date}:BlogItemProps) => {
  return (
    <div className='blog-item'>
        <div><img src={image} alt="blog-image" /></div>
        <h5 className="blog-item-title">{title}</h5>
        <p className="blog-item-desc">{desc}</p>
        <div className="blog-item-info d-f align-center">
            <div><img src={authorPhoto} alt="Author" /></div>
            <div className="blog-item-author">{authorName}</div>
            <div className="blog-item-divider"></div>
            <div className="blog-item-date">{date}</div>
            <Link to= {`/blog-single/${id}`}className="blog-item-more">Read More</Link>
        </div>
    </div>
  )
}

export default BlogItem