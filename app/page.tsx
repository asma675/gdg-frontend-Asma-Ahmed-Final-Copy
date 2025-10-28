import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col bg-gradient-to-b from-white via-white to-brand-50/40">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Logos />
        <Features />
        <Showcase />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
