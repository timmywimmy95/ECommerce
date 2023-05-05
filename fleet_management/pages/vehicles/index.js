import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { AiFillCar, AiFillEdit } from 'react-icons/ai';
import { FaMotorcycle } from 'react-icons/fa';
import { RiAddFill } from 'react-icons/ri';
import Link from 'next/link';
import { useRouter } from 'next/router';
import VehSvcCard from '@/components/VehCard';

const handleEvent = (
  e,
  params, // GridRowParams
  event, // MuiEvent<React.MouseEvent<HTMLElement>>
  details // GridCallbackDetails
) => {
  const router = useRouter();
  e.preventDefault();
  router.push('/');
};

const vehicles = ({ vehicles }) => {
  const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];

  const columns = [
    { field: 'col2', headerName: 'License Plate', width: 150 },
    { field: 'col3', headerName: 'Mileage (km)', width: 200 },
    { field: 'col4', headerName: 'Last Serviced', width: 200 },
    { field: 'col5', headerName: 'Mileage Left', width: 200 },
    {
      width: 60,
      renderCell: () => (
        <>
          <Link href='/'>
            <AiFillEdit />
            {/* Insert conditional rendering, car or bike */}
          </Link>
        </>
      ),
    },
  ];

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between p-4'>
        <h2 className='font-bold text-lg'>Vehicle Records</h2>
        <Link href='/vehicles/add_vehicle'>
          <button className='flex items-center bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded'>
            <RiAddFill />
            <h2>Add Vehicle</h2>
          </button>
        </Link>
      </div>

      <div className='p-4'>
        <div className='flex flex-wrap justify-between w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          {vehicles.map((vehicle) => {
            return (
              <div key={vehicle.id}>
                <VehSvcCard data={vehicle} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default vehicles;

export async function getServerSideProps() {
  const vehRes = await fetch('http://localhost:3000/api/vehicles');
  const vehData = await vehRes.json();

  return {
    props: {
      vehicles: vehData,
    },
  };
}
