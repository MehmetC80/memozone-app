'use client';
import PaymentCart from '@/components/cart-payment';
import CartProduct from '@/components/cart-product';
import { ResetCart } from '@/components/reset-cart';
import { StateProps, StoreProduct } from '@/type';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const CartPage = () => {
  const { productData } = useSelector((state: StateProps) => state.next);
  return (
    <div className='max-w-screen-2xl mx-auto px-0 md:px-4 lg:px-6 grid grid-cols-5 gap-10 py-4'>
      {productData.length > 0 ? (
        <>
          <div className='bg-white col-span-5 xl:col-span-4 p-4 rounded-lg '>
            <div className='flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1'>
              <p className='text-2xl font-semibold text-amazon_blue'>
                Warenkorb
              </p>
              <p className='text-lg font-semibold text-amazon_blue'>Subtitle</p>
            </div>
            <div className='pt-2 flex flex-col gap-2'>
              {productData.map((item: StoreProduct) => (
                <div key={item._id}>
                  <CartProduct item={item} />
                </div>
              ))}
              <ResetCart />
            </div>
          </div>
          <div className='bg-white h-64 col-span-5  xl:col-span-1 p-2 rounded-lg flex items-center justify-center'>
            <PaymentCart />
          </div>
        </>
      ) : (
        <div className='bg-white  h-[calc(100vh-232px)] col-span-5 flex flex-col items-center justify-center py-5 rounded-lg shadow-lg'>
          <h1 className='text-lg font-medium'>Dein Warenkorb ist leer!</h1>
          <Link href={'/'}>
            <button className='w-52 h-10 bg-amazon_blue text-white rounded-lg text-sm font-semibold hover:bg-amazon_yellow hover:text-black'>
              geh shoppen
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
