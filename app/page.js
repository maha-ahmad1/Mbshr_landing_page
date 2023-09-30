import HeroSection from "./components/HeroSection";
import About from "./components/AboutUs";
import Features from "./components/Features";
import Brand from "./components/Brand";

export default function Home() {
  return (
    <main className="flex h-full flex-col bg-white" dir="rtl">
      <HeroSection />
      <About />
      <Features />
      <Brand />
    </main>
  );
}
