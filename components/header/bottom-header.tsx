import { LuMenu } from 'react-icons/lu';

export const BottomHeader = () => {
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
      <div className='hidden md:flex items-center gap-1 cursor-pointer px-2 text-amazon_yellow hover:text-red-400 hover:font-semibold duration-300 transition-all'>
        Logout
      </div>
    </div>
  );
};
