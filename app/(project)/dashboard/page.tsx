import { handleAuth } from "@/app/actions/handle-auth";
 import { auth } from '@/app/lib/auth';
import Link from "next/link";
 import { redirect } from 'next/navigation';
import { Button } from "../components/buttons";
 
 export default async function Dashboard() {
   const session = await auth();
 
   if (!session) {
     redirect('/login');
   }
 
   return (
<>
    <header className="flex py-5 justify-between">
      <Link href="/">
        <h3 className="text-2xl font-semibold text-white">ScaleBox</h3>
      </Link>
      <div>
       {session.user?.email && (
         <form action={handleAuth}>
           <button className="rounded-2xl px-6 py-3 text-lg cursor-pointer transition-all duration-150 bg-buttonyellow hover:bg-buttonyellow-hover">
             Logout
           </button>
         </form>
       )}
     </div>
      </header>
    <section className="my-16 flex flex-col justify-center md:max-w-5xl md:mx-auto items-center">
          <h1 className="font-semibold text-center text-4xl lg:text-6xl leading-normal text-white mb-6 ">
             Protected Dashboard
          </h1>
          <p className="text-lg text-center leading-8 text-white/40">
              ScaleBox, aqui você está logado com o Google e pode efetuar pagamentos com Stripe e Mercado Pago clicando no botão 'Pagamentos' ou deslogar clicando em 'Logout'.
          </p>
       <Link href="/payments">
       <Button className="mt-10 py-3 px-6" color='purple' hoverColor='hoverpurple'>Pagamentos</Button>
       </Link>
    </section>
    
     </>
   )
    
 }