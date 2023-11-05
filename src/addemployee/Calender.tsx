import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarComponent: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date()); 

  const handleDateChange = (date: Date) => { 
    setSelectedDate(date);
  };

  return (
    <div className="calendar-container">
      <label>Date of Birth:</label>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MMMM yyyy"
        inline
        showMonthYearPicker
      />
    </div>
  );
};

export default CalendarComponent;
