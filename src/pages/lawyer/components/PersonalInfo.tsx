import React from 'react';

const PersonalInfo: React.FC = () => {
  const lawyer = {
    name: "John Doe",
    dob: "1985-06-15",
    address: "123 Legal Street, New Delhi, India",
    experience: 10,
    totalCases: 250,
    casesWon: 180
  };

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '30px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h1 style={{ color: '#0d47a1' }}>Personal Information</h1>
      <p><strong>Name:</strong> {lawyer.name}</p>
      <p><strong>Date of Birth:</strong> {lawyer.dob}</p>
      <p><strong>Address:</strong> {lawyer.address}</p>
      <p><strong>Years of Experience:</strong> {lawyer.experience}</p>
      <p><strong>Total Cases:</strong> {lawyer.totalCases}</p>
      <p><strong>Cases Won:</strong> {lawyer.casesWon}</p>
    </div>
  );
};

export default PersonalInfo;
