'use client';
import { useState } from 'react';

const steps = [
  {
    number: '1',
    title: 'Research',
    heading: 'Research & Strategy',
    description:
      'We start by deeply understanding your business, goals, and target audience. Our team conducts thorough market research and competitive analysis to build a solid foundation for your project.',
    points: [
      'Our mission is to make your business better through technology',
      'We specialize in custom-tailored software solutions',
      'Delivering IT solutions that enable you to work smarter',
    ],
  },
  {
    number: '2',
    title: 'Designing',
    heading: 'Creative Designing',
    description:
      'Our designers craft stunning, user-friendly interfaces that reflect your brand identity. Every pixel is placed with purpose to maximize engagement and conversions.',
    points: [
      'Modern and clean UI/UX design',
      'Mobile-first responsive layouts',
      'Brand-consistent visual identity',
    ],
  },
  {
    number: '3',
    title: 'Building',
    heading: 'Development & Building',
    description:
      'Our expert developers bring designs to life using the latest technologies. We write clean, scalable code that ensures your product performs flawlessly.',
    points: [
      'Using latest tech stacks and frameworks',
      'Clean and maintainable codebase',
      'Rigorous testing at every stage',
    ],
  },
  {
    number: '4',
    title: 'Delivery',
    heading: 'Launch & Delivery',
    description:
      'We ensure a smooth deployment and handover process. Our team provides full support post-launch to make sure everything runs perfectly.',
    points: [
      'Smooth and timely project delivery',
      'Post-launch support and maintenance',
      'Training and documentation provided',
    ],
  },
];

const WorkProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">
            How We Work
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">Work Process</h2>
        </div>

        {/* Step Tabs */}
        <div className="grid grid-cols-4 gap-2 mb-12">
          {steps.map((step, index) => (
            <button
              key={step.title}
              onClick={() => setActiveStep(index)}
              className={`py-4 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 ${
                activeStep === index
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {step.number}. {step.title}
            </button>
          ))}
        </div>

        {/* Active Step Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
              {steps[activeStep].heading}
            </h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              {steps[activeStep].description}
            </p>
            <ul className="flex flex-col gap-3">
              {steps[activeStep].points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center">
            <div className="bg-purple-50 rounded-3xl p-12 flex items-center justify-center w-full">
              <div className="text-center">
                <div className="text-8xl mb-4">
                  {activeStep === 0 && '🔍'}
                  {activeStep === 1 && '🎨'}
                  {activeStep === 2 && '⚙️'}
                  {activeStep === 3 && '🚀'}
                </div>
                <p className="text-purple-600 font-semibold text-lg">
                  {steps[activeStep].title}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkProcess;