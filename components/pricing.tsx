'use client';
import { FadeInUp, StaggerContainer, StaggerItem, HoverCard } from './animations';

const plans = [
  {
    name: 'Startup Plan',
    price: '$50',
    period: 'Per Month',
    features: [
      { text: 'Free Consultation', included: true },
      { text: 'WP Installation', included: true },
      { text: 'Speed Up WordPress', included: true },
      { text: '24/7 Support', included: false },
      { text: 'Unlimited Revisions', included: false },
      { text: 'Custom Theme Develop', included: false },
    ],
  },
  {
    name: 'Standard Plan',
    price: '$120',
    period: 'Per Month',
    features: [
      { text: 'Free Consultation', included: true },
      { text: 'WP Installation', included: true },
      { text: 'Speed Up WordPress', included: true },
      { text: '24/7 Support', included: true },
      { text: 'Unlimited Revisions', included: false },
      { text: 'Custom Theme Develop', included: false },
    ],
  },
  {
    name: 'Premium Plan',
    price: '$250',
    period: 'Per Month',
    features: [
      { text: 'Free Consultation', included: true },
      { text: 'WP Installation', included: true },
      { text: 'Speed Up WordPress', included: true },
      { text: '24/7 Support', included: true },
      { text: 'Unlimited Revisions', included: true },
      { text: 'Custom Theme Develop', included: true },
    ],
  },
];

const Pricing = () => {

  const scrollToContact = () => {
    const el = document.getElementById('contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* CTA Banner */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-95" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <FadeInUp>
            <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-4">
              Contact Us For A Free Consultation
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              24x7 Expert Technical Support
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              We help you scale your business with reliable IT solutions and expert support anytime.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">

              {/* ✅ FIXED BUTTON */}
              <a
                href="tel:+918544080177"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105"
              >
                Call Now
              </a>

              <button
                onClick={scrollToContact}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105"
              >
                Contact Us
              </button>

            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <FadeInUp>
            <div className="text-center mb-14">
              <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">
                Popular Package
              </p>
              <h2 className="text-4xl font-extrabold text-gray-900">
                Our Pricing
              </h2>
            </div>
          </FadeInUp>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {plans.map((plan) => (
                <StaggerItem key={plan.name}>
                  <HoverCard className="bg-white rounded-3xl overflow-hidden shadow-sm h-full hover:shadow-xl transition-all">

                    {/* TOP */}
                    <div className="bg-purple-600 p-8 text-center relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 right-0 h-8 bg-white rounded-t-3xl" />

                      <h3 className="text-white text-xl font-bold mb-2">
                        {plan.name}
                      </h3>

                      <p className="text-5xl font-extrabold text-white mb-1">
                        {plan.price}
                      </p>

                      <p className="text-purple-200 text-sm">
                        — {plan.period}
                      </p>
                    </div>

                    {/* FEATURES */}
                    <div className="p-8">
                      <ul className="flex flex-col divide-y divide-gray-100">

                        {plan.features.map((feature) => (
                          <li
                            key={feature.text}
                            className={`py-3 text-center font-medium ${
                              feature.included
                                ? 'text-gray-800'
                                : 'text-gray-300 line-through'
                            }`}
                          >
                            {feature.included ? '✅' : '❌'} {feature.text}
                          </li>
                        ))}

                      </ul>

                      {/* BUTTON */}
                      <button
                        onClick={scrollToContact}
                        className="mt-8 w-full border-2 border-black text-black hover:bg-black hover:text-white py-3 rounded-full font-semibold transition-all duration-200"
                      >
                        Get Started →
                      </button>

                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}

            </div>
          </StaggerContainer>

        </div>
      </section>
    </>
  );
};

export default Pricing;