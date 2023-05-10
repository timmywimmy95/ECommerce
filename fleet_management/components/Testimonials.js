import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section>
      <div className='max-width-6xl px-5 mx-auto mt-32 text-center'>
        <h2 className='text-4xl font-bold text-center'>
          What do our partners say?{' '}
        </h2>
        <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex-col md:w-1/3'>
            <Image
              className='rounded-lg'
              width={100}
              height={100}
              src='/landing_page/getgo-technologies.png'
            />
            <h5 className='font-bold text-lg'>Getgo</h5>
            <p className='text-sm text-darkGrayishBlue'>
              "Manage has supercharged our team's workflow and improved our
              operation's efficiency by 100%"
            </p>
          </div>
          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex-col md:w-1/3'>
            <Image
              className='rounded-lg'
              width={130}
              height={200}
              src='/landing_page/Hertz-Logo-1987.png'
            />
            <h5 className='font-bold text-lg'>Hertz</h5>
            <p className='text-sm text-darkGrayishBlue'>
              "Manage revolutionized fleet management at Hertz, improving
              efficiency and customer service. An indispensable solution!"
            </p>
          </div>
          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex-col md:w-1/3'>
            <Image
              className='rounded-lg'
              width={100}
              height={100}
              src='/landing_page/ShariotLogo.png'
            />
            <h5 className='font-bold text-lg'>Shariot</h5>
            <p className='text-sm text-darkGrayishBlue'>
              "Manage transformed our fleet management, streamlining operations
              and maximizing vehicle availability. It's a game-changer!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
