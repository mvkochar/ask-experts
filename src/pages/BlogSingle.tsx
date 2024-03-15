import React from 'react'
import { useParams } from 'react-router-dom'
import BlogItemsList from '../components/BlogItemsList/BlogItemsList'
import './BlogSingle.css'
import AboveText from '../components/AboveText/AboveText'

const BlogSingle = () => {
  const { id } = useParams<string>()
  let a = id ? id : '1'
  let index = parseInt(a)

  return (
    <main>
      <div className="blog-single-main"
        style={{ background: `var(--primary-06) url('${BlogItemsList[index].image}') no-repeat`, backgroundSize: "cover" }}>
        <div className="single-main-info">
          <AboveText content={BlogItemsList[index].date} />
          <h1 className="single-main-title">{BlogItemsList[index].title}</h1>
        </div>
      </div>
      {
        index === 0 ?
          <div className="blog-single-content d-f">
            <div>
              <h3 className="content-title">Best Business Consulting Services</h3>
              <p className="content-desc" style={{ marginTop: "15px" }}>
                Bring to the table win-win survival strategies to ensure proactive domination.
                At the end of the day, going forward, a new normal that has evolved from
                generation X is on the runway heading towards a streamlined cloud solution.
                User generated content in real-time will have multiple touchpoints for offshoring.
                Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.
                Override the digital divide with additional clickthroughs from DevOps.
              </p>
              <div style={{ marginTop: "35px" }}><img src="/images/consulting.png" alt="Consulting" /></div>
            </div>
            <div>
              <h3 className="content-title">The Digital Assets For All</h3>
              <p className="content-desc" style={{ marginTop: "14px" }}>
                Appropriately empower dynamic leadership skills after business portals.
                Globally my carminate interactive supply chains with distinctive quality vectors
                global sources services. Uniquely matrix economically sound value through cooperative technology.
                Competently parallel task fully researched data and enterprise process improvements.
              </p>
              <ul className="content-list">
                <li>Dynamically target high-payoff intellectual capital for customized</li>
                <li>Interactively procrastinate high-payoff content</li>
                <li>Credibly reinter mediate backend ideas for cross-platform models</li>
              </ul>
            </div>
            <div className="single-content-quote">
              <div><img src="/images/quote.svg" alt="Quote" /></div>
              <div className="quote-text">
                “The job market of the future will consist of those jobs that robots cannot perform.
                Our blue-collar work is pattern recognition, making sense of what you see. Gardeners
                will still have jobs because every garden is different.”
              </div>
            </div>
            <div>
              <h3 className="content-title">Make real time a wireframes services</h3>
              <p className="contnet-desc" style={{marginTop: "14px"}}>
                Collaboratively administrate empowered markets via plug-and-play networks. 
                Dynamically procrastinate B2C users after installed base benefits. 
                Dramatically visualize customer directed convergence without revolutionary ROI.
              </p>
              <ol className="content-list" style={{marginTop: "20px"}}>
                <li>It brings the right people together with all the right information and tools to get work done</li>
                <li>We provide operational efficiency, data security, and flexible scale</li>
                <li>Your best work, together in one package that works seamlessly from your computer</li>
                <li>Delivers the tools you need to save time Improve field performance always</li>
              </ol>
            </div>
          </div>
          : null
      }
      <div className="blog-single-author d-f">
        <div className="single-author-img"><img src={BlogItemsList[index].authorPhoto} alt="Author" /></div>
        <div>
          <div className="single-author-name">{BlogItemsList[index].authorName}</div>
          <div className="single-author-pos">Senior Manager</div>
          <p className="single-author-desc">
            Etiam bibendum interdum sem, in auctor nunc consequat fermentum. Donec vitae elit id lorem laoreet maximus in non mi.
            Mauris tellus urna, fringilla sit amet sodales non, sodales a orci. Pellentesque at lorem porta, accumsan tortor eget,
            interdum ligula.
          </p>
          <div className="single-author-social d-f">
            <div><img src="/images/author-social1.svg" alt="author-social1" /></div>
            <div><img src="/images/author-social2.svg" alt="author-social2" /></div>
            <div><img src="/images/author-social3.svg" alt="author-social3" /></div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BlogSingle