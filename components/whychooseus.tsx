const features = [
  { label: 'Innovation Driven' },
  { label: 'Secure Solutions' },
  { label: 'Fast Communication' },
  { label: 'Industry Expertise' },
  { label: 'Cost Effectiveness' },
  { label: 'Sustainable Development' },
];

const trustPoints = [
  { label: 'Protect your Business' },
  { label: 'Network Security' },
  { label: 'Data Security' },
  { label: 'Small Business Owners' },
  { label: 'Running your Business' },
  { label: 'Network Monitoring' },
];

const WhyChooseUs = () => {
  return (
    <>
      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left Illustration */}
          <div className="flex justify-center">
            <div className="bg-purple-50 rounded-3xl p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🚀</div>
                <p className="text-purple-600 font-semibold">Innovating Technology</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Why Choose Us?
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Innovating to make Technology work for People Everywhere
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="border-l-4 border-purple-600 pl-4 py-2 bg-gray-50 rounded-r-xl"
                >
                  <span className="font-semibold text-gray-800">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Why Trust Us?
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Your one-stop Solution to Meet your Business Vision & Mission
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Trust Points Grid */}
            <div className="grid grid-cols-2 gap-4">
              {trustPoints.map((t) => (
                <div
                  key={t.label}
                  className="border-l-4 border-purple-600 pl-4 py-2 bg-white rounded-r-xl shadow-sm"
                >
                  <span className="font-semibold text-gray-800">{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center">
            <div className="bg-blue-50 rounded-3xl p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🛡️</div>
                <p className="text-blue-600 font-semibold">Trusted Solutions</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;