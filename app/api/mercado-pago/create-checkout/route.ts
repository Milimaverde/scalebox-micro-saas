import { NextRequest, NextResponse } from 'next/server';
import { Preference } from 'mercadopago';
import mpClient from '@/app/lib/mercado-pago';
 
 export async function POST(req: NextRequest) {
   const { testeId, userEmail } = await req.json();
 
   try {
     const preference = new Preference(mpClient);
 
     const createdPreference = await preference.create({
       body: {
         external_reference: testeId,
         metadata: {
           testeId,
           userEmail
         },
         ...(userEmail && { payer: { email: userEmail } }),
         items: [
           {
             id: '',
             description: '',
             title: '',
             quantity: 1,
             unit_price: 1,
             currency_id: 'BRL',
             category_id: 'services'
           }
         ],
         payment_methods: {
           installments: 12,
           // excluded_payment_methods: [
           //   {
           //     id: 'bolbradesco',
           //   },
           //   {
           //     id: 'pec',
           //   }
           // ],
           // excluded_payment_types: [
           //   {
           //     id: 'debit_card',
           //   },
           //   {
           //     id: 'credit_card'
           //   }
           // ]
         },
         auto_return: 'approved',
         back_urls: {
           success: `${req.headers.get('origin')}/api/mercado-pago/pending`,
           failure: `${req.headers.get('origin')}/api/mercado-pago/pending`,
           pending: `${req.headers.get('origin')}/api/mercado-pago/pending`,
         }
       }
     });
 
     if (!createdPreference.id) {
       return new Response('Error ao criar checkout com Mercado Pago', { status: 500 });
     }
 
     return NextResponse.json({
       preferenceId: createdPreference.id,
       initPoint: createdPreference.init_point,
     })
   } catch (error) {
     console.error(error);
     return new Response('Error ao criar checkout com Mercado Pago', { status: 500 });
   }
 }