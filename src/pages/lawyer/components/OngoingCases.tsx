import React from 'react';
import { useNavigate } from 'react-router-dom';
import cases from '../../../resources/cases.json';

const OngoingCases: React.FC = () => {
  const navigate = useNavigate();
  const ongoingCases = cases.filter(c => c.status === 'ongoing');

  return (
    <div>
      <h1 style={{ color: '#0d47a1', marginBottom: '20px' }}>Ongoing Cases</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {ongoingCases.map((caseItem) => (
          <div
            key={caseItem.caseNumber}
            onClick={() => navigate(`/case/${caseItem.caseNumber}`)}
            style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '20px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <h3 style={{ color: '#1565c0' }}>{caseItem.title}</h3>
            <p><strong>Case No:</strong> {caseItem.caseNumber}</p>
            <p><strong>Next Hearing:</strong> {caseItem.nextHearing}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OngoingCases;
