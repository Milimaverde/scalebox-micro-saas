import './globals.css'
import Link from 'next/link'
import { Metadata } from 'next'
import Image from 'next/image'

import screenshot from './screenshot.png'

export const metadata: Metadata = {
  title: 'ScaleBox - Micro SaaS',
  description:
    'ScaleBox é um micro SaaS construído com Next.js, NextAuth e Firebase, focado em escalabilidade e agilidade no desenvolvimento de produtos modernos e eficientes.'
}

export default function Home() {
  return (
    <>
      <header className="flex py-5 gap-5">
        <h3 className="text-white text-2xl font-semibold">ScaleBox</h3>
      </header>
      <section className="mt-16">
        <div className="flex flex-col gap-10 items-center">
          <h1 className="text-white text-center text-4xl font-semibold leading-normal ">
            SaaS Landing Page Template
          </h1>
          <p className="text-lg text-center text-white/40 leading-8 ">
            ScaleBox is a micro SaaS template built with Next.js, NextAuth and
            Firebase, focused on scalability and agility in the development of
            modern and efficient products.
          </p>
          <Link href="login">
            <button
              type="submit"
              className="rounded-2xl px-8 py-4 bg-buttonyellow text-midnight text-xl cursor-pointer"
            >
              Ver Aplicação
            </button>
          </Link>
        </div>
        <div className="flex justify-center rounded-2xl mt-10 bg-text600">
          <Image
            src={screenshot}
            alt="ScaleBox Template"
            width={500}
            height={500}
          ></Image>
        </div>
      </section>
    </>
  )
}
