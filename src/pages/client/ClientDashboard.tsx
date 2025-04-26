import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClientLogin from './ClientLogin';
import ClientRegister from './ClientRegister';

const ClientDashboard: React.FC = () => {
  return (
    <Routes>
      <Route path="login" element={<ClientLogin />} />
      <Route path="register" element={<ClientRegister />} />
      <Route index element={<div className="py-20 text-center">Client Dashboard - Coming Soon</div>} />
    </Routes>
  );
};

export default ClientDashboard;