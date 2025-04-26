import React from 'react';
import cases from '../../../resources/cases.json';

interface SummaryProps {
  caseNumber: string;
}

const Summary: React.FC<SummaryProps> = ({ caseNumber }) => {
  const caseData = cases.find(c => c.caseNumber === caseNumber);

  if (!caseData) return <p>Case not found</p>;

  return (
    <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h1 style={{ color: '#0d47a1' }}>{caseData.title}</h1>
      <p><strong>Start Date:</strong> 12-03-2025</p>
      <p><strong>Current Status:</strong> {caseData.status}</p>
      <p><strong>Next Hearing Date:</strong> {caseData.nextHearing || "N/A"}</p>
    </div>
  );
};

export default Summary;
