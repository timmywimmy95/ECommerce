import React from 'react';

const TopCard = ({ title, figure, percentage, addLine, color }) => {
  return (
    <div className='bg-white flex w-full justify-evenly border p-4 rounded-lg '>
      <div className='flex-col m-auto w-full justify-center items-center'>
        <p className='text-2xl font-bold'>{figure}</p>
        <p className='text-gray-600'>{title}</p>
      </div>
      <div className='flex justify-evenly w-full'>
        {addLine ? (
          <p
            className={`bg-${color}-100 flex justify-center items-center p-4 rounded-lg`}
          >
            <span className={`text-gray-700 text-lg`}>{addLine}</span>
          </p>
        ) : (
          <></>
        )}
        {percentage ? (
          <>
            <p
              className={`bg-${color}-100 flex w-3/5 text-center justify-center items-center p-2 rounded-lg`}
            >
              <span className={`text-gray-700 text-lg`}>
                {percentage}% <br />
                of fleet
              </span>
            </p>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TopCard;
