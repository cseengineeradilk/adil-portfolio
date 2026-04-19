import { FadeInUp, StaggerContainer, StaggerItem, HoverCard } from './animations';

const blogs = [
  {
    title: 'Planning for a Safe Return to the Workplace IT Solutions',
    date: '17 June 2024',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt.',
    emoji: '🏢',
    bg: 'bg-blue-100',
  },
  {
    title: 'What Cybersecurity Certifications Can Mean for Your Business',
    date: '20 June 2024',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt.',
    emoji: '🔐',
    bg: 'bg-purple-100',
  },
  {
    title: 'Machine Learning Applications for Every Industry',
    date: '25 June 2024',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt.',
    emoji: '🤖',
    bg: 'bg-green-100',
  },
];

const Blog = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading with FadeInUp */}
        <FadeInUp>
          <div className="text-center mb-14">
            <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Blog & News
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Recent Blog
            </h2>
          </div>
        </FadeInUp>

        {/* Cards with Stagger */}
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <StaggerItem key={blog.title}>
                <HoverCard>
                  <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
                    
                    {/* Image */}
                    <div className={`${blog.bg} h-48 flex items-center justify-center`}>
                      <span className="text-7xl">{blog.emoji}</span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                        <span>👤 Author</span>
                        <span>📅 {blog.date}</span>
                      </div>

                      <h4 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-purple-600 transition-colors duration-200">
                        {blog.title}
                      </h4>

                      <p className="text-gray-500 text-sm leading-relaxed mb-4">
                        {blog.excerpt}
                      </p>

                      <button className="text-purple-600 font-semibold text-sm hover:gap-3 flex items-center gap-2 transition-all duration-200">
                        → Read More
                      </button>
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

export default Blog;