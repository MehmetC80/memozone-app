'use client';

import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';

export const Banner = () => {
  return (
    <div className='relative'>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={4000}
      >
        <div className='relative h-80 w-full md:h-96 lg:h-[calc(100vh-9rem)]'>
          <Image
            priority
            fill
            src='/images/websites.jpg'
            alt='slider image'
            className='object-cover'
          />
        </div>
        <div className='relative h-80 w-full md:h-96 lg:h-[calc(100vh-9rem)]'>
          <Image
            src='/images/sliderImg_2.jpg'
            alt='slider image'
            fill
            className='object-cover'
          />
        </div>
        <div className='relative h-80 w-full md:h-96 lg:h-[calc(100vh-9rem)]'>
          <Image
            src='/images/laptop.jpg'
            alt='slider image'
            fill
            className='object-cover'
          />
        </div>
        <div className='relative w-full h-80  md:h-96 lg:h-[calc(100vh-9rem)]'>
          <Image
            src='/images/sliderImg_4.jpg'
            alt='slider image'
            fill
            className='object-cover'
          />
        </div>
      </Carousel>
      {/* For Shadow Effect */}

      <div className='w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20'></div>
    </div>
  );
};
