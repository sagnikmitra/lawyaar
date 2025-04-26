import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LawyerLogin from './LawyerLogin';
import LawyerRegister from './LawyerRegister';
import LawyerPage from './LaywerPage';

import PersonalInfo from './components/PersonalInfo';
import OngoingCases from './components/OngoingCases';
import CompletedCases from './components/CompletedCases';
import CalendarPage from './components/CalendarPage';
import CaseDetails from './components/CaseDetails';

const LawyerDashboard: React.FC = () => {
  return (
    <Routes>
      <Route path="login" element={<LawyerLogin />} />
      <Route path="register" element={<LawyerRegister />} />

      {/* Dashboard Main with Sidebar Layout */}
      <Route path="dashboard" element={<LawyerPage />}>
        <Route path="personal-info" element={<PersonalInfo />} />
        <Route path="ongoing-cases" element={<OngoingCases />} />
        <Route path="completed-cases" element={<CompletedCases />} />
        <Route path="calendar" element={<CalendarPage />} />
      </Route>

      {/* Case Details Page */}
      <Route path="case/:caseNumber" element={<CaseDetails />} />
    </Routes>
  );
};

export default LawyerDashboard;
