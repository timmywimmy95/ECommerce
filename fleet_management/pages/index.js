import Head from 'next/head';
// import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from '../styles/Home.module.css';
import { getSession, useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import TopCards from '@/components/TopCards';
import BarChart from '@/components/BarChart';
import RecentOrders from '@/components/UpcomingServicings';
import LandingPageNav from '@/components/LandingPageNav';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // const [session, setSession] = useState(false);
  // const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <main className='bg-gray-100 min-h-screen overflow-hidden'>
        <LandingPageNav />
        <HeroSection />
        <Features />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}

// function Guest() {
//   return (
//     <main className='container mx-auto text-center py-20'>
//       <h3 className='text-4xl font-bold'>Guest Homepage</h3>

//       <div className='flex justify-center'>
//         <Link
//           href={'/login'}
//           className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'
//         >
//           Sign In
//         </Link>
//       </div>
//     </main>
//   );
// }

// function User({ session }) {
//   console.log(session);
//   return (
//     <main className='container mx-auto text-center py-20'>
//       <h3 className='text-4xl font-bold'>Authorize User Homepage</h3>

//       <div className='details'>
//         <h3>Signed in as {session.user.username}</h3>
//         <h5>Your email is {session.user.email}</h5>
//       </div>

//       <div className='flex justify-center'>
//         <button
//           onClick={() => signOut()}
//           className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50'
//         >
//           Sign Out
//         </button>
//       </div>

//       <div className='flex justify-center'>
//         <Link
//           href={'/profile'}
//           className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'
//         >
//           Profile Page
//         </Link>
//       </div>
//     </main>
//   );
// }

export async function getServerSideProps({ req }) {
  //This function protects the current file from being viewed.

  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
