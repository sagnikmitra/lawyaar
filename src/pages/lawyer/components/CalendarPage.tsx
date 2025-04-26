import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default react-calendar styling
import cases from '../../../resources/cases.json';

const CalendarPage: React.FC = () => {
  const [date, setDate] = useState(new Date());

  const hearingDates = cases.map(c => new Date(c.nextHearing));

  const tileClassName = ({ date, view }: any) => {
    if (view === 'month') {
      if (hearingDates.find(d => d.toDateString() === date.toDateString())) {
        return 'highlight';
      }
    }
    return null;
  };

  return (
    <div>
      <h1 style={{ color: '#0d47a1', marginBottom: '20px' }}>Calendar</h1>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={tileClassName}
      />
      <style>
        {`
          .highlight {
            background: #bbdefb !important;
            border-radius: 50%;
          }
        `}
      </style>
    </div>
  );
};

export default CalendarPage;
