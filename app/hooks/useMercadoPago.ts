import { initMercadoPago } from "@mercadopago/sdk-react";
 import { useRouter } from 'next/navigation';
 import { useEffect } from "react";
import { toast } from "react-toastify";
 
 export default function useMercadoPago() {
   const router = useRouter();
 
   useEffect(() => {
     initMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY!);
   }, []);
 
   async function createSubscriptionMercadoPagoCheckout({
     testeId,
     userEmail,
   }: {
     testeId: string;
     userEmail: string;
   }) {
     try {
       const response = await fetch('/api/mercado-pago/create-checkout', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           testeId,
           userEmail,
         }),
       });
 
       const data = await response.json();
 
       router.push(data.initPoint);
     } catch (error) {
       console.error(error);
       toast.error("Erro ao criar checkout com Mercado Pago");
       throw error;
     }
   }
 
   return {
    createSubscriptionMercadoPagoCheckout,
   };
 }