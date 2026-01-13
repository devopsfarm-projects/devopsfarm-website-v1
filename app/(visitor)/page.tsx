import { CTA } from "@/components/common/CTA.component"
import { Hero } from "@/components/hero.component"
import { HomeValueProp } from "@/components/homeValueProp.component"
import { Process } from "@/components/process.component"
import { Stats } from "@/components/stats.component"
import { TechStack } from "@/components/techStack.component"
import { Testimonials } from "@/components/testimonials.component"
import { TrustSection } from "@/components/trustSection.component"
import { WhyUs } from "@/components/whyUs.component"
import Industries from "@/components/industries.component"
import { CaseStudies } from "@/components/caseStudies.component"
import { Services } from "@/components/services.components"


export const metadata ={
  title: "DevopsFarm - Home",
  description: "Meta description",
}


export default function Home() {
  return (
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