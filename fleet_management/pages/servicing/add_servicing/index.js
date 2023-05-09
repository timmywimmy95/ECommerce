import React, { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const addServicing = () => {
  const [license_plate, setLicensePlate] = useState('');
  const [servicedate, setServiceDate] = useState('');
  const [description, setDescription] = useState('');
  const [mileage, setMileage] = useState('');
  const [cost, setCost] = useState('');
  const [status, setStatus] = useState('');
  const [records, setRecords] = useState([]);

  let plates = [];
  async function licensePlates() {
    const options = {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    };
    await fetch(`http://localhost:3000/api/vehicles/`, options)
      .then((res) => res.json())
      .then((data) => {
        data.map((plate) => {
          return plates.push(plate.license_plate);
        });
        setRecords(plates);
      });
  }
  useEffect(() => {
    licensePlates();
  }, []);

  const router = useRouter();

  const handleCancel = (e) => {
    e.preventDefault();
    router.push('/servicing');
  };

  return (
    <form action={`http://localhost:3000/api/servicing`} method='POST'>
      <div className='py-3 px-8 '>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Add New Service
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            Please register your vehicle prior to adding a new servicing.
          </p>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-4'>
              <label
                htmlFor='license_plate'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Vehicle Number
              </label>
              <div className='mt-2'>
                <select
                  id='license_plate'
                  name='license_plate'
                  autoComplete='license_plate'
                  className='p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                  onChange={(e) => {
                    setLicensePlate(e.target.value);
                  }}
                >
                  {records.map((record) => {
                    return <option key={record}>{record}</option>;
                  })}
                  {/* <option>{plates[0]}</option> */}
                </select>
              </div>
            </div>

            <div className='sm:col-span-4'>
              <label
                htmlFor='status'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Status
              </label>
              <div className='mt-2'>
                <select
                  id='status'
                  name='status'
                  autoComplete='status'
                  className='p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                >
                  <option>Available</option>
                  <option>In Service</option>
                </select>
              </div>
            </div>
            <div className='sm:col-span-4'>
              <label
                htmlFor='servicedate'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Service Date
              </label>
              <div className='mt-2'>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md'>
                  <input
                    type='date'
                    name='servicedate'
                    id='servicedate'
                    autoComplete='servicedate'
                    className='p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                    value={servicedate}
                    onChange={(e) => {
                      setServiceDate(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Servicing Information
          </h2>
          {/* <p className='mt-1 text-sm leading-6 text-gray-600'>asdasd </p> */}

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-4'>
              <label
                htmlFor='description'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Description
              </label>
              <p className='mt-1 text-sm leading-6 text-gray-400'>
                Please limit it to 100 characters.
              </p>
              <div className='mt-2'>
                <textarea
                  type='text'
                  name='description'
                  id='description'
                  autoComplete='description'
                  className='p-4 block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className='sm:col-span-4'>
              <label
                htmlFor='mileage'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Mileage
              </label>
              <div className='flex mt-2'>
                <input
                  id='mileage'
                  name='mileage'
                  type='mileage'
                  autoComplete='mileage'
                  className='p-4 block w-3/6 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'
                  value={mileage}
                  onChange={(e) => {
                    setMileage(e.target.value);
                  }}
                />
                <span className='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-l-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600'>
                  Km
                </span>
              </div>
            </div>

            <div className='sm:col-span-4'>
              <label
                htmlFor='cost'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Cost
              </label>
              <div className='flex mt-2'>
                <span className='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600'>
                  $
                </span>
                <input
                  type='text'
                  name='cost'
                  id='cost'
                  autoComplete='cost'
                  className='p-4 w-3/6 block rounded-none rounded-r-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                  value={cost}
                  onChange={(e) => {
                    setCost(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='my-6 flex items-center justify-center gap-x-6'>
        <button
          type='button'
          className='text-sm font-semibold leading-6 text-gray-900'
          onClick={handleCancel}
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

export default addServicing;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
