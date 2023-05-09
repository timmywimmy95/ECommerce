import React from 'react';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import { BsFillCarFrontFill } from 'react-icons/bs';

import Link from 'next/link';
const TableData = ({ vehicle }) => {
  let nextSvcDate = new Date(vehicle.next_service_date);
  let nextSvcMth = nextSvcDate.toLocaleString('default', { month: 'short' });
  let nextSvcDay = nextSvcDate.getDate();
  let nextSvcYear = nextSvcDate.getFullYear();

  let lastSvcDate = new Date(vehicle.last_service);
  let currentDate = Date.now();
  let difference = lastSvcDate - currentDate;
  3;
  //   console.log(difference / (1000 * 60 * 60 * 24));

  return (
    <Link href='/servicing'>
      <li
        className={`${
          vehicle.status === 'Overdue'
            ? `bg-rose-100`
            : vehicle.status === 'Upcoming'
            ? 'bg-amber-100'
            : 'bg-green-100'
        } hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer`}
      >
        <div className='bg-purple-200 rounded-lg p-3'>
          {vehicle.type === 'car' ? (
            <BsFillCarFrontFill size={25} />
          ) : (
            <GiFullMotorcycleHelmet size={25} />
          )}
          {/* <FaShoppingBag className='text-purple-800' /> */}
        </div>
        <div className='pl-4'>
          <p className='text-gray-800 font-bold'>{vehicle.license_plate}</p>
          <p className='text-gray-400 text-sm'>
            Due: {nextSvcDay} {nextSvcMth} {nextSvcYear}
          </p>
        </div>
      </li>
    </Link>
  );
};

export default TableData;
