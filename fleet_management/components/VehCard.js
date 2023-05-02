import React from 'react';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import { BsFillCarFrontFill } from 'react-icons/bs';
import Link from 'next/link';

const VehCard = ({ data }) => {
  return (
    <div className='flex flex-col p-8 rounded-xl bg-white shadow-xl w-96 md:w-auto'>
      <div className='hover:-translate-y-6 transition duration-500 ease-in-out'>
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
      </div>
    </div>
  );
};

export default VehCard;
