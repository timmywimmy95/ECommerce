import React from 'react';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import {
  BsFillCarFrontFill,
  BsArrowRightShort,
  BsThreeDotsVertical,
} from 'react-icons/bs';

import Link from 'next/link';
import Dropdown from './Dropdown';

const SvcCard = ({ data }) => {
  let date = new Date(data.servicedate);
  let month = date.toLocaleString('default', { month: 'short' });
  let day = date.getDate();
  let year = date.getFullYear();

  return (
    <div className='flex flex-col p-8 rounded-xl bg-white shadow-xl md:h-72 md:w-64 sm:w-auto sm: h-auto'>
      <div className='flex justify-between py-4'>
        {data.type === 'car' ? (
          <BsFillCarFrontFill size={25} />
        ) : (
          <GiFullMotorcycleHelmet size={25} />
        )}
        <Dropdown info={data} />
      </div>
      <div className='bg-grey-100 font-bold text-lg'>{data.license_plate}</div>
      <div className='mt-3 font-semibold text-sm'>{data.description}</div>
      <div className='text-sm font-light w-60 md:w-auto'></div>
      <div className='mt-auto text-sm font-light w-60 md:w-auto'>
        {day} {month} {year}
      </div>
      <Link
        className='mt-6 leading-normal text-sm'
        href={`/servicing/${data.id}`}
      >
        <div className='flex font-semibold w-full group text-slate-400'>
          Read more
          <BsArrowRightShort
            className='self-center group-hover:translate-x-1 ease-in-out duration-300'
            size={22}
          />
        </div>
      </Link>
    </div>
  );
};

export default SvcCard;
