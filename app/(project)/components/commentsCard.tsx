import Image from 'next/image'
import React from 'react'

import star from '../svg/star.svg'

interface CommentsCardProps {
  image: string
  name: string
  comments: string
}

export function CommentsCard(props: CommentsCardProps) {
  const { image, name, comments } = props
  
  return (
    <div className="bg-purple-200 px-8 md:px-16 lg:px-40 pb-16 rounded-xl shadow-md flex flex-col items-center md:items-start text-center w-full">
        <p className="text-2xl/10 text-midnight font-semibold py-16 md:text-left ">{comments}</p>
      <div className="flex">
        <Image
          src={image}
          alt='estrelas'
          width={50}
          height={50}
          className="rounded-full"
          />
          <div className="flex flex-col items-start pl-5">
          <h4 className="text-lg text-midnight/40 ">{name}</h4>
          <span className="flex flex-nowrap gap-1 mt-1">
            <Image src={star} alt="Icon"/>
            <Image src={star} alt="Icon"/>
            <Image src={star} alt="Icon"/>
            <Image src={star} alt="Icon"/>
            <Image src={star} alt="Icon"/>
          </span>
          </div>
      </div>

      
    </div>
  );
}