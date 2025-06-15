
import Hero from "@/components/ui/hero";
import Navigation from "@/components/ui/navigation";
import Features from "@/components/ui/features";
import Services from "@/components/ui/services";
import Stats from "@/components/ui/stats";
import Portfolio from "@/components/ui/portfolio";
import Testimonials from "@/components/ui/testimonials";
import About from "@/components/ui/about";
import Contact from "@/components/ui/contact";
import Footer from "@/components/ui/footer";
import WhatsAppFloat from "@/components/ui/whatsapp-float";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Services />
        <Stats />
        <Portfolio />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
