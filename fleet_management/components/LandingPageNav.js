import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const LandingPageNav = () => {
  return (
    <div className='mx-auto relative container p-6'>
      <div className='flex items-center justify-between'>
        <div className='pt-2'>
          <Link href='#'>
            <Image
              width='100'
              height='100'
              src='./landing_page/logo.svg'
            ></Image>
          </Link>
        </div>
        {/* <div className='sm:hidden md:flex space-x-6'>
          <Link className='hover:text-darkGrayishBlue' href='#'>
            Pricing
          </Link>
          <Link className='hover:text-darkGrayishBlue' href='#'>
            Product
          </Link>
          <Link className='hover:text-darkGrayishBlue' href='#'>
            About
          </Link>
          <Link className='hover:text-darkGrayishBlue' href='#'>
            Contact Us
          </Link>
        </div> */}
        <div>
          <button className='py-2 px-5 bg-brightRed rounded-full hover:bg-indigo-400'>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPageNav;
