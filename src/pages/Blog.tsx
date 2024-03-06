import React from 'react'
import './Blog.css'
import AboveText from '../components/AboveText/AboveText'
import BlogItem from '../components/BlogItem/BlogItem'

const Blog = () => {
    return (
        <main>
            <div className="blog-main">
                <div className="blog-main-info">
                    <AboveText content='Blog' />
                    <h1 className="blog-main-title">Latest Blogs & News</h1>
                </div>
            </div>
            <div className="home-blog blog-news">
                <div className="d-f jc-sb align-center">
                    <div>
                        <AboveText
                            content='Blog'
                            bgcolor='var(--primary-02)'
                            txtColor='var(--secondary-02)'
                        />
                        <h2 className="home-blog-title">Take a look at our latest <br /> articles & resources</h2>
                    </div>
                    <a href="" className='home-blog-more'>More News</a>
                </div>
                <div className="home-blog-content d-f jc-sb">
                    <BlogItem
                        image='images/blog1.png'
                        title='Consulting Fees Study 2019 (And How To Raise Your Rates)'
                        desc='Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.'
                        authorPhoto='images/blog1-author.png'
                        authorName='John Carter'
                        date='September 1, 2022'
                    />
                    <BlogItem
                        image='images/blog2.png'
                        title='What is growth hacking and how to apply it to your startup'
                        desc='Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.'
                        authorPhoto='images/blog2-author.png'
                        authorName='Nayra Melson'
                        date='September 1, 2022'
                    />
                    <BlogItem
                        image='images/blog3.png'
                        title='Five Steps to Implement Motivation in Management'
                        desc='Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.'
                        authorPhoto='images/blog1-author.png'
                        authorName='John Carter'
                        date='September 1, 2022'
                    />
                    <BlogItem
                        image='images/blog4.png'
                        title='Team Identifiers, Benefits, and How to Build One that Works'
                        desc='Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.'
                        authorPhoto='images/blog2-author.png'
                        authorName='Nayra Melson'
                        date='September 1, 2022'
                    />
                    <BlogItem
                        image='images/blog5.png'
                        title='Five Steps to Implement Motivation in Management'
                        desc='Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.'
                        authorPhoto='images/blog1-author.png'
                        authorName='John Carter'
                        date='September 1, 2022'
                    />
                    <BlogItem
                        image='images/blog6.png'
                        title='A Guide on What to Bring on the First Day of Work'
                        desc='Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.'
                        authorPhoto='images/blog2-author.png'
                        authorName='Nayra Melson'
                        date='September 1, 2022'
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

export default Blog