import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const addVehicle = () => {
  const router = useRouter();
  const [type, setType] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [coe, setCOE] = useState('');
  const [road_tax, setRoadTax] = useState([]);
  const [license_plate, setLicensePlate] = useState([]);

  // let plates = [];
  // async function licensePlates() {
  //   const options = {
  //     method: 'GET',
  //     headers: { 'content-type': 'application/json' },
  //   };
  //   await fetch(`http://localhost:3000/api/vehicles/`, options)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       data.map((plate) => {
  //         return plates.push(plate.license_plate);
  //       });
  //       setRecords(plates);
  //     });
  // }
  // useEffect(() => {
  //   licensePlates();
  // }, []);

  return (
    <form action={`http://localhost:3000/api/vehicles`} method='POST'>
      <div className='py-3 px-8 '>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Add New Vehicle
          </h2>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label
                htmlFor='license_plate'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Vehicle Number
              </label>

              <div className='mt-2'>
                <input
                  type='text'
                  name='license_plate'
                  id='license_plate'
                  autoComplete='license_plate'
                  className='p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                  placeholder='Do not leave any spaces'
                  value={license_plate}
                  onChange={(e) => {
                    setLicensePlate(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='license_plate'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Type of Vehicle
              </label>
              <div className='mt-2 '>
                <select
                  id='type'
                  name='type'
                  autoComplete='type'
                  className='p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  <option>motorcycle</option>
                  <option>car</option>
                </select>
              </div>
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='make'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Make
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='make'
                  id='make'
                  autoComplete='make'
                  className='p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                  placeholder='e.g. Honda / Mercedes Benz'
                  value={make}
                  onChange={(e) => {
                    setMake(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='model'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Model
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='model'
                  id='model'
                  autoComplete='model'
                  className='p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                  placeholder='e.g. Vezel / C180'
                  value={model}
                  onChange={(e) => {
                    setModel(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className='sm:col-span-4'>
              <label
                htmlFor='servicedate'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Year of Manufacture
              </label>
              <div className='mt-2'>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md'>
                  <input
                    type='number'
                    name='year'
                    id='year'
                    autoComplete='year'
                    min='1900'
                    max='2099'
                    step='1'
                    className='p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                    value={year}
                    onChange={(e) => {
                      setYear(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Registration Information
          </h2>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label
                htmlFor='description'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                COE
              </label>
              <input
                type='date'
                name='coe'
                id='coe'
                autoComplete='coe'
                className='p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                value={coe}
                onChange={(e) => {
                  setCOE(e.target.value);
                }}
              />
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='description'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Road Tax
              </label>
              <input
                type='date'
                name='road_tax'
                id='road_tax'
                autoComplete='road_tax'
                className='p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                value={road_tax}
                onChange={(e) => {
                  setRoadTax(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='my-6 flex items-center justify-center gap-x-6'>
        <button
          onClick={() => {
            router.push('http://localhost:3000/vehicles/');
          }}
          type='button'
          className='text-sm font-semibold leading-6 text-gray-900'
        >
          Cancel
        </button>
        <button
          type='submit'
          className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default addVehicle;
