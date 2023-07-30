'use client';
import { StateProps } from '@/type';
import Image from 'next/image';
import Link from 'next/link';
import { BiCaretDown } from 'react-icons/bi';
import { HiOutlineSearch } from 'react-icons/hi';
import { SlLocationPin } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { addUser } from '@/store/nextSlices';

export const Header = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const { productData, favoriteData, userInfo } = useSelector(
    (state: StateProps) => state.next
  );

  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session.user?.email,
          image: session.user?.image,
        })
      );
    }
  }, [session, dispatch]);

  return (
    <header className='w-full h-20 bg-slate-950 text-white sticky top-0 z-50 flex justify-between items-center gap-2 mx-auto px-4 md1:gap-3'>
      {/* Logo */}
      <Link href={'/'} className='relative w-20 h-20 mt-4'>
        <Image
          src='/images/logo.png'
          alt='logo'
          fill
          className='object-contain'
        />
      </Link>
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

      {userInfo ? (
        <div className='flex gap-2 items-center text-sm text-gray-400 hover:text-white transition-all duration-300'>
          <Image
            src={userInfo.image}
            alt='user-image'
            width={40}
            height={40}
            className='rounded-full'
          />
          <div className='text-xs flex flex-col justify-between'>
            <p className='text-white font-bold'>{userInfo.name}</p>
            <p>{userInfo.email}</p>
          </div>
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className='flex flex-col justify-center items-center text-sm text-gray-400 hover:text-white transition-all duration-300'
        >
          <p>Hallo Login</p>
          <p className='font-bold'>
            Account
            <span>
              <BiCaretDown />
            </span>
          </p>
        </div>
      )}

      {/* Favorite */}
      <div className='relative text-sm text-gray-400 hover:text-white transition-all duration-300 font-bold'>
        <p>Wunsch</p>
        <p>Liste</p>
        {favoriteData.length > 0 && (
          <span className='absolute top-5 right-2 flex justify-center items-center text-amazon_yellow'>
            {favoriteData.length}
          </span>
        )}
      </div>
      {/* Cart */}
      <Link href={'/cart'} className='relative'>
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
          {productData ? productData.length : 0}
        </span>
      </Link>
    </header>
  );
};
