import Hero from "../components/Hero";
import Trust from "../components/Trust";
import SectionRessources from "../components/SectionRessources";
import SectionTendances from "../components/SectionTendances";

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <Trust />
      <SectionRessources />
      <SectionTendances />
    </main>
  );
}
