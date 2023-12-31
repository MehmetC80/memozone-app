import { StoreProduct } from '@/type';
import { NextApiRequest, NextApiResponse } from 'next';

import { NextResponse } from 'next/server';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { items, email } = req.body;

    const modifiedItems = items.map((item: StoreProduct) => ({
      quantity: item.quantity,
      price_data: {
        currency: 'usd',
        unit_amount: item.price * 100,
        product_data: {
          name: item.title,
          description: item.description,
          images: [item.image],
        },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      shipping_address_collection: {
        allowed_countries: ['BD', 'US', 'OM', 'CA', 'GB'],
      },
      line_items: modifiedItems,
      mode: 'payment',
      success_url: `${process.env.NEXTAUTH_URL}/success`,
      cancel_url: `${process.env.NEXTAUTH_URL}/checkout`,
      metadata: {
        email,
        images: JSON.stringify(items.map((item: any) => item.image)),
      },
    });

    return NextResponse.json({ id: session.id }, { status: 200 });
  } catch (error) {
    return new NextResponse('Internal error', { status: 500 });
  }
}
