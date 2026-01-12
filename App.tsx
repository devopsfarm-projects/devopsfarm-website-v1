import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { TechStack } from './components/TechStack';
import { Services } from './pages/Services';
import { Stats } from './components/Stats';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { Industries } from './pages/Industries';
import { Testimonials } from './components/Testimonials';
import { CaseStudies } from './pages/CaseStudies';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ServiceDetail } from './pages/ServiceDetail';
import { SubServiceDetail } from './pages/SubServiceDetail';
import { Contact } from './pages/Contact';
import { ServicesPage } from './pages/ServicesPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { CaseStudyDetail } from './pages/CaseStudyDetail';
import { AboutUs } from './pages/AboutUs';
import { BankingIndustryPage } from './pages/BankingIndustryPage';
import { NotFound } from './pages/NotFound';
import { CareersPage } from './pages/CareersPage';
import { SaasIndustryPage } from './pages/SaasIndustryPage';
import { HealthTechIndustryPage } from './pages/HealthTechIndustryPage';
import { HpcIndustryPage } from './pages/HpcIndustryPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetail } from './pages/BlogDetail'; 
import { FintechIndustryPage } from './pages/FintechIndustryPage';
import { EdTechIndustryPage } from './pages/EdTechIndustryPage';
import { HomeValueProp } from './components/HomeValueProp';
import ScrollToTop from './components/ScrollToTop';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { CookiePolicy } from './pages/CookiePolicy';
import HomePage from './pages/homePage';



const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/services/:serviceId/:subServiceId" element={<SubServiceDetail />} />
            <Route path="/industries/saas" element={<SaasIndustryPage />} />
            <Route path="/industries/healthtech" element={<HealthTechIndustryPage />} />
            <Route path="/industries/hpc" element={<HpcIndustryPage />} />
            <Route path="/industries/fintech" element={<FintechIndustryPage />} />
            <Route path="/industries/edtech" element={<EdTechIndustryPage />} />
            <Route path="/industries/banking" element={<BankingIndustryPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetail />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <MobileStickyCTA />
      </div>
    </Router>
  );
};

export default App;