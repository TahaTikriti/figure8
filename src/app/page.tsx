import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ExpertiseSection from "@/components/ExpertiseSection";
import Leadership from "@/components/Leadership";
import Clients from "@/components/Clients";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import ClientLogos from "@/components/ClientLogos";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <ExpertiseSection />
      {/* <Leadership /> */}
      {/* <Clients /> */}
      <ClientLogos />
      <ContactCTA />
      <Footer />
    </div>
  );
}
