import { FadeInUp, StaggerContainer, StaggerItem, HoverCard } from './animations';

const team = [
  { name: 'Ava Farrington', role: 'Founder, CEO', emoji: '👩‍💼' },
  { name: 'Kevin Haley', role: 'Co-founder, CTO', emoji: '👨‍💻' },
  { name: 'Alishia Fulton', role: 'Chief Creative Officer', emoji: '👩‍🎨' },
  { name: 'Lucas Smith', role: 'Project Manager', emoji: '👨‍💼' },
];

const Team = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading with FadeInUp */}
        <FadeInUp>
          <div className="text-center mb-14">
            <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Team Member
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Expert Team
            </h2>
          </div>
        </FadeInUp>

        {/* Cards with Stagger */}
        <StaggerContainer>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <HoverCard>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
                    
                    {/* Avatar */}
                    <div className="bg-purple-50 h-56 flex items-center justify-center group-hover:bg-purple-100 transition-all duration-300">
                      <span className="text-8xl">{member.emoji}</span>
                    </div>

                    {/* Info */}
                    <div className="p-5 text-center">
                      <h4 className="font-bold text-gray-900 text-lg">
                        {member.name}
                      </h4>
                      <p className="text-purple-600 text-sm font-medium mt-1">
                        {member.role}
                      </p>

                      {/* Social Icons */}
                      <div className="flex justify-center gap-3 mt-4">
                        {['f', 'in', '𝕏'].map((icon) => (
                          <button
                            key={icon}
                            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-purple-600 hover:text-white text-gray-600 text-xs font-bold transition-all duration-200 flex items-center justify-center"
                          >
                            {icon}
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

      </div>
    </section>
  );
};

export default Team;