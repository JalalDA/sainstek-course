import React from 'react'

type Props = {
    title?:string
    bg?:string
    textColor?:string
    onClick?:()=>void
}

const Button = ({
    title,
    bg = "bg-gradient-to-r from-blue-500 to-purple-700",
    textColor = "text-white",
    onClick
}: Props) => {
  return (
    <button onClick={onClick} className={`text-sm font-bold ${bg} py-2 px-8 rounded-lg ${textColor}`}>{title}</button>
  )
}

export default Button