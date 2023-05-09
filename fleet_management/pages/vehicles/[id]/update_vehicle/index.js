import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';

const updateServicing = ({ vehicle }) => {
  let coe_date = new Date(vehicle.coe);
  let coe_month = ('0' + (coe_date.getMonth() + 1)).slice(-2);
  let coe_day = ('0' + coe_date.getDate()).slice(-2);
  let coe_year = coe_date.getFullYear();

  let road_tax_date = new Date(vehicle.road_tax);
  let road_tax_month = ('0' + (road_tax_date.getMonth() + 1)).slice(-2);
  let road_tax_day = ('0' + road_tax_date.getDate()).slice(-2);
  let road_tax_year = road_tax_date.getFullYear();

  const [type, setType] = useState(vehicle.type);
  const [make, setMake] = useState(vehicle.make);
  // const [servicedate, setServiceDate] = useState(`${year}-${month}-${day}`);
  const [model, setModel] = useState(vehicle.model);
  const [year, setYear] = useState(vehicle.year);
  const [coe, setCOE] = useState(`${coe_year}-${coe_month}-${coe_day}`);
  const [road_tax, setRoadTax] = useState(
    `${road_tax_year}-${road_tax_month}-${road_tax_day}`
  );
  const [license_plate, setLicensePlate] = useState(vehicle.license_plate);

  const router = useRouter();
  let plates = [];

  async function updateServicing(e) {
    e.preventDefault();
    const options = {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        type: type,
        model: model,
        make: make,
        year: year,
        coe: coe,
        road_tax: road_tax,
        license_plate: license_plate,
      }),
    };
    await fetch(`http://localhost:3000/api/vehicles/${vehicle.id}`, options)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          router.push('/vehicles');
        }
      });
  }
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
    <form onSubmit={updateServicing}>
      <div className='py-3 px-8 '>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Update Vehicle Records
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
                  id='license_plate'
                  name='license_plate'
                  autoComplete='license_plate'
                  className='p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  value={license_plate}
                  onChange={(e) => {
                    setLicensePlate(e.target.value);
                  }}
                >
                  {/* {records.map((record) => {
                    return <option key={record}>{record}</option>;
                  })} */}
                  {/* <option>{plates[0]}</option> */}
                </input>
              </div>
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='type'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Type
              </label>
              <div className='mt-2 '>
                <select
                  id='type'
                  name='type'
                  autoComplete='type'
                  className='p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
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
                htmlFor='servicedate'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                COE Date
              </label>
              <div className='mt-2'>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 '>
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
              </div>
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='servicedate'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Road Tax Date
              </label>
              <div className='mt-2'>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300'>
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
            <div className='sm:col-span-2'>
              <label
                htmlFor='servicedate'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Make
              </label>
              <div className='mt-2'>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md'>
                  <input
                    type='text'
                    name='make'
                    id='make'
                    autoComplete='make'
                    className='p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                    value={make}
                    onChange={(e) => {
                      setMake(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='servicedate'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Model
              </label>
              <div className='mt-2'>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md'>
                  <input
                    type='text'
                    name='model'
                    id='model'
                    autoComplete='model'
                    className='p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                    value={model}
                    onChange={(e) => {
                      setModel(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='servicedate'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Year
              </label>
              <div className='mt-2'>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md'>
                  <input
                    type='number'
                    name='year'
                    id='year'
                    autoComplete='year'
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

export default updateServicing;

export async function getServerSideProps(context) {
  let { id } = context.query;
  const session = await getSession(context.req);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const res = await fetch(`http://localhost:3000/api/vehicles/${id}`);
  const data = await res.json();

  return {
    props: {
      vehicle: data,
    },
  };
}
