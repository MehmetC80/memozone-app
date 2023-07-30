'use client';
import { resetCart } from '@/store/nextSlices';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
const SuccessPage = () => {
  const dispatch = useDispatch();
  return (
    <div className='flex flex-col gap-2 items-center  h-[calc(100vh-232px)] justify-center py-20'>
      <h1 className='text-2xl text-hoverBg font-semibold'>
        Danke das Sie bei Memozone eingekauft haben!
      </h1>
      <Link
        className='text-lg text-gray-500 hover:underline underline-offset-4 decoration-[1px] hover:text-blue-600 duration-300'
        href={'/'}
        onClick={() => dispatch(resetCart())}
      >
        <p>Weiter shoppen</p>
      </Link>
    </div>
  );
};

export default SuccessPage;
