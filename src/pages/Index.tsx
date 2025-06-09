
import Hero from "@/components/ui/hero";
import Navigation from "@/components/ui/navigation";
import Services from "@/components/ui/services";
import Portfolio from "@/components/ui/portfolio";
import About from "@/components/ui/about";
import Contact from "@/components/ui/contact";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
