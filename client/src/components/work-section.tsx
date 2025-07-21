import { CheckCircle, Code } from 'lucide-react';

const WorkSection = () => {
  const specializations = [
    'Full Responsive Front-end Design',
    'Back-end System Development', 
    'Client Satisfaction Focus'
  ];

  const projectTypes = [
    'School Websites',
    'Restaurant & Shop Platforms',
    'Gym & Salon Websites'
  ];

  return (
    <section id="work" className="py-20 bg-gradient-to-br from-cyan-50 via-white to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="fade-in text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">Work Profile</h2>
          <div className="fade-in bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Full Stack Developer</h3>
              <p className="text-xl opacity-90">Lion Group</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Specializations</h4>
                <ul className="space-y-2">
                  {specializations.map((spec, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle size={20} className="mr-3 text-green-300" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Project Types</h4>
                <ul className="space-y-2">
                  {projectTypes.map((type, index) => (
                    <li key={index} className="flex items-center">
                      <Code size={20} className="mr-3 text-blue-300" />
                      <span>{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-center mt-8 opacity-90">
              Able to design full responsive front-end & back-end systems with focus on client satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
