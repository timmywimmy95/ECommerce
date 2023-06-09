import React from 'react';
import { getSession, useSession } from 'next-auth/react';

const Header = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className='flex justify-between px-4 pt-4 '>
      <h2 className='text-base font-semibold leading-7 text-gray-900'>
        Dashboard
      </h2>
      <h2 className='text-base font-semibold leading-7 text-gray-900'>
        Welcome Back, {session ? session.user.username : <></>}
      </h2>
    </div>
  );
};

export default Header;
