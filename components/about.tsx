import { FadeInLeft, FadeInRight } from './animations';

const skills = [
  { label: 'Technology Consulting', percent: 80 },
  { label: 'Managed IT Service', percent: 95 },
  { label: 'Web Development', percent: 90 },
  { label: 'Digital Marketing', percent: 75 },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <FadeInLeft>
          <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">About Our Company</p>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">We Offer IT Services & Deliver Technology Solutions</h2>
          <p className="text-gray-500 leading-relaxed mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.</p>
          <div className="flex flex-col gap-6">
            {skills.map((skill) => (
              <div key={skill.label}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">{skill.label}</span>
                  <span className="text-purple-600 font-bold">{skill.percent}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${skill.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </FadeInLeft>
        <FadeInRight>
          <div className="relative">
            <div className="bg-gray-100 rounded-3xl overflow-hidden h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👨‍💻</div>
                <p className="text-gray-500 font-medium">Team at Work</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-2xl p-4 flex items-center gap-3">
              <div className="bg-orange-100 rounded-full p-3"><span className="text-2xl">🏆</span></div>
              <div>
                <p className="font-bold text-gray-900 text-lg">5.7K+</p>
                <p className="text-gray-500 text-sm">Projects Done</p>
              </div>
            </div>
          </div>
        </FadeInRight>
      </div>
    </section>
  );
};

export default About;