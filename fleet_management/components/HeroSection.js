import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section>
      <div className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0'>
        {/* Left Item */}
        <div className='flex flex-col mb-18 space-y-12 md:w-1/2'>
          <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
            Bring everyone together to manage vehicles better
          </h1>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
            Manage optimizes vehicle fleet operations, ensuring efficient task
            planning, maintenance scheduling, and maximized fleet availability.
          </p>
          <div className='flex justify-center md:justify-start'>
            <div className='py-3 px-6 rounded-md bg-brightRed rounded-full hover:bg-indigo-400'>
              Read more
            </div>

            {/* <BsArrowRightShort
              className='self-center group-hover:translate-x-1 ease-in-out duration-300'
              size={22}
            /> */}
          </div>
        </div>
        {/* Right Image */}
        <div>
          <Image
            width={600}
            height={500}
            src='./landing_page/illustration-intro.svg'
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
