import { FadeInUp, StaggerContainer, StaggerItem, HoverCard } from './animations';

const services = [
  { icon: '🖥️', title: 'Web Development', description: 'We build fast, responsive and modern websites tailored to your business needs.' },
  { icon: '📣', title: 'Digital Marketing', description: 'Grow your online presence with our result-driven digital marketing strategies.' },
  { icon: '📊', title: 'Startup Solutions', description: 'End-to-end technology solutions to help startups launch and scale faster.' },
  { icon: '🎨', title: 'Graphic Design', description: 'Creative and professional designs that make your brand stand out.' },
  { icon: '⚙️', title: 'SEO Optimization', description: 'Rank higher on search engines and drive organic traffic to your website.' },
  { icon: '📱', title: 'Apps Development', description: 'Native and cross-platform mobile apps for iOS and Android.' },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInUp>
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-gray-900">Our Services</h2>
          </div>
        </FadeInUp>
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <HoverCard className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm h-full">
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">{service.description}</p>
                  <button className="text-purple-600 font-semibold flex items-center gap-2 hover:gap-4 transition-all duration-200">→ Read More</button>
                </HoverCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Services;