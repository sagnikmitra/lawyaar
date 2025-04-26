import React from 'react';

interface ReferencesProps {
  caseNumber: string;
}

const References: React.FC<ReferencesProps> = ({ caseNumber }) => {
  const relatedCases = [
    { title: "State vs A (2020)", description: "Similar criminal defense case about theft." },
    { title: "XYZ Ltd vs ABC Ltd (2018)", description: "Corporate dispute over breach of contract." }
  ];

  return (
    <div>
      <h1 style={{ color: '#0d47a1' }}>References and Related Cases</h1>
      <ul style={{ marginTop: '20px', listStyle: 'none', paddingLeft: '0' }}>
        {relatedCases.map((r, idx) => (
          <li key={idx} style={{ backgroundColor: 'white', padding: '15px', marginBottom: '10px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
            <h3 style={{ marginBottom: '5px', color: '#1565c0' }}>{r.title}</h3>
            <p>{r.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default References;
