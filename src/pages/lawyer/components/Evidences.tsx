import React, { useState } from 'react';

interface EvidencesProps {
  caseNumber: string;
}

const Evidences: React.FC<EvidencesProps> = ({ caseNumber }) => {
  const [evidences, setEvidences] = useState<{ name: string, file?: File }[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setEvidences([...evidences, { name: file.name, file }]);
    }
  };

  return (
    <div>
      <h1 style={{ color: '#0d47a1' }}>Related Evidences</h1>
      <input type="file" onChange={handleFileChange} style={{ marginTop: '20px' }} />
      <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#bbdefb' }}>
            <th style={{ padding: '10px' }}>File Name</th>
          </tr>
        </thead>
        <tbody>
          {evidences.map((evidence, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', backgroundColor: 'white' }}>{evidence.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Evidences;
