'use client';
import { FadeInUp, StaggerContainer, StaggerItem } from './animations';

const clients = [
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },
  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  },
  {
    name: 'NVIDIA',
    logo: 'https://cdn.simpleicons.org/nvidia/76B900',
  },
  {
    name: 'Cloudflare',
    logo: 'https://cdn.simpleicons.org/cloudflare/F38020',
  },
  {
    name: 'BitTorrent',
    logo: 'https://cdn.simpleicons.org/bittorrent/000000',
  },
];

const Clients = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <FadeInUp>
          <div className="text-center mb-14">
            <p className="text-purple-600 font-semibold text-sm tracking-widest uppercase mb-3">
              Trusted By Over 1200
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Our Clients
            </h2>
          </div>
        </FadeInUp>

        {/* Clients Grid */}
        <StaggerContainer>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">

            {clients.map((client) => (
              <StaggerItem key={client.name}>
                
                <div
                  className="
                    bg-white
                    rounded-2xl 
                    p-6 
                    flex flex-col items-center justify-center gap-4
                    border border-gray-100
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >

                  {/* LOGO */}
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 object-contain"
                  />

                  {/* NAME */}
                  <span className="text-sm font-semibold text-gray-700 text-center">
                    {client.name}
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

export default Clients;