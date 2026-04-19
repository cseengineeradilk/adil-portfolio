import { FadeInUp, StaggerContainer, StaggerItem } from './animations';
import { FaAndroid, FaSwift, FaJava, FaWindows, FaPython } from 'react-icons/fa';
import { SiCodeigniter, SiFlutter, SiNodedotjs, SiReact, SiAngular, SiDotnet } from 'react-icons/si';

const techs = [
  { icon: <FaAndroid className="text-green-500" />, label: 'Android' },
  { icon: <SiCodeigniter className="text-red-500" />, label: 'Codeigniter' },
  { icon: <SiFlutter className="text-blue-400" />, label: 'Flutter' },
  { icon: <SiNodedotjs className="text-green-600" />, label: 'Node JS' },
  { icon: <FaPython className="text-yellow-500" />, label: 'Python' },
  { icon: <SiReact className="text-cyan-400" />, label: 'React Native' },
  { icon: <FaSwift className="text-orange-500" />, label: 'Swift' },
  { icon: <SiAngular className="text-red-600" />, label: 'Angular' },
  { icon: <SiDotnet className="text-purple-600" />, label: 'C Sharp' },
  { icon: <FaJava className="text-red-400" />, label: 'Java' },
  { icon: <FaWindows className="text-blue-500" />, label: 'Windows' },
];

const TechStack = () => {
  return (
    <section id="techstack" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInUp>
          <div className="text-center mb-14">
            <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Our Solution
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900">We Work On</h2>
          </div>
        </FadeInUp>

        <StaggerContainer>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techs.map((tech) => (
              <StaggerItem key={tech.label}>
                <div className="bg-white rounded-2xl p-6 flex flex-col items-center gap-3 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group cursor-pointer border border-gray-100 hover:border-purple-100">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-600 text-center group-hover:text-purple-600 transition-colors duration-300">
                    {tech.label}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

      </div>
    </section>
  );
};

export default TechStack;