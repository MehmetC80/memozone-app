'use client';
import { removeUser } from '@/store/nextSlices';
import { StateProps } from '@/type';
import { signOut, useSession } from 'next-auth/react';
import { LuMenu } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';

export const BottomHeader = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: StateProps) => state.next);

  const handleSignout = () => {
    signOut();
    dispatch(removeUser());
  };

  return (
    <div className='w-full h-10 bg-slate-800 taxt-sm text-white px-4 flex items-center'>
      <div className='flex items-center gap-1 cursor-pointer text-gray-400 hover:text-white hover:font-semibold duration-300 transition-all'>
        <LuMenu className=' text-xl' /> All
      </div>
      <div className='hidden md:flex items-center gap-1 cursor-pointer px-2 text-gray-400 hover:text-white hover:font-semibold duration-300 transition-all'>
        Angebote
      </div>
      <div className='hidden md:flex items-center gap-1 cursor-pointer px-2 text-gray-400 hover:text-white hover:font-semibold duration-300 transition-all'>
        Kundenservice
      </div>
      <div className='hidden md:flex items-center gap-1 cursor-pointer px-2 text-gray-400 hover:text-white hover:font-semibold duration-300 transition-all'>
        Regristierung
      </div>
      <div className='hidden md:flex items-center gap-1 cursor-pointer px-2 text-gray-400 hover:text-white hover:font-semibold duration-300 transition-all'>
        Geschenk Liste
      </div>
      <div className='hidden md:flex items-center gap-1 cursor-pointer px-2 text-gray-400 hover:text-white hover:font-semibold duration-300 transition-all'>
        Verkauf
      </div>
      {userInfo && (
        <button
          onClick={handleSignout}
          className='hidden md:flex items-center gap-1 cursor-pointer px-2 text-amazon_yellow hover:text-red-400 hover:font-semibold duration-300 transition-all'
        >
          Logout
        </button>
      )}
    </div>
  );
};
