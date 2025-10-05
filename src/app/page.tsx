import Hero from '@/components/Hero';
import Solutions from '@/components/landing/Solutions';
// import Agency from '@/components/landing/Agency';
import Services from '@/components/landing/Services';
import OurServices from '@/components/landing/OurServicesFlowing';
import Trust from '@/components/landing/Trust';
import BrandsClients from '@/components/landing/BrandsClients';
import Footer from '@/components/global/Footer';
import { NavbarDemo } from "../components/global/Navbar";

export default function Home() {
  return (
    <main>
      <NavbarDemo />
      <Hero />
      <Solutions />
      {/* <Agency /> */}
      <Services />
      <OurServices />
      <Trust />
      <BrandsClients />
      <Footer />
    </main>
  );
}
