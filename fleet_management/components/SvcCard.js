import React from 'react';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import { BsFillCarFrontFill, BsArrowRightShort } from 'react-icons/bs';
import Link from 'next/link';

const SvcCard = ({ data }) => {
  let date = new Date(data.servicedate);
  let month = date.toLocaleString('default', { month: 'short' });
  let day = date.getDate();
  let year = date.getFullYear();

  return (
    <div className='flex flex-col p-8 rounded-xl bg-white shadow-xl md:w-64 sm:w-auto'>
      <div className=''>
        <div className='flex justify-evenly'>
          {data.type === 'car' ? (
            <BsFillCarFrontFill size={25} />
          ) : (
            <GiFullMotorcycleHelmet size={25} />
          )}
          <span className='font-bold text-base'>{data.license_plate}</span>
        </div>
        <div className='mt-3 font-semibold text-lg'>{data.description}</div>
        <div className='text-sm font-light w-60 md:w-auto'></div>
        <div className='text-sm font-light w-60 md:w-auto'>
          {day} {month} {year}
        </div>
        <div className='my-4'>
          <span className='text-sm'>Cost: ${data.cost}</span>
        </div>

        <div className='my-4'>
          <span className='text-sm'>Serviced at: {data.mileage} km</span>
        </div>
        <div className='w-full group text-slate-500'>
          <Link
            className=' flex mt-auto mb-0 leading-normal text-sm  '
            href={`/servicing/${data.id}`}
          >
            Read more
            <BsArrowRightShort
              className='self-center group-hover:translate-x-1 ease-in-out duration-300'
              size={20}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SvcCard;
