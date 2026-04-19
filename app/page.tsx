import Contact from '@/components/contact';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Stats from '@/components/stats';
import About from '@/components/about';
import TechStack from '@/components/techstack';
import WhyChooseUs from '@/components/whychooseus';
import WorkProcess from '@/components/workprocess';
import Pricing from '@/components/pricing';
import Testimonials from '@/components/testimonials';
import Team from '@/components/team';
import Blog from '@/components/blog';
import Clients from '@/components/clients';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <About />
      <TechStack />
      <WhyChooseUs />
      <WorkProcess />
      <Pricing />
      <Testimonials />
      <Team />
      <Blog />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}