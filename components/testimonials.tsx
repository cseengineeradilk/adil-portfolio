import { FadeInUp, StaggerContainer, StaggerItem, HoverCard } from './animations';

const testimonials = [
  {
    name: 'Zahra Burnett',
    location: 'United States',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.',
  },
  {
    name: 'Stevie Wills',
    location: 'Germany',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.',
  },
  {
    name: 'Saabir al-Obeid',
    location: 'Turkey',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading with FadeInUp */}
        <FadeInUp>
          <div className="text-center mb-14">
            <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Testimonial
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Our Client Say
            </h2>
          </div>
        </FadeInUp>

        {/* Cards with Stagger */}
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <HoverCard>
                  <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>

                    {/* Review */}
                    <p className="text-gray-500 leading-relaxed mb-6">
                      {t.review}
                    </p>

                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center text-2xl mb-3 border-4 border-purple-600">
                      👤
                    </div>

                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-purple-600 text-sm font-medium">
                      {t.location}
                    </p>

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

export default Testimonials;