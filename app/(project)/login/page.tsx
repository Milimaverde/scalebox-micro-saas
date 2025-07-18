import { handleAuth } from "@/app/actions/handle-auth";
import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Login() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }
  
  return (
    <>
    <header className="flex py-5 justify-between">
      <Link href="/">
        <h3 className="text-2xl font-semibold text-white">ScaleBox</h3>
      </Link>
      </header>
    <section className="my-16 flex flex-col justify-center md:max-w-5xl md:mx-auto items-center">
          <h1 className="font-semibold text-center text-4xl lg:text-6xl leading-normal text-white mb-6 ">
              SaaS Login Page Template
          </h1>
          <p className="text-lg text-center leading-8 text-white/40">
              ScaleBox é um micro SaaS focado em escalabilidade e agilidade no desenvolvimento de produtos modernos e eficientes
          </p>
        <form action={handleAuth} className="flex flex-col items-center mt-10">
          <button type="submit" className="rounded-2xl px-6 py-3 text-lg cursor-pointer transition-all duration-150 bg-buttonyellow hover:bg-buttonyellow-hover">Sign In with Google</button>
        </form>
    </section>
  </>
    
  )
} 
