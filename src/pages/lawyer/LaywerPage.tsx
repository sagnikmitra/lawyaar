import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const LawyerPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f5faff' }}>
      {/* Sidebar */}
      <div style={{ width: '260px', backgroundColor: '#0d47a1', color: 'white', padding: '20px' }}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <NavLink 
            to="personal-info"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Personal Info
          </NavLink>
          <NavLink 
            to="ongoing-cases"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Ongoing Cases
          </NavLink>
          <NavLink 
            to="calendar"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Calendar
          </NavLink>
          <NavLink 
            to="completed-cases"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Completed Cases
          </NavLink>
        </nav>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        <Outlet />
      </div>

      {/* Inline styles for NavLink */}
      <style>
        {`
          .nav-link {
            color: white;
            text-decoration: none;
            padding: 10px 15px;
            border-radius: 8px;
            font-size: 16px;
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

export default LawyerPage;
