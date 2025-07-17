import './globals.css'
import Link from 'next/link'
import { Metadata } from 'next'
import Image from 'next/image'

import { IconCard } from './components/iconCard'
import { CommentsCard } from './components/commentsCard'
import { Button } from './components/buttons'

import cardsicon from './svg/cardsicon.svg'
import purseicon from './svg/purseicon.svg'
import coinicon from './svg/coinicon.svg'

import screenshot from './images/screenshot.png'
import logosdivider from './images/logosdividermobile.png'
import imgdashboard from './images/imagedash.png'
import gif from './images/GIF.png'

export const metadata: Metadata = {
  title: 'ScaleBox - Micro SaaS',
  description:
    'ScaleBox é um micro SaaS construído com Next.js, NextAuth e Firebase, focado em escalabilidade e agilidade no desenvolvimento de produtos modernos e eficientes.'
}

export default function Home() {
  return (
    <>
      <header className="flex py-5">
        <h3 className="text-2xl font-semibold text-white">ScaleBox</h3>
      </header>
      <section className="my-16">
        <div className="flex flex-col gap-10 items-center">
          <h1 className="text-4xl font-semibold text-center  leading-normal text-white ">
            SaaS Landing Page Template
          </h1>
          <p className="text-lg text-center leading-8 text-white/40">
            ScaleBox is a micro SaaS template built with Next.js, NextAuth and
            Firebase, focused on scalability and agility in the development of
            modern and efficient products.
          </p>
          <Link href="login">
            <Button className='py-4' color='yellow'>Ver Apilicação</Button>
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
      <div className="flex w-full justify-center border-y-1 border-white/20 py-12">
        <Image
          src={logosdivider}
          alt="ScaleBox Logos Divider"
          width={500}
          height={500}
        ></Image>
      </div>
      <div className="flex justify-center rounded-md my-14 bg-yellow-100">
        <Image
          src={imgdashboard}
          alt="ScaleBox Template"
          width={500}
          height={500}
        ></Image>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <IconCard
          icon={cardsicon}
          title="Scalability"
          description="Built with Next.js and Firebase for high performance."
        />
        <IconCard
          icon={coinicon}
          title="No payment fee"
          description="Transfer your payment all over the world with no payment fee."
        />
        <IconCard
          icon={purseicon}
          title="All in one place"
          description="The right place to keep your credit and debit cards, boarding passes & more."
        />
      </section>
      <section className="flex flex-col items-center mt-16">
        <CommentsCard
          image={"https://github.com/diego3g.png"}
          name="Alice Johnson"
          comments="“Wallet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don't need to worry because it's all in one place! thanks!”"
        />
       
      </section>
      <section className="mt-16 md:mt-32 mt:between mt:flex items-center mt:justify-between mb-16">
        <div className="flex flex-col gap-10 items-center">
          <h1 className="text-white text-center text-4xl font-semibold leading-normal">
            Questions? <br/>Let’s talk 
          </h1>
          <p className="justify-center text-lg text-center text-white/40 leading-8 ">
            Contact us through our 24/7 live chat. <br/>We’re always happy to help!
          </p>
          <Link href="login">
            <Button className='py-4' color='yellow'>Ver Apilicação</Button>
          </Link>
        </div>
        <div className="flex justify-center rounded-2xl mt-10 bg-text600">
          <Image
            src={gif}
            alt="ScaleBox Template"
            width={500}
            height={500}
          ></Image>
        </div>
      </section>
      <footer className="border-t-1 border-white/20 py-12">
      <h3 className="text-2xl font-semibold text-white mb-7.5">Wallet</h3>
        <div className="">
          <span className="mb-2.5 text-lg text-white">Updates right to your Inbox</span>
          <input
            type="email"
            placeholder="Enter your email"
            className="mb-5 px-4 py-2 rounded-xl bg-text600 text-white w-80"
          />
          <Button className="w-full py-2 rounded-2xl" color='purple'>Subscribe</Button>
        </div>
        <div className='flex flex-col gap-5 text-white text-lg font-bold mt-10'>
          <Link href="/">
            Terms of Use
          </Link>
          <Link href="/">
            Cookies Policy
          </Link>
          <Link href="/">
            Cookies Policy
          </Link>
          <span>© 2023 ScaleBox.</span>
        </div>
      </footer>
    </>
  )
}
