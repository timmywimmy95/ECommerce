// import React from 'react';
// import { GiFullMotorcycleHelmet } from 'react-icons/gi';
// import { BsFillCarFrontFill, BsArrowRightShort } from 'react-icons/bs';
// import Link from 'next/link';

// const VehCard = ({ data }) => {
//   return (
//     <div className='flex flex-col p-8 rounded-xl bg-white shadow-xl w-96 md:w-auto'>
//       {data.type === 'car' ? (
//         <BsFillCarFrontFill size={25} />
//       ) : (
//         <GiFullMotorcycleHelmet size={25} />
//       )}
//       <div className='mt-3 font-semibold text-lg'>{data.make}</div>
//       <div className='text-sm font-light w-60 md:w-auto'>{data.model}</div>
//       <div className='text-sm font-light w-60 md:w-auto'>{data.year}</div>
//       <div className='my-4'>
//         <span className='font-bold text-base'>{data.license_plate}</span>
//       </div>
//       <div className='w-full group text-slate-500'>
//         <Link
//           className=' flex mt-auto mb-0 leading-normal text-sm  '
//           href={`/vehicles/${data.id}`}
//         >
//           Read more
//           <BsArrowRightShort
//             className='self-center group-hover:translate-x-1 ease-in-out duration-300'
//             size={20}
//           />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default VehCard;

import React from 'react';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import {
  BsFillCarFrontFill,
  BsArrowRightShort,
  BsThreeDotsVertical,
} from 'react-icons/bs';

import Link from 'next/link';
import Dropdown from './Dropdown';
import { useRouter } from 'next/router';

const VehCard = ({ data }) => {
  console.log(data);
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
    await fetch(`http://localhost:3000/api/vehicles/${data.id}/`, options)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          router.push('/vehicles');
        }
      });
  };

  return (
    <div className='flex flex-col p-8 m-4 rounded-xl bg-white shadow-xl md:h-72 md:w-64 sm:w-auto sm: h-auto'>
      <div className='flex justify-between py-4'>
        {data.type === 'car' ? (
          <BsFillCarFrontFill size={25} />
        ) : (
          <GiFullMotorcycleHelmet size={25} />
        )}
        <Dropdown info={data} handleDelete={(e) => handleDelete(e)} />
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

export default VehCard;
