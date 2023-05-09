import React from 'react';
import TopCard from './TopCard';
import { longWeekends } from '../data/PH';

const TopCards = () => {
  console.log(longWeekends, 'lgwkend');
  const upcomingLgWkend = longWeekends.find((holiday) => {
    return holiday.date > new Date();
  });

  return (
    <div className='grid lg:grid-cols-3 gap-4 p-4'>
      <TopCard
        className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'
        figure={upcomingLgWkend.holiday}
        addLine={`${upcomingLgWkend.date.getDate()}-${
          upcomingLgWkend.date.getMonth() + 1
        }-${upcomingLgWkend.date.getFullYear()}`}
        title='Upcoming Long Weekend'
      />
      <TopCard
        className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'
        title='YTD Revenue'
        figure='1,437'
        percentage='+11'
      />

      <TopCard
        className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'
        title='Customers'
        figure='11,000'
        percentage='+5'
      />
    </div>
  );
};

export default TopCards;
