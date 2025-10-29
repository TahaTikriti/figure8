import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Leadership from "@/components/Leadership";
import Clients from "@/components/Clients";
import ValueProposition from "@/components/ValueProposition";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Partnerns from "@/components/Partners";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      {/* <Leadership /> */}
      {/* <Clients /> */}
      <Partnerns/>
      <ValueProposition />
      <ContactCTA />
      <Footer />
    </div>
  );
}
