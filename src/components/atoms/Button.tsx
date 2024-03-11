import React from 'react'
import { RiLoader2Fill } from 'react-icons/ri'

type Props = {
  title?: string
  bg?: string
  textColor?: string
  onClick?: () => void
  isLoading?: boolean
}

const Button = ({
  title,
  bg = "bg-gradient-to-r from-blue-500 to-purple-700",
  textColor = "text-white",
  onClick,
  isLoading
}: Props) => {
  return (
    <button onClick={(e) => {
      e.preventDefault();
      onClick && onClick()
    }} className={`text-sm font-bold ${bg} py-2 px-8 flex items-center justify-center rounded-lg ${textColor}`}>
      {
        isLoading ?
          <RiLoader2Fill className="animate-spin" /> :
          title
      }
    </button>
  )
}

export default Button