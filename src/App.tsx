import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Layout from './components/layout/Layout';

// Pages
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PracticeAreaPage from './pages/practice-areas/PracticeAreaPage';
import FamilyLawPage from './pages/practice-areas/FamilyLawPage';
import PropertyLawPage from './pages/practice-areas/PropertyLawPage';
import CriminalLawPage from './pages/practice-areas/CriminalLawPage';
import CorporateLawPage from './pages/practice-areas/CorporateLawPage';
import CivilLitigationPage from './pages/practice-areas/CivilLitigationPage';
import TaxLawPage from './pages/practice-areas/TaxLawPage';
import LawyerDashboard from './pages/lawyer/LawyerDashboard';
import ClientDashboard from './pages/client/ClientDashboard';
import NotFound from './pages/NotFound';
import CaseDetails from './pages/lawyer/components/CaseDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="practice-areas" element={<PracticeAreaPage />}>
          <Route path="family-law" element={<FamilyLawPage />} />
          <Route path="property-law" element={<PropertyLawPage />} />
          <Route path="criminal-law" element={<CriminalLawPage />} />
          <Route path="corporate-law" element={<CorporateLawPage />} />
          <Route path="civil-litigation" element={<CivilLitigationPage />} />
          <Route path="tax-law" element={<TaxLawPage />} />
        </Route>
        <Route path="lawyer/*" element={<LawyerDashboard />} />
        <Route path="client/*" element={<ClientDashboard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/case/:caseNumber" element={<CaseDetails />} />
      </Route>
    </Routes>
  );
}

export default App;