import React from 'react'
import './FaqItem.css'

type FaqItemProps = {
    question: string
    answer: string
}

const FaqItem = ({question, answer}:FaqItemProps) => {
    const [answerView, setAnswerView] = React.useState(false)
     
    const handleAnswerView = ()=> {
        setAnswerView((prevState)=> {
            return (
                !prevState
            )
        })
    }  
  return (
    <div className='faq-item'>
        <div className="d-f jc-sb align-center">
            <div className="faq-item-question">{question}</div>
            <button className='faq-item-btn' onClick={handleAnswerView}>{answerView? '-' : '+' }</button>
        </div>
        <p className={answerView ? "faq-item-answer" : "d-n" }>{answer}</p>
    </div>
  )
}

export default FaqItem