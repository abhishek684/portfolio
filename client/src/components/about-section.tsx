const AboutSection = () => {
  const personalInfo = [
    { label: 'Full Name', value: 'Abhishek Kumar' },
    { label: 'Date of Birth', value: '08 February 1999' },
    { label: 'Address', value: 'Jamshedpur, Jharkhand' },
    { label: 'Languages', value: 'English, Hindi' },
  ];

  const contactInfo = [
    { label: 'Email', value: 'princeabhishek684@gmail.com', link: 'mailto:princeabhishek684@gmail.com' },
    { label: 'Phone', value: '+91 8789457242', link: 'tel:+918789457242' },
    { label: 'Current Role', value: 'Full Stack Developer' },
    { label: 'Company', value: 'Lion Group' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="fade-in text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">About Me</h2>
          <div className="fade-in gradient-border">
            <div className="gradient-border-inner">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {personalInfo.map((item, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-600">{item.label}</span>
                    <span className="text-primary font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-600">{item.label}</span>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-accent font-medium hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-primary font-medium">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
