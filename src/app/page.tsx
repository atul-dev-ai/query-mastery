import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/ui/HeroSection";
import LearningPath from "@/components/ui/LearningPath";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 w-full flex flex-col items-center justify-center">
        <HeroSection />

        <LearningPath />

      </main>

      <Footer />
    </div>
  );
}
