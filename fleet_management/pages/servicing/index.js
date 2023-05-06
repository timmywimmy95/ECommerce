import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { AiFillCar } from 'react-icons/ai';
import { FaMotorcycle } from 'react-icons/fa';
import { RiAddFill } from 'react-icons/ri';
import SvcCard from '@/components/SvcCard';
import Link from 'next/link';

const servicing = ({ servicing }) => {
  // console.log(servicing);
  const keys = Object.keys(servicing[0]);
  const keyLabels = {
    servicedate: 'Service Date',
    description: 'Description',
    cost: 'Cost',
    mileage: 'Mileage',
    license_plate: 'License Plate',
  };

  const searchFilterKeys = keys.filter(
    (key) =>
      key === 'servicedate' ||
      key === 'description' ||
      key === 'cost' ||
      key === 'mileage' ||
      key === 'license_plate'
  );
  const beautifiedSearchFilterKeys = searchFilterKeys.map(
    (key) => keyLabels[key]
  );

  const sortOptions = [
    {
      value: 'servicedate-asc',
      label: 'Sort by Service Date (Earliest First)',
    },
    { value: 'servicedate-dsc', label: 'Sort by Service Date (Latest First)' },
    { value: 'cost-asc', label: 'Sort by Cost (Low to High)' },
    { value: 'cost-dsc', label: 'Sort by Cost (High to Low)' },
    { value: 'mileage-asc', label: 'Sort by Mileage (Low to High)' },
    { value: 'mileage-dsc', label: 'Sort by Mileage (High to Low)' },
  ];

  const [query, setQuery] = useState('');
  const [filterBy, setFilterBy] = useState(searchFilterKeys[0]);
  const [selectedSortOption, setSelectedSortOption] = useState(
    sortOptions[1].value
  );
  console.log(searchFilterKeys);
  let filteredServicing = servicing.filter((service) => {
    console.log(filterBy);
    switch (filterBy) {
      case 'Cost':
        return String(service[filterBy]).includes(query);
        break;
      case 'Mileage':
        return String(service[filterBy]).includes(query);
        break;
      case 'Description':
        return String(service[filterBy]).includes(query);
        break;
      case 'servicedate':
        let serviceDate = new Date(service[filterBy]);
        let serviceMonth = serviceDate.toLocaleString('default', {
          month: 'short',
        });
        let serviceDay = ('0' + serviceDate.getDate()).slice(-2);
        let serviceYear = serviceDate.getFullYear();
        let returnedServiceDate = `${serviceDay} ${serviceMonth} ${serviceYear}`;
        // console.log(returnedDate, 'coe');
        return returnedServiceDate.includes(query);
        break;

      default:
        return String(service[filterBy]).includes(query);
        break;
    }
  });
  console.log(filteredServicing);
  let displayedServicing =
    filteredServicing.length !== 0 ? filteredServicing : servicing;
  // console.log(filteredServicing, query, filterBy);

  displayedServicing.sort((a, b) => {
    switch (selectedSortOption) {
      case 'servicedate-asc':
        return new Date(a.servicedate) - new Date(b.servicedate);
      case 'servicedate-dsc':
        return new Date(b.servicedate) - new Date(a.servicedate);
      case 'cost-asc':
        return a.cost - b.cost;
      case 'cost-dsc':
        return b.cost - a.cost;
      case 'mileage-asc':
        return a.mileage - b.mileage;
      case 'mileage-dsc':
        return b.mileage - a.mileage;
      default:
        return 0;
    }
  });
  // console.log(displayedServicing);

  return (
    <>
      <div className='bg-gray-100 min-h-screen'>
        <div className='flex justify-between p-4'>
          <h2 className='font-bold text-lg'>Servicing Records</h2>
          <Link href='/servicing/add_servicing'>
            <button className='flex items-center bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded'>
              <RiAddFill />
              <h2>Add Servicing</h2>
            </button>
          </Link>
        </div>

        <div className='flex justify-between p-4'>
          <div className='flex flex-wrap justify-start w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
            <div className=' w-full m-auto p-4 flex flex-col items-start gap-5 md:gap-0'>
              <input
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                type='text'
                placeholder='Search...'
              />
              <select
                name='filterBy'
                id='filterBy'
                placeholder='Search By'
                className='mt-4 p-4 block w-56 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                onChange={(e) => {
                  setFilterBy(e.target.value);
                }}
              >
                {searchFilterKeys.map((key) => {
                  return <option key={key}>{key}</option>;
                })}
              </select>

              <select
                className='mt-4 p-4 block w-56 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                value={selectedSortOption}
                onChange={(e) => setSelectedSortOption(e.target.value)}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            {displayedServicing.map((service) => {
              return (
                <div key={service.id}>
                  <SvcCard className='w-6' data={service} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default servicing;

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/servicing');
  const data = await res.json();

  return {
    props: {
      servicing: data,
    },
  };
}
