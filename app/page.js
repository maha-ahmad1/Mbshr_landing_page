import HeroSection from "./components/HeroSection";
import About from "./components/AboutUs";
import Features from "./components/Features";
import Brand from "./components/Brand";
import Numbers from "./components/Numbers";



export default function Home() {
  return (
    <main className="flex h-full flex-col bg-white" dir="rtl">
      <HeroSection />
      <About />
      <Features />
      <Brand />
      <Numbers/>
    </main>
  );
}
