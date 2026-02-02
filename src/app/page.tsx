import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Team from "@/components/sections/Team";
import Mission from "@/components/sections/Mission";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Team />
        <Mission />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
