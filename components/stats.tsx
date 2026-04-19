import { StaggerContainer, StaggerItem } from './animations';

const stats = [
  { number: '20+', label: 'Years of Experience' },
  { number: '1200+', label: 'Complete Projects' },
  { number: '250+', label: 'Working Employees' },
  { number: '3000+', label: 'Happy Customers' },
];

const Stats = () => {
  return (
    <section className="py-16 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-95" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <StaggerContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <h3 className="text-5xl font-extrabold text-white mb-2">{stat.number}</h3>
                  <p className="text-gray-400 font-medium text-lg">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Stats;
