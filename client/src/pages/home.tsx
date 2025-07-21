import { useEffect } from 'react';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import FamilySection from '@/components/family-section';
import EducationSection from '@/components/education-section';
import WorkSection from '@/components/work-section';
import GallerySection from '@/components/gallery-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Home = () => {
  useScrollAnimation();

  useEffect(() => {
    // Add fade-in class to initial elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, index * 100);
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FamilySection />
      <EducationSection />
      <WorkSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
