import CallToAction from "@/components/LandingPage/CallToAction";
import Footer from "@/components/LandingPage/Footer";
import HeroSecton from "@/components/LandingPage/HeroSecton";
import Pricing from "@/components/LandingPage/Pricing";
import ProductShowcase from "@/components/LandingPage/ProductShowcase";
import Slider from "@/components/LandingPage/Slider";
import Testimonials from "@/components/LandingPage/Testimonials";

export default function Home() {
  return (
    <main className="">
      <HeroSecton />
      <Slider />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
