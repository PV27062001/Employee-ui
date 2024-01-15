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


//   import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// interface CalendarComponentProps {
//   selectedDate: Date;
//   onDateChange: (date: Date) => void;
// }

// const CalendarComponent: React.FC<CalendarComponentProps> = ({ selectedDate, onDateChange }) => {
//   const handleDateChange = (date: Date) => {
//     onDateChange(date);
//   };

//   return (
//     <div className="calendar-container">
//       <label>Date of Birth:</label>
//       <DatePicker
//         selected={selectedDate}
//         onChange={handleDateChange}
//         dateFormat="MMMM yyyy"
//         inline
//         showMonthYearPicker
//       />
//     </div>
//   );
// };

// export default CalendarComponent;
