const EducationSection = () => {
  const educationItems = [
    {
      degree: 'MCA (Pursuing)',
      year: '2025',
      institution: 'Master of Computer Applications'
    },
    {
      degree: 'B.Tech - Electronics & Communication Engineering',
      year: '2019-2023',
      institution: 'Bachelor of Technology'
    },
    {
      degree: 'Advanced Diploma in Machine Maintenance & Automation',
      year: '2021',
      institution: 'IDTR Jamshedpur'
    },
    {
      degree: 'Diploma - Electronics & Communication Engineering',
      year: '2016-2019',
      institution: 'Diploma in Engineering'
    },
    {
      degree: 'Intermediate (Pure Science)',
      year: '2014-2016',
      institution: 'Higher Secondary Education'
    },
    {
      degree: 'Matric (10th - CBSE Board)',
      year: '2014',
      institution: 'Secondary Education'
    },
    {
      degree: 'Web Development Course',
      year: '2023',
      institution: 'AlmaBetter'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="fade-in text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 bg-clip-text text-transparent">Education Timeline</h2>
          <div className="fade-in space-y-8 relative ml-8">
            {educationItems.map((item, index) => (
              <div key={index} className="timeline-item bg-white rounded-xl shadow-lg p-6 relative">
                <div className="timeline-dot"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary">{item.degree}</h3>
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.year}
                  </span>
                </div>
                <p className="text-gray-600">{item.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
