import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTachometerAlt, FaSignOutAlt } from 'react-icons/fa';
import { RxPerson } from 'react-icons/rx';
import { GiCartwheel, GiSpanner } from 'react-icons/gi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { getSession, useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const Sidebar = ({ children }) => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false }); // sign the user out and don't redirect
    router.push('/login'); // redirect to the desired page
  };
  return (
    <>
      <div className='flex'>
        <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
          <div className='flex flex-col items-center'>
            <Link href='/dashboard'>
              <div className='bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg inline-block'>
                <FaTachometerAlt size={20} />
              </div>
            </Link>
            <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
            <Link href='/profile'>
              <div className=' bg-gray-100 hover:bg-gray-500 cursor-pointer p-3 mt-4 rounded-lg inline-block'>
                <RxPerson size={20} />
              </div>
            </Link>
            <Link href='/vehicles'>
              <div className=' bg-gray-100 hover:bg-gray-500 cursor-pointer p-3 mt-4 rounded-lg inline-block'>
                <GiCartwheel size={20} />
              </div>
            </Link>
            <Link href='/servicing'>
              <div className=' bg-gray-100 hover:bg-gray-500 cursor-pointer p-3 mt-4 rounded-lg inline-block'>
                <GiSpanner size={20} />
              </div>
            </Link>
            <button onClick={handleSignOut}>
              <div className=' bg-gray-100 hover:bg-gray-500 cursor-pointer p-3 mt-4 rounded-lg inline-block'>
                <FaSignOutAlt size={20} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <main className='ml-20 max-w-full'>{children}</main>
    </>
  );
};

export default Sidebar;
