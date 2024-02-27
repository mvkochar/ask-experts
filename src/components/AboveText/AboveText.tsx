import React from 'react'
import './AboveText.css'

type AboveTextProps = {
    content: string
}

const AboveText = ({content}:AboveTextProps) => {
  return (
    <div className='above-text'>{content}</div>
  )
}

export default AboveText