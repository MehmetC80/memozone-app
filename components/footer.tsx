import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='w-full h-20 bg-slate-800 text-gray-400 flex items-center justify-center gap-4'>
      <Image src='/images/logo.png' width={80} height={80} alt='logo' />
      <p className='text-sm mb-4'>
        All rights reserved{' '}
        <Link
          href={'http://google.de'}
          target='_blank'
          className='hover:underline hover:text-white cursor-pointer decoration-[1px] duration-300 transition-all'
        >
          @memo.de
        </Link>
      </p>
    </footer>
  );
};
