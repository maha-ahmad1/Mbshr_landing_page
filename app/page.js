import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Brand from "./components/Brand";
import Numbers from "./components/Numbers";
import Reviews from "./components/Reviews"
import Benefit from "./components/Benefit";

export default function Home() {
  return (
    <main className="flex h-full flex-col bg-white" dir="rtl">
      <HeroSection />
      <Benefit />
      <Features />
      <Numbers/>
      <Brand />
      <Reviews />
    </main>
  );
}
