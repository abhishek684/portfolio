import { User } from 'lucide-react';

const FamilySection = () => {
  const familyMembers = [
    {
      name: 'Chandrashekhar Prasad Singh',
      relation: 'Father',
      profession: 'Tata Motors Permanent Employee',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Chandrawati Devi',
      relation: 'Mother',
      profession: 'Homemaker',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      name: 'Tamanna Kumar',
      relation: 'Sister',
      profession: 'Medical Student at RIMS College',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      name: 'Ram Bachan Prasad Singh',
      relation: 'Grandfather',
      profession: 'Former Tata Motors Employee',
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      name: 'Chandrawati Devi',
      relation: 'Grandmother',
      profession: 'Former Government School Teacher',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="family" className="py-20 bg-gradient-to-br from-green-50 via-white to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="fade-in text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Family</h2>
          <div className="fade-in grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {familyMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${member.gradient} rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold`}>
                    <User size={32} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-2">{member.relation}</p>
                  <p className="text-sm text-gray-500">{member.profession}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilySection;
