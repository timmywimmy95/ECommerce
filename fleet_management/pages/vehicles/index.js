import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { AiFillCar, AiFillEdit } from 'react-icons/ai';
import { FaMotorcycle } from 'react-icons/fa';
import { RiAddFill } from 'react-icons/ri';
import Link from 'next/link';
import { useRouter } from 'next/router';
import VehSvcCard from '@/components/VehCard';
import { display } from '@mui/system';

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
  // console.log(vehicles);
  const keys = Object.keys(vehicles[0]);
  const searchFilterKeys = keys.filter(
    (key) => key !== 'id' && key !== 'created_at'
  );

  const [query, setQuery] = useState('');
  const [filterBy, setFilterBy] = useState(searchFilterKeys[0]);
  let filteredVehicles = vehicles.filter((vehicle) => {
    switch (filterBy) {
      case 'year':
        return String(vehicle[filterBy]).includes(query);
        break;
      case 'coe':
        let coeDate = new Date(vehicle[filterBy]);
        let coeMonth = coeDate.toLocaleString('default', { month: 'short' });
        let coeDay = ('0' + coeDate.getDate()).slice(-2);
        let coeYear = coeDate.getFullYear();
        let returnedCOEDate = `${coeDay} ${coeMonth} ${coeYear}`;
        // console.log(returnedDate, 'coe');
        return returnedCOEDate.includes(query);
        break;
      case 'road_tax':
        let RTDate = new Date(vehicle[filterBy]);
        let RTMonth = RTDate.toLocaleString('default', { month: 'short' });
        let RTDay = ('0' + RTDate.getDate()).slice(-2);
        let RTYear = RTDate.getFullYear();
        let returnedRTDate = `${RTDay} ${RTMonth} ${RTYear}`;
        // console.log(returnedDate, 'coe');
        return returnedRTDate.includes(query);
        break;
      default:
        return vehicle[filterBy].includes(query);
        break;
    }
  });
  let displayedVehicles =
    filteredVehicles.length !== 0 ? filteredVehicles : vehicles;
  console.log(filteredVehicles, query, filterBy);

  // console.log(filteredVehicles, filterBy, query, 'filtered veh');

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
          <div className='w-11/12 m-auto mt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 md:gap-0'>
            <input
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              type='text'
              placeholder='Search...'
            />
            <select
              name='filterBy'
              id='filterBy'
              placeholder='Search By'
              className='p-4 block w-1/5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
              onChange={(e) => {
                setFilterBy(e.target.value);
              }}
            >
              {searchFilterKeys.map((key) => {
                return <option key={key}>{key}</option>;
              })}
            </select>
          </div>

          {displayedVehicles.map((vehicle) => {
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
