import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Summary from './Summary.tsx';
import Evidences from './Evidences.tsx';
import HearingDates from './HearingDates.tsx';
import References from './References.tsx';

const CaseDetailsPage: React.FC = () => {
  const { caseNumber } = useParams();
  const [selectedMenu, setSelectedMenu] = useState('summary');

  const renderContent = () => {
    switch (selectedMenu) {
      case 'summary':
        return <Summary caseNumber={caseNumber!} />;
      case 'evidences':
        return <Evidences caseNumber={caseNumber!} />;
      case 'hearing':
        return <HearingDates caseNumber={caseNumber!} />;
      case 'references':
        return <References caseNumber={caseNumber!} />;
      default:
        return <Summary caseNumber={caseNumber!} />;
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f5faff' }}>
      {/* Sidebar */}
      <div style={{ width: '260px', backgroundColor: '#0d47a1', color: 'white', padding: '20px' }}>
        <h2 style={{ marginBottom: '40px'}}>Case {caseNumber}</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <button className={`nav-link ${selectedMenu === 'summary' ? 'active' : ''}`} onClick={() => setSelectedMenu('summary')}>Case Details & Summary</button>
          <button className={`nav-link ${selectedMenu === 'evidences' ? 'active' : ''}`} onClick={() => setSelectedMenu('evidences')}>Related Evidences</button>
          <button className={`nav-link ${selectedMenu === 'hearing' ? 'active' : ''}`} onClick={() => setSelectedMenu('hearing')}>Hearing Dates</button>
          <button className={`nav-link ${selectedMenu === 'references' ? 'active' : ''}`} onClick={() => setSelectedMenu('references')}>References & Related Cases</button>
        </nav>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        {renderContent()}
      </div>

      {/* Inline styles for buttons */}
      <style>
        {`
          .nav-link {
            background: none;
            border: none;
            color: white;
            text-align: left;
            padding: 10px 15px;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.2s ease;
          }
          .nav-link:hover {
            background-color: #1565c0;
          }
          .active {
            background-color: #1565c0;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
};

export default CaseDetailsPage;
