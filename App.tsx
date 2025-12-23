import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { TechStack } from './components/TechStack';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { Industries } from './components/Industries';
import { Testimonials } from './components/Testimonials';
import { CaseStudies } from './components/CaseStudies';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ServiceDetail } from './components/ServiceDetail';
import { SubServiceDetail } from './components/SubServiceDetail';
import { Contact } from './components/Contact';
import { ServicesPage } from './components/ServicesPage';
import { CaseStudiesPage } from './components/CaseStudiesPage';
import { CaseStudyDetail } from './components/CaseStudyDetail';
import { AboutUs } from './components/AboutUs';
import { BankingIndustryPage } from './components/BankingIndustryPage';
import { NotFound } from './components/NotFound';
import { CareersPage } from './components/CareersPage';
import { SaasIndustryPage } from './components/SaasIndustryPage';
import { HealthTechIndustryPage } from './components/HealthTechIndustryPage';
import { HpcIndustryPage } from './components/HpcIndustryPage';
import { BlogPage } from './components/BlogPage';
import { BlogDetail } from './components/BlogDetail'; 
import { FintechIndustryPage } from './components/FintechIndustryPage';
import { EdTechIndustryPage } from './components/EdTechIndustryPage';
import { HomeValueProp } from './components/HomeValueProp';
import ScrollToTop from './components/ScrollToTop';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsConditions } from './components/TermsConditions';
import { CookiePolicy } from './components/CookiePolicy';

const HomePage: React.FC = () => (
  <>
    <Hero />
    <TrustSection />
    <HomeValueProp />
    <Services />
    <TechStack />
    <Stats />
    <WhyUs />
    <CaseStudies />
    <Process />
    <Industries />
    <Testimonials />
    <CTA />
  </>
);

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