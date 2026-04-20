import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import ExampleOutput from "@/components/ExampleOutput";
import HowItWorks from "@/components/HowItWorks";
import WhyDifferent from "@/components/WhyDifferent";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <ExampleOutput />
        <HowItWorks />
        <WhyDifferent />
      </main>
      <Footer />
    </div>
  );
}
