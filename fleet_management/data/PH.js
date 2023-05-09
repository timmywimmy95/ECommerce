// Public Holidays object for year 2023 in Singapore
const publicHolidays = {
  '2023-01-01': "New Year's Day",
  '2023-01-02': "New Year's Day Holiday",
  '2023-01-23': 'Chinese New Year',
  '2023-01-24': 'Chinese New Year',
  '2023-01-25': 'Chinese New Year',
  '2023-04-14': 'Good Friday',
  '2023-05-01': 'Labour Day',
  '2023-05-29': 'Vesak Day',
  '2023-06-25': 'Hari Raya Puasa',
  '2023-08-09': 'National Day',
  '2023-09-02': 'Hari Raya Haji',
  '2023-10-18': 'Deepavali',
  '2023-12-25': 'Christmas Day',
};

// Array to hold the long weekends
export const longWeekends = [];

// Loop through each public holiday
Object.keys(publicHolidays).forEach((holiday) => {
  // Convert the holiday string to a Date object
  const holidayDate = new Date(holiday);

  // Check if the holiday falls on a Friday or Monday
  if (holidayDate.getDay() === 5 || holidayDate.getDay() === 1) {
    // If the holiday falls on a Friday or Monday, add it to the long weekends array
    longWeekends.push({
      date: holidayDate,
      holiday: publicHolidays[holiday],
    });
  }
});
