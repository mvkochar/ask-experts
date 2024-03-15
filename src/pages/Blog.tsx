import React from 'react'
import './Blog.css'
import AboveText from '../components/AboveText/AboveText'
import BlogItem from '../components/BlogItem/BlogItem'
import BlogItemsList from '../components/BlogItemsList/BlogItemsList'

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
                   {
                    BlogItemsList.map((blog)=> {
                        return (
                            <BlogItem
                                id={blog.id}
                                image={blog.image}
                                title={blog.title}
                                date={blog.date}
                                desc={blog.desc}
                                authorName={blog.authorName}
                                authorPhoto={blog.authorPhoto}
                            />
                        )
                    })
                   }
                </div>
            </div>
            <div className="team-contact" style={{marginTop: "30px"}}>
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