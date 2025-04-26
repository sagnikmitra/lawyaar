import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LawyerLogin from './LawyerLogin';
import LawyerRegister from './LawyerRegister';

const LawyerDashboard: React.FC = () => {
  return (
    <Routes>
      <Route path="login" element={<LawyerLogin />} />
      <Route path="register" element={<LawyerRegister />} />
      <Route index element={<div className="py-20 text-center">Lawyer Dashboard - Coming Soon</div>} />
    </Routes>
  );
};

export default LawyerDashboard;