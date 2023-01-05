import React from 'react'

type Props = {
  placeholder: string
}

const BoxInput: React.FC<Props> = props => {
  const { placeholder } = props

  return (
    <input
      className="bg-white bg-opacity-10 p-1 w-60 rounded-md focus:outline-none text-gray-10"
      placeholder={placeholder}
    />
  )
}

export default BoxInput
