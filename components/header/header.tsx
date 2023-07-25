import Image from 'next/image';
import { BiCaretDown } from 'react-icons/bi';
import { HiOutlineSearch } from 'react-icons/hi';
import { SlLocationPin } from 'react-icons/sl';

export const Header = () => {
  return (
    <header className='w-full h-20 bg-slate-950 text-white sticky top-0 z-50 flex justify-between items-center gap-2 mx-auto px-4 md1:gap-3'>
      {/* Logo */}
      <div className='relative w-20 h-20 mt-4'>
        <Image
          src='/images/logo.png'
          alt='logo'
          fill
          className='object-contain'
        />
      </div>
      {/* Delivery */}
      <div className=' text-gray-400 items-center gap-2 hidden xl:flex'>
        <SlLocationPin />
        <div className='text-sm'>
          <p>Lieferung nach</p>
          <p className='text-white uppercase font-bold'>Deutschland</p>
        </div>
      </div>
      {/* Searchbar */}
      <div className='flex-1 h-10 hidden md:inline-flex items-center justify-between relative'>
        <input
          type='text'
          placeholder='Suche nach memozone Produkten'
          className='w-full h-full rounded-md px-2 placeholder:text-sm text-base border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow'
        />
        <span className='absolute text-slate-950 text-2xl right-0 w-12 h-full bg-amazon_yellow flex items-center justify-center rounded-tr-md rounded-br-md'>
          <HiOutlineSearch />
        </span>
      </div>
      {/* Signin */}
      <div className='flex flex-col justify-center items-center text-sm text-gray-400 hover:text-white transition-all duration-300'>
        <p>Hallo Login</p>
        <p className='font-bold'>
          Account
          <span>
            <BiCaretDown />
          </span>
        </p>
      </div>
      {/* Favorite */}
      <div className='text-sm text-gray-400 hover:text-white transition-all duration-300 font-bold'>
        <p>Favoriten</p>
      </div>
      {/* Cart */}
      <div className='relative'>
        <Image
          src='/images/cartIcon.png'
          alt='cart image'
          width={42}
          height={42}
          className='object-cover'
        />
        <p className='text-gray-400 text-sm hover:text-white transition-all duration-300 font-bold'>
          Warenkorb
        </p>
        <span className='absolute text-sm text-amazon_yellow top-0 left-[20px]'>
          0
        </span>
      </div>
    </header>
  );
};
