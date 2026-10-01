import { Footer } from "@/components/ui";
import { About } from "@/components/home/About";
import { ContactBand } from "@/components/home/ContactBand";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { Hero } from "@/components/home/Hero";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Strip } from "@/components/home/Strip";
import { Testimonials } from "@/components/home/Testimonials";
import { UsesPreview } from "@/components/home/UsesPreview";
import { navLinks, site } from "@/data/site";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-site flex-1 border-x border-line">
      <main>
        <Hero />
        <Strip />
        <About />
        <SelectedWork />
        <UsesPreview />
        <ExperiencePreview />
        <Testimonials />
        <ContactBand />
      </main>
      <Footer name={site.name} links={navLinks} />
    </div>
  );
}
