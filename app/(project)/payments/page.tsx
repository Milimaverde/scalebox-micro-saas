'use client';
 
import { useMercadoPago } from '@/app/hooks/useMercadoPago';
import { useStripe } from '@/app/hooks/useStripe';
import { Button } from '../components/buttons';
import Link from 'next/link';
 
 export default function Payments() {
   const {
     createPaymentStripeCheckout,
     createSubscriptionStripeCheckout,
     handleCreateStripePortal,
   } = useStripe();

   const {
    createMercadoPagoCheckout,
   } = useMercadoPago();
 
   return (
    <>
      <header className="flex py-5 justify-between">
        <Link href="/">
        <h3 className="text-2xl font-semibold text-white">ScaleBox</h3>
        </Link>
      </header>
      <section className="my-16 flex flex-col justify-center md:max-w-5xl md:mx-auto items-center">
        <h1 className="font-semibold text-center text-4xl lg:text-6xl leading-normal text-white mb-6 ">
             Pagamentos
             </h1>
             <p className="text-lg text-center leading-8 text-white/40">
              Nessa tela é feita uam simulação de um produto X, você pode efetuar pagamentos com Stripe e Mercado Pago, além de adquirir assinaturas e acessar o portal de pagamentos do Stripe.
              </p>
              <div className="items-center mt-10 flex flex-col gap-4">

              <button className="rounded-2xl px-6 py-3 text-lg cursor-pointer transition-all duration-150 bg-buttonyellow hover:bg-buttonyellow-hover" onClick={() => createPaymentStripeCheckout({ testeId: '123' })}>Pagamento com Stripe
              </button>
              <button className="rounded-2xl px-6 py-3 text-lg cursor-pointer transition-all duration-150 bg-buttonyellow hover:bg-buttonyellow-hover" onClick={() => createSubscriptionStripeCheckout({ testeId: '123' })}> Assinatura com Stripe
              </button>
              <div className='hidden'>
                <button className="rounded-2xl px-6 py-3 text-lg cursor-pointer transition-all duration-150 bg-buttonyellow hover:bg-buttonyellow-hover" onClick={() => handleCreateStripePortal()}>Efetuar Portal de Pagamento</button>
                </div>
                <button className="rounded-2xl px-6 py-3 text-lg cursor-pointer transition-all duration-150 bg-buttonyellow hover:bg-buttonyellow-hover" onClick={() => createMercadoPagoCheckout({ testeId: '123',userEmail: 'teste@email.com'
                })}>Pagamento com Mercado Pago</button>
              </div>
                </section>
              

    </>
   );
 }