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
        <div className='w-full h-[calc(100vh-9rem)]'>
          <Image src='/images/sliderImg_1.jpg' alt='slider image' fill />
        </div>
        <div className='w-full h-[calc(100vh-9rem)]'>
          <Image src='/images/sliderImg_2.jpg' alt='slider image' fill />
        </div>
        <div className='w-full h-[calc(100vh-9rem)]'>
          <Image src='/images/sliderImg_3.jpg' alt='slider image' fill />
        </div>
        <div className='w-full h-[calc(100vh-9rem)]'>
          <Image src='/images/sliderImg_4.jpg' alt='slider image' fill />
        </div>
      </Carousel>
      {/* For Shadow Effect */}

      <div className='w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20'></div>
    </div>
  );
};
