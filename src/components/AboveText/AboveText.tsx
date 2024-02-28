import React from 'react'
import './AboveText.css'

type AboveTextProps = {
  content: string
  bgcolor?: string
  txtColor?: string
}

const AboveText = ({ content, bgcolor = "var(--primary-01)", txtColor = "var(--primary-03)" }: AboveTextProps) => {
  return (
    <div className='above-text' style={{ backgroundColor: bgcolor, color: txtColor }}>{content}</div>
  )
}

export default AboveText