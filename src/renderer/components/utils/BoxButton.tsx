import React from 'react'

type Props = {
  text: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const BoxButton: React.FC<Props> = props => {
  const { text, onClick } = props

  // TODO: add remove shadow after click
  return (
    <button
      onClick={onClick}
      className="bg-pink-7 py-1 px-4 rounded-lg hover:shadow-lg"
    >
      <span className="font-sans text-white font-bold">{text}</span>
    </button>
  )
}

export default BoxButton
