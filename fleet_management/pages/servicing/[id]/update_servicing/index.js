import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import Head from 'next/head';

const updateServicing = ({ servicing, session }) => {
  let date = new Date(servicing.servicedate);
  let month = ('0' + (date.getMonth() + 1)).slice(-2);
  let day = ('0' + date.getDate()).slice(-2);
  let year = date.getFullYear();
  console.log(servicing);

  const [license_plate, setLicensePlate] = useState(servicing.license_plate);
  const [servicedate, setServiceDate] = useState(`${year}-${month}-${day}`);
  const [description, setDescription] = useState(servicing.description);
  const [mileage, setMileage] = useState(servicing.mileage);
  const [cost, setCost] = useState(servicing.cost);
  const [status, setStatus] = useState(servicing.status);
  const [records, setRecords] = useState([]);

  const router = useRouter();
  let plates = [];

  async function updateServicing(e) {
    e.preventDefault();
    const options = {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        license_plate: license_plate,
        servicedate: servicedate,
        description: description,
        mileage: mileage,
        cost: cost,
        status: status,
      }),
    };
    await fetch(`http://localhost:3000/api/servicing/${servicing.id}`, options)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          router.push('/servicing');
        }
      });
  }
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

  return (
    <>
      <Head>
        <title>Update Servicing</title>
      </Head>
      <form onSubmit={updateServicing}>
        <div className='py-3 px-8 '>
          <div className='border-b border-gray-900/10 pb-12'>
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              Update Servicing Records
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
                    value={license_plate}
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
            onClick={() => {
              router.push('http://localhost:3000/servicing/');
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
    </>
  );
};

export default updateServicing;

export async function getServerSideProps(context) {
  let { id } = context.query;
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const res = await fetch(`http://localhost:3000/api/servicing/${id}`);
  const data = await res.json();

  return {
    props: {
      servicing: data,
      session,
    },
  };
}

// export async function getServerSideProps({ req }) {
//   const session = await getSession({ req });
//   if (!session) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//     },
//   };
// }
