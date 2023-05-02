import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { AiFillCar } from 'react-icons/ai';
import { FaMotorcycle } from 'react-icons/fa';
import { RiAddFill } from 'react-icons/ri';
import SvcCard from '@/components/SvcCard';

const servicing = ({ servicing }) => {
  const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];

  const columns = [
    {
      width: 60,
      renderCell: () => (
        <>
          <button>
            <AiFillCar />
            {/* Insert conditional rendering, car or bike */}
          </button>
        </>
      ),
    },
    { field: 'col2', headerName: 'License Plate', width: 150 },
    { field: 'col3', headerName: 'Mileage (km)', width: 200 },
    { field: 'col4', headerName: 'Last Serviced', width: 200 },
    { field: 'col5', headerName: 'Mileage Left', width: 200 },
  ];

  return (
    // <div className='bg-gray-100 min-h-screen'>
    //   <div className='flex justify-between p-4'>
    //     <h2 className='font-bold text-lg'>Servicing</h2>
    //     <button className='flex items-center bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded'>
    //       <RiAddFill />
    //       <h2>Add Servicing</h2>
    //     </button>
    //   </div>

    //   <div className='p-4'>
    //     <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
    //       {/* <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
    //         <span>License Plate</span>
    //         <span>Mileage (km)</span>
    //         <span>Last Serviced</span>
    //         <span>Mileage Left</span>
    //       </div> */}
    //       <DataGrid rows={rows} columns={columns} />
    //     </div>
    //   </div>
    // </div>
    <>
      <div className='flex justify-between p-4'>
        {servicing.map((service) => {
          return (
            <div key={service.id}>
              <SvcCard data={service} />
            </div>
          );
        })}
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
