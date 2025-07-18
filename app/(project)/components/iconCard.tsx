import Image from 'next/image'
import React from 'react'

interface IconCardProps {
  icon: string
  title: string
  description: string
}

export function IconCard(props: IconCardProps) {
  const { icon, title, description } = props

  return (
    <div className="flex flex-col items-center justify-center p-4 ">
      <div className="text-4xl text-yellow-500 mb-12">
        <Image src={icon} alt="Icon" />
      </div>
      <h3 className="text-white text-lg font-bold mb-2.5">{title}</h3>
      <p className="text-white/40 text-center text-lg">{description}</p>
    </div>
  )
}
