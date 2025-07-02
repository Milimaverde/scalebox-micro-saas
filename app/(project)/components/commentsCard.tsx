import Image from 'next/image'
import React from 'react'

export function CommentsCard({
  image,
  descriptionImage,
  name,
  comments
 
}: {
  image: string
  descriptionImage: string
  name: string
  comments: string
  
}
) {
  return (
    <div className="bg-purple-200 px-8 pb-16 rounded-xl shadow-md flex flex-col items-center text-center">
      <p className="text-2xl/10 py-16">{comments}</p>
      <div className="">
        <Image
          src={image}
          alt={descriptionImage}
          width={50}
          height={50}
          className="rounded-full"
          />
          <div>
          <h4>{name}</h4>
          <span>{descriptionImage}</span>
          </div>
      </div>

      
    </div>
  );
}