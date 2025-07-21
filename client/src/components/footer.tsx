import { Mail, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:princeabhishek684@gmail.com',
      label: 'Email'
    },
    {
      icon: Phone,
      href: 'tel:+918789457242',
      label: 'Phone'
    },

    {
      icon: Instagram,
      href: 'https://www.instagram.com/st_abhi_/?hl=en',
      label: 'Instagram',
      external: true
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Abhishek Kumar</h3>
          <p className="text-gray-300 mb-6">Full Stack Developer | Creating Digital Experiences</p>
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-gray-300 hover:text-accent transition-colors"
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                >
                  <IconComponent size={24} />
                </a>
              );
            })}
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-sm text-gray-400 mb-2">Website Designed & Developed by Abhishek Kumar</p>
            <p className="text-sm text-gray-400">Copyright © {currentYear} Abhishek Kumar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
