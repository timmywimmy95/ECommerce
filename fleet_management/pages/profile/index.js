import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { getSession, useSession, signOut } from 'next-auth/react';
import Head from 'next/head';

const profile = ({ user, session }) => {
  const router = useRouter();
  let profile = user[0];
  const [username, setUsername] = useState(profile.username);
  const [firstName, setFirstName] = useState(profile.first_name);
  const [lastName, setLastName] = useState(profile.last_name);
  const [email, setEmail] = useState(profile.email);
  const [role, setRole] = useState(profile.role);

  function handleChange(e) {
    switch (e.target.name) {
      case 'first_name':
        setFirstName(e.target.value);
        break;
      case 'last_name':
        setLastName(e.target.value);
        break;
      case 'username':
        setUsername(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'role':
        setRole(e.target.value);
        break;
    }
  }

  const handleSignOut = async () => {
    await signOut({ redirect: false }); // sign the user out and don't redirect
    router.push('/login'); // redirect to the desired page
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const options = {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        username: username,
        role: role,
      }),
    };
    await fetch(`http://localhost:3000/api/users/${profile.id}/`, options)
      .then((res) => res.json())
      .then((data) => {
        // if (!data.error) {
        //   router.push('/profile');
        // }
        signOut({ redirect: '/login' });
        // router.push('/login');
      });
  }

  return (
    <>
      <Head>
        <title>Update Profile</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <div className='py-3 px-8 '>
          <div className='border-b border-gray-900/10 pb-12'>
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              Profile Page
            </h2>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              You will be required to login again after saving your updated
              details.
            </p>

            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-4'>
                <label
                  htmlFor='username'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Username
                </label>
                <div className='mt-2'>
                  <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md'>
                    <input
                      type='text'
                      name='username'
                      id='username'
                      autoComplete='username'
                      className='p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                      value={username}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='py-4 border-b border-gray-900/10'>
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              Personal Information
            </h2>

            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <label
                  htmlFor='first_name'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  First name
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='first_name'
                    id='first_name'
                    autoComplete='given-name'
                    className='p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                    value={firstName ? firstName : ''}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='last_name'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Last name
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='last_name'
                    id='last_name'
                    autoComplete='family-name'
                    className='p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                    value={lastName ? lastName : ''}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='sm:col-span-4'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Email address
                </label>
                <div className='mt-2'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    className='p-4 block w-3/6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400    sm:text-sm sm:leading-6'
                    value={email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='role'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Role
                </label>
                <div className='mt-2 '>
                  <select
                    id='role'
                    name='role'
                    autoComplete='country-name'
                    className='p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                    value={role}
                    onChange={handleChange}
                  >
                    <option>admin</option>
                    <option>user</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* <div className='py-4 border-b border-gray-900/10 pb-12'>
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
            onClick={() => {
              router.push('http://localhost:3000/');
            }}
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

export default profile;

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

  const res = await fetch(`http://localhost:3000/api/users/${session.user.id}`);
  const data = await res.json();

  return {
    props: {
      user: data,
      session,
    },
  };
}
