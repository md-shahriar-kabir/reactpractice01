import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoCloud from './components/LogoCloud';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-[#ededed] font-sans antialiased selection:bg-white selection:text-black overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <Solutions />
        <Stats />
        <Testimonials />
        <Pricing />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
