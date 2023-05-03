import React from 'react';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import { BsFillCarFrontFill, BsArrowRightShort } from 'react-icons/bs';
import Link from 'next/link';

const VehCard = ({ data }) => {
  return (
    <div className='flex flex-col p-8 rounded-xl bg-white shadow-xl w-96 md:w-auto'>
      {data.type === 'car' ? (
        <BsFillCarFrontFill size={25} />
      ) : (
        <GiFullMotorcycleHelmet size={25} />
      )}
      <div className='mt-3 font-semibold text-lg'>{data.make}</div>
      <div className='text-sm font-light w-60 md:w-auto'>{data.model}</div>
      <div className='text-sm font-light w-60 md:w-auto'>{data.year}</div>
      <div className='my-4'>
        <span className='font-bold text-base'>{data.license_plate}</span>
      </div>
      <div className='w-full group text-slate-500'>
        <Link
          className=' flex mt-auto mb-0 leading-normal text-sm  '
          href={`/vehicles/${data.id}`}
        >
          Read more
          <BsArrowRightShort
            className='self-center group-hover:translate-x-1 ease-in-out duration-300'
            size={20}
          />
        </Link>
      </div>
    </div>
  );
};

export default VehCard;
