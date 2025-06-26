import Image from 'next/image'
import React from 'react'

export function IconCard({
  icon,
  title,
  description
}: {
  icon: string
  title: string
  description: string
}) {
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
// Usage example:
// <IconCard
//   icon={<YourIconComponent />}
//   title="Card Title"
//   description="Card Description"
// />
// This component can be used to create a card with an icon, title, and description.
// You can customize the styles and structure as needed.
