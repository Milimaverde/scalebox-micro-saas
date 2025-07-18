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

import imagedash from './images/imagedash.png'
import logosdividermobile from './svg/logosdividermobile.svg'
import logosdividerweb from './svg/logosdividerweb.svg'
import imgdashboard from './images/imgdashboard.gif'
import imgwallet from './images/imgwallet.gif'

export const metadata: Metadata = {
  title: 'ScaleBox - Micro SaaS',
  description:
    'ScaleBox é um micro SaaS construído com Next.js, NextAuth e Firebase, focado em escalabilidade e agilidade no desenvolvimento de produtos modernos e eficientes.'
}

export default function Home() {
  return (
    <>
      <header className="flex py-5 justify-between">
        <h3 className="text-2xl font-semibold text-white">ScaleBox</h3>
          <Link href="login">
            <Button className='py-3 px-6 hidden sm:block' color='purple' hoverColor='hoverpurple'>Login</Button>
          </Link>
      </header>
      <div className="md:max-w-5xl md:justify-center md:mx-auto">
        <section className="my-16 md:flex md:items-center md:justify-between md:flex-row md:gap-10">
          <div className="flex flex-col gap-10 md:gap-5 lg:gap-10 items-center md:items-start md:max-w-2/4 md:content-between">
            <h1 className=" font-semibold text-center text-4xl md:text-start lg:text-6xl leading-normal text-white ">
              SaaS Landing Page Template
            </h1>
            <p className="text-lg text-center md:text-start leading-8 text-white/40">
              ScaleBox é um micro SaaS focado em escalabilidade e agilidade no desenvolvimento de produtos modernos e eficientes
            </p>
            <Link href="login">
              <Button className='py-3' color='yellow' hoverColor='hoveryellow'>Ver Apilicação</Button>
            </Link>
          </div>
          <div className="flex justify-center rounded-2xl mt-10 bg-text600">
            <Image
              className="lg:max-w-md 2xl:max-w-lg"
              src={imgdashboard}
              alt="ScaleBox Template"
              width={500}
            ></Image>
          </div>
        </section>
        <div className="flex justify-center border-y-1 border-white/20 py-12">
          <Image
            className="block sm:hidden"
            src={logosdividermobile}
            alt="ScaleBox Logos Divider Mobile"
            width={250}
            height={250}
          ></Image>
          <Image
            className="hidden sm:block md:max-w-2xl lg:max-w-3xl 2xl:max-w-4xl"
            src={logosdividerweb}
            alt="ScaleBox Logos Divider Web"
          ></Image>

        </div>
        <div className="flex justify-center rounded-md my-14 bg-yellow-100">
          <Image
            src={imagedash}
            alt="ScaleBox Template"
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
            image={"https://github.com/Milimaverde.png"}
            name="Alice Johnson"
            comments="“Wallet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don't need to worry because it's all in one place! thanks!”"
          />
        </section>
        <section className="my-16 md:flex md:items-center md:justify-between md:flex-row md:gap-10">
          <div className="flex flex-col gap-10 md:gap-5 lg:gap-10 items-center md:items-start md:content-between">
            <h1 className=" font-semibold text-center text-4xl md:text-start lg:text-6xl leading-normal text-white">
              Questions? <br/>Let’s talk 
            </h1>
            <p className="text-lg text-center md:text-start leading-8 text-white/40">
              Contact us through our 24/7 live chat. <br/>We’re always happy to help!
            </p>
            <Link href="login">
              <Button className='py-3' color='yellow' hoverColor='hoveryellow'>Ver Apilicação</Button>
            </Link>
          </div>
          <div className="flex justify-center rounded-2xl mt-10 bg-text600">
            <Image
              className=""
              src={imgwallet}
              alt="ScaleBox Template"
              width={500}
            ></Image>
          </div>
        </section>
      </div>
      <footer className="border-t-1 border-white/20 py-12">
        <h3 className="text-2xl font-semibold text-white mb-7.5 md:mb-5 lg:mb-0 ">Wallet</h3>
        <div className='flex flex-col-reverse lg:flex-row md:justify-between'>
          <div className='flex flex-col md:flex-row gap-3 text-white text-lg font-bold mt-10 md:items-end'>
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
          <div className="md:flex md:flex-row md:items-end md:gap-6">
              <div className="flex flex-col gap-2 md:gap-6">
                <label className="text-lg text-white">Updates right to your Inbox</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-5 py-2 rounded-xl bg-text600 text-white"
                />
              </div>
              <Button className="w-full md:w-auto py-2 mt-4 rounded-2xl" color='purple' hoverColor='hoverpurple'>Subscribe</Button>
          </div>
        </div>
      </footer>
    </>
  )
}
