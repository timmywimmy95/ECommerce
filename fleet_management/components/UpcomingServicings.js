import React from 'react';

import TableData from './TableData.js';

const UpcomingServicings = ({ updatedVehicles }) => {
  console.log(updatedVehicles);
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-y-scroll'>
      <h1>Upcoming Vehicles For Servicing</h1>
      <ul>
        {updatedVehicles.map((vehicle, id) =>
          vehicle.status === null ? null : (
            <TableData vehicle={vehicle} key={id} />
          )
        )}
      </ul>
    </div>
  );
};

export default UpcomingServicings;
