import React from 'react';
import TopCard from './TopCard';
import { longWeekends } from '../data/PH';

const TopCards = ({ figures }) => {
  console.log(figures, 'fig');
  const upcomingLgWkend = longWeekends.find((holiday) => {
    return holiday.date > new Date();
  });

  return (
    <div className='grid lg:grid-cols-3 gap-4 p-4'>
      {/* <TopCard
        className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'
        figure={upcomingLgWkend.holiday}
        addLine={`${upcomingLgWkend.date.getDate()}-${
          upcomingLgWkend.date.getMonth() + 1
        }-${upcomingLgWkend.date.getFullYear()}`}
        title='Upcoming Long Weekend'
        color='yellow'
      /> */}
      <TopCard
        className='lg:col-span-2 col-span-1 bg-white w-full border p-4 rounded-lg'
        color='green'
        title='Up to Date'
        figure={figures[0].uptodate}
        percentage={Math.round((figures[0].uptodate / figures[0].total) * 100)}
      />
      <TopCard
        className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'
        color='red'
        title='Overdue'
        figure={figures[0].overdue}
        percentage={Math.round((figures[0].overdue / figures[0].total) * 100)}
      />

      <TopCard
        className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'
        title='Upcoming Svc'
        figure={figures[0].upcoming}
        percentage={Math.round((figures[0].upcoming / figures[0].total) * 100)}
        color='yellow'
      />
    </div>
  );
};

export default TopCards;
