import React from 'react'

type Props = {
  text: string
}

const BoxButton: React.FC<Props> = props => {
  const { text } = props

  // TODO: add remove shadow after click
  return (
    <button className="bg-pink-7 py-1 px-4 rounded-lg hover:shadow-lg">
      <span className="font-sans text-white font-bold">{text}</span>
    </button>
  )
}

export default BoxButton
