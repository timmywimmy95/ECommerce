import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='mt-10 bg-indigo-950'>
      <div className='container flex flex-col justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
        <div className='flex bg-white-100 flex-col-reverse items-center justify-between space-y-12 md:space-y-0 md:flex-col md:items-start'>
          <div className='space-y-4'>
            <Image
              width={130}
              height={120}
              src='./landing_page/logo-white.svg'
            ></Image>
            <div className='flex justify-center space-x-4'>
              <Link href='#'>
                <Image
                  width={20}
                  height={0}
                  src='./landing_page/icon-facebook.svg'
                ></Image>
              </Link>
              <Link href='#'>
                <Image
                  width={20}
                  height={120}
                  src='./landing_page/icon-twitter.svg'
                ></Image>
              </Link>
              <Link href='#'>
                <Image
                  width={20}
                  height={120}
                  src='./landing_page/icon-instagram.svg'
                ></Image>
              </Link>
              <Link href='#'>
                <Image
                  width={20}
                  height={120}
                  src='./landing_page/icon-youtube.svg'
                ></Image>
              </Link>
            </div>
          </div>
        </div>
        <div className='flex text-white justify-center md:text-left md:block md:self-end'>
          Copyright &copy; 2023, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
