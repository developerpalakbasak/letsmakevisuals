import Hero from "@/components/Hero/Hero";
import SocialProof from "@/components/SocialProof/SocialProof";
import Upgrade from "@/components/Upgrade/Upgrade";
import Services from "@/components/Services/Services";
import Portfolio from "@/components/Portfolio/Portfolio";
import Comparison from "@/components/Comparison/Comparison";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/FAQ/FAQ";
import Contact from "@/components/Contact/Contact";
import WorkMarquee from "@/components/WorkMarquee/WorkMarquee";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Upgrade />
      <Services />
      <WorkMarquee />
      <Portfolio />
      <Comparison />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
