import UrgencyBar from '@/components/UrgencyBar';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import VideoShowcase from '@/components/VideoShowcase';
import Philosophy from '@/components/Philosophy';
import Instructor from '@/components/Instructor';
import Curriculum from '@/components/Curriculum';
import Transformation from '@/components/Transformation';
import SocialProof from '@/components/SocialProof';
import FAQ from '@/components/FAQ';
import Enrollment from '@/components/Enrollment';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

export default function Page() {
  return (
    <>
      <ThemeToggle />
      <UrgencyBar />
      <Nav />
      <Hero />
      <VideoShowcase />
<Philosophy />
      <Instructor />
      <Curriculum />
      <Transformation />
      <SocialProof />
      <FAQ />
      <Enrollment />
<Footer />
    </>
  );
}
