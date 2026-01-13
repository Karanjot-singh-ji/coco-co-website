import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BenefitsSection from "@/components/BenefitsSection";
import BrandStory from "@/components/BrandStory";
import ProductsSection from "@/components/ProductsSection";
import ComparisonSection from "@/components/ComparisonSection";
import IngredientsSection from "@/components/IngredientsSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <BenefitsSection />
        <BrandStory />
        <ProductsSection />
        <Testimonials />
        <ComparisonSection />
        <IngredientsSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
