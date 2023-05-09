import React from 'react';

const TopCard = ({ title, figure, percentage, addLine }) => {
  return (
    <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
      <div className='flex flex-col w-full pb-4'>
        <p className='text-2xl font-bold'>{figure}</p>

        <p className='text-gray-600'>{title}</p>
      </div>
      {addLine ? (
        <p className='bg-yellow-100 flex justify-center items-center p-4 rounded-lg'>
          <span className='text-gray-600 text-lg'>{addLine}</span>
        </p>
      ) : (
        <></>
      )}
      {percentage ? (
        <>
          <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
            <span className='text-green-700 text-lg'>{percentage}%</span>
          </p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TopCard;
