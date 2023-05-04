import React from 'react';

const addServicing = () => {
  return (
    <form>
      <div className='py-3 px-8 '>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Add New Service
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>asdasd </p>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-4'>
              <label
                htmlFor='username'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Vehicle Number
              </label>
              <div className='mt-2'>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md'>
                  <input
                    type='text'
                    name='username'
                    id='username'
                    autoComplete='username'
                    className='p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                    placeholder='Do not leave spacing'
                  />
                </div>
              </div>
            </div>
            <div className='sm:col-span-4'>
              <label
                htmlFor='username'
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
          <p className='mt-1 text-sm leading-6 text-gray-600'>asdasd </p>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-4'>
              <label
                htmlFor='first-name'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Description
              </label>
              <p className='mt-1 text-sm leading-6 text-gray-400'>
                Please limit it to 100 characters.{' '}
              </p>
              <div className='mt-2'>
                <textarea
                  type='text'
                  name='first-name'
                  id='first-name'
                  autoComplete='given-name'
                  className='p-4 block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-4'>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Mileage
              </label>
              <div className='mt-2'>
                <input
                  id='mileage'
                  name='mileage'
                  type='mileage'
                  autoComplete='email'
                  className='p-4 block w-3/6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400    sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-4'>
              <label
                htmlFor='last-name'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Cost
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  autoComplete='family-name'
                  className='p-4 w-3/6 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Notifications
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            We'll always let you know about important changes, but you pick what
            else you want to hear about.
          </p>

          <div className='mt-10 space-y-10'>
            <fieldset>
              <legend className='text-sm font-semibold leading-6 text-gray-900'>
                By Email
              </legend>
              <div className='mt-6 space-y-6'>
                <div className='relative flex gap-x-3'>
                  <div className='flex h-6 items-center'>
                    <input
                      id='comments'
                      name='comments'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                    />
                  </div>
                  <div className='text-sm leading-6'>
                    <label
                      htmlFor='comments'
                      className='font-medium text-gray-900'
                    >
                      Comments
                    </label>
                    <p className='text-gray-500'>
                      Get notified when someones posts a comment on a posting.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div> */}
      </div>

      <div className='my-6 flex items-center justify-center gap-x-6'>
        <button
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

export default addServicing;
