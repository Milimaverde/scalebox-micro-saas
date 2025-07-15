import Image from 'next/image'
import React from 'react'

import star from '../svg/star.svg'

export function CommentsCard({
  image,
  name,
  comments
 
}: {
  image: string
  name: string
  comments: string
  
}
) {
  return (
    <div className="bg-purple-200 px-8 pb-16 rounded-xl shadow-md flex flex-col items-center text-center">
      <p className="text-2xl/10 font-semibold py-16">{comments}</p>
      <div className="flex ">
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