import { CaseStudies } from "@/pages/CaseStudies";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { HomeValueProp } from "@/components/HomeValueProp";
import { Industries } from "@/pages/Industries";
import { Process } from "@/components/Process";
import { Services } from "@/pages/Services";
import { Stats } from "@/components/Stats";
import { TechStack } from "@/components/TechStack";
import { Testimonials } from "@/components/Testimonials";
import { TrustSection } from "@/components/TrustSection";
import { WhyUs } from "@/components/WhyUs";
import React from "react";



const HomePage: React.FC = ()=>{
return(
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
)
}

export default HomePage;