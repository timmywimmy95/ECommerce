import Head from 'next/head';
// import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from '../../styles/Home.module.css';
import { getSession, useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import TopCards from '@/components/TopCards';
import BarChart from '@/components/BarChart';
import RecentOrders from '@/components/RecentOrders';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ vehicles }) {
  // const [session, setSession] = useState(false);
  const { data: session } = useSession();
  console.log(vehicles);

  useEffect(() => {
    fetch('/api/servicing/update')
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);
        } else {
          console.log(data);
          console.log('Error updating vehicles table');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main className='bg-gray-100 min-h-screen overflow-hidden'>
        <Header />
        {/* {session ? User({ session }) : Guest()} */}
        {
          //TO DO. ADD USER AND GUEST COMPONENT
        }
        <TopCards />
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart />
          <RecentOrders />
        </div>
      </main>

      {/* {Guest()} */}
    </>
  );
}

function Guest() {
  return (
    <main className='container mx-auto text-center py-20'>
      <h3 className='text-4xl font-bold'>Guest Homepage</h3>

      <div className='flex justify-center'>
        <Link
          href={'/login'}
          className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'
        >
          Sign In
        </Link>
      </div>
    </main>
  );
}

function User({ session }) {
  console.log(session);
  return (
    <main className='container mx-auto text-center py-20'>
      <h3 className='text-4xl font-bold'>Authorize User Homepage</h3>

      <div className='details'>
        <h3>Signed in as {session.user.username}</h3>
        <h5>Your email is {session.user.email}</h5>
      </div>

      <div className='flex justify-center'>
        <button
          onClick={() => signOut()}
          className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50'
        >
          Sign Out
        </button>
      </div>

      <div className='flex justify-center'>
        <Link
          href={'/profile'}
          className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'
        >
          Profile Page
        </Link>
      </div>
    </main>
  );
}

export async function getServerSideProps({ req }) {
  //This function protects the current file from being viewed.

  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const res = await fetch(`http://localhost:3000/api/vehicles/`);
  const data = await res.json();

  return {
    props: { session, vehicles: data },
  };
}
