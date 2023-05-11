import React, { useState } from 'react';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import {
  BsFillCarFrontFill,
  BsArrowRightShort,
  BsThreeDotsVertical,
} from 'react-icons/bs';

import Link from 'next/link';
import Dropdown from './Dropdown';
import { useRouter } from 'next/router';

const SvcCard = ({ data, role }) => {
  let router = useRouter();
  let date = new Date(data.servicedate);
  let month = date.toLocaleString('default', { month: 'short' });
  let day = date.getDate();
  let year = date.getFullYear();

  const handleDelete = async (e) => {
    e.preventDefault();

    const options = {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    };
    await fetch(
      `http://localhost:3000/api/vehicles/${data.veh_id}/servicing/${data.id}?role=${role}`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          router.push('/servicing');
        }
      });
  };

  const handleEdit = () => {
    router.push(`http://localhost:3000/servicing/${data.id}/update_servicing`);
  };

  return (
    <div className='flex flex-col p-8 m-4 rounded-xl bg-white shadow-xl md:h-72 md:w-64 sm:w-auto sm: h-auto'>
      <div className='flex justify-between py-4'>
        {data.type === 'car' ? (
          <BsFillCarFrontFill size={25} />
        ) : (
          <GiFullMotorcycleHelmet size={25} />
        )}
        <Dropdown
          role={role}
          info={data}
          handleDelete={handleDelete}
          handleEdit={(e) => handleEdit(e)}
        />
      </div>
      <div className='bg-grey-100 font-bold text-lg'>{data.license_plate}</div>

      <div className='mt-3 font-semibold text-sm'>{data.description}</div>
      <div className='text-sm mt-2 font-light w-60 md:w-auto'>
        Cost: ${data.cost}
      </div>
      <div className='text-sm mt-8 font-light w-60 md:w-auto'>
        Serviced at: {data.mileage} km
      </div>
      <div className='mt-auto text-sm font-semibold w-60 md:w-auto'>
        {day} {month} {year}
      </div>
      {/* <Link
        className='mt-6 leading-normal text-sm'
        href={`/servicing/${data.id}`}
      > */}
      {/* <div className='flex font-semibold w-full group text-slate-400'>
          Read more
          <BsArrowRightShort
            className='self-center group-hover:translate-x-1 ease-in-out duration-300'
            size={22}
          />
        </div> */}
      {/* </Link> */}
    </div>
  );
};

export default SvcCard;
