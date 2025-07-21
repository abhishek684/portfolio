import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@assets/Untitled design (7)_1753103521038.png';

const HeroSection = () => {
  const handleExploreClick = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      const offsetTop = aboutSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="modern-hero-gradient min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="fade-in mb-8">
            <img 
              src={profileImage}
              alt="Abhishek Kumar - Professional Photo" 
              className="w-52 h-52 rounded-full mx-auto mb-8 border-4 border-white shadow-2xl object-cover object-center ring-4 ring-purple-300/50"
              style={{ objectPosition: 'center 20%' }}
            />
          </div>
          <h1 className="fade-in text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm Abhishek Kumar<br />
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">Full Stack Developer</span> at Lion Group
          </h1>
          <p className="fade-in text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
            Welcome to my digital journey. Learn everything about me.
          </p>
          <div className="fade-in">
            <Button
              onClick={handleExploreClick}
              className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center space-x-2 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              size="lg"
            >
              <span>Explore My Story</span>
              <ArrowDown size={20} />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/20"></div>
      {/* Floating elements for visual appeal */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
    </section>
  );
};

export default HeroSection;
