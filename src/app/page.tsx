import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { Testimonials } from "@/components/site/testimonials";
import { SiteFooter } from "@/components/site/site-footer";
import { StickyCta } from "@/components/site/sticky-cta";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Testimonials />
      </main>
      <SiteFooter />
      <StickyCta />
    </div>
  );
}
