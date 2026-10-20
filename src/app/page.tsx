import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Concept } from "@/components/Concept";
import { Services } from "@/components/Services";
import { Works } from "@/components/Works";
import { Strengths } from "@/components/Strengths";
import { Flow } from "@/components/Flow";
import { Area } from "@/components/Area";
import { Company } from "@/components/Company";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F4F0]">
      {/* Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <Concept />
        <Services />
        <Works />
        <Strengths />
        <Flow />
        <Area />
        <Company />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
