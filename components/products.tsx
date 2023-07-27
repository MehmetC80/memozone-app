import { ProductProps } from '@/type';
import Image from 'next/image';
import { HiShoppingCart } from 'react-icons/hi';
import { FaHeart, FaHeartbeat } from 'react-icons/fa';
export const Products = ({ products }: { products: ProductProps[] }) => {
  return (
    <div className='w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 '>
      {products.map((product) => {
        return (
          <div
            key={product._id}
            className='w-full bg-slate-50 rounded-lg text-black p-4 border border-gray-300 group overflow-hidden'
          >
            <div className='w-full h-[260px] relative'>
              <Image
                className='w-full h-full object-contain scale-90 hover:scale-100 transition-all duration-300'
                src={product.image}
                alt='product'
                height={300}
                width={300}
              />
              <div className='text-xl w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-whrite flex flex-col rounded:md translate-x-20 group-hover:translate-x-0 duration-300'>
                <span className='w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center hover:bg-amazon_yellow cursor-pointer transition-all duration-300'>
                  <HiShoppingCart />
                </span>
                <span className='text-xl w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center hover:bg-amazon_yellow cursor-pointer transition-all duration-300'>
                  <FaHeart />
                </span>
              </div>
              {product.isNew && (
                <p className='absolute top-0 right-0 text-slate-900 text-xs font-medium tracking-wide animate-bounce'>
                  spare! {(product.oldPrice - product.price).toFixed(2)} €
                </p>
              )}
            </div>
            <hr />
            <div className='px-4 py-3 flex flex-col justify-between gap-1 min-h-[250px]'>
              <p className='text-xs text-gray-500 tracking-wide'>
                {product.category}
              </p>
              <p className='text-base font-medium'>{product.title}</p>
              <p className='flex items-center gap-2'>
                <span className='text-gray-400 text-sm line-through'>
                  {product.oldPrice.toFixed(2)}€
                </span>{' '}
                <span className='text-slate-950 font-semibold'>
                  {product.price} €
                </span>
              </p>
              <p className='text-xs text-gray-600 text-justify'>
                {product.description.substring(100)}
              </p>
              <button className='h-10 font-medium bg-slate-900 text-white rounded-md hover:bg-amazon_yellow hover:text-black transition-all duration-300 mt-2'>
                + Warenkorb
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
