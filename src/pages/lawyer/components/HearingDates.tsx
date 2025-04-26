import React, { useState } from 'react';

interface HearingDatesProps {
  caseNumber: string;
}

const sampleHearings = [
  { date: '2025-03-15', summary: 'First hearing done. Judge asked for more evidence.' },
  { date: '2025-04-20', summary: 'Second hearing. Witnesses presented.' },
  { date: '2025-05-18', summary: 'Upcoming hearing planned.' }
];

const HearingDates: React.FC<HearingDatesProps> = ({ caseNumber }) => {
  const [selectedDate, setSelectedDate] = useState(sampleHearings[1].date); // latest past hearing
  const [summaries, setSummaries] = useState(sampleHearings);

  const handleSummaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSummaries(summaries.map(h => h.date === selectedDate ? { ...h, summary: e.target.value } : h));
  };

  const currentSummary = summaries.find(h => h.date === selectedDate)?.summary || '';

  return (
    <div>
      <h1 style={{ color: '#0d47a1' }}>Hearing Dates</h1>
      <select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} style={{ marginTop: '20px', padding: '8px', borderRadius: '5px' }}>
        {summaries.map(h => (
          <option key={h.date} value={h.date}>
            {h.date}
          </option>
        ))}
      </select>
      <div style={{ marginTop: '20px' }}>
        <textarea 
          value={currentSummary}
          onChange={handleSummaryChange}
          style={{ width: '100%', height: '150px', padding: '10px', borderRadius: '10px' }}
        />
      </div>
    </div>
  );
};

export default HearingDates;
