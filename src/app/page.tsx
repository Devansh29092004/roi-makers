import Hero from "../components/Hero";
import Solutions from "../components/landing/Solutions";
import { NavbarDemo } from "../components/global/Navbar";

export default function Home() {
  return (
    <main>
      <NavbarDemo />
      <Hero />
      <Solutions />
    </main>
  );
}
