'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

interface Project {
  id: string;
  title: string;
  description: string;
  status: string;
  created_at: string;
}

export default function ClientPage() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    checkAuthAndFetch();
  }, []);

  const checkAuthAndFetch = async () => {
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      router.push('/login');
      return;
    }
    const email = data.session.user.email || '';
    setUserEmail(email);

    const { data: projects } = await supabase
      .from('projects')
      .select('*')
      .eq('client_email', email)
      .order('created_at', { ascending: false });

    setProjects(projects || []);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  const statusColor: Record<string, string> = {
    ongoing: 'bg-blue-100 text-blue-700',
    completed: 'bg-green-100 text-green-700',
    pending: 'bg-yellow-100 text-yellow-700',
  };

  const statusIcon: Record<string, string> = {
    ongoing: '⚙️',
    completed: '✅',
    pending: '⏳',
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <nav className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-gray-900">
          🚀 TechFast{' '}
          <span className="text-purple-600 text-lg font-semibold">Client Portal</span>
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-500 text-sm hidden md:block">{userEmail}</span>
          <button
            onClick={handleLogout}
            className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-5 py-2 rounded-xl font-semibold transition-all"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Welcome Banner */}
        <div className="bg-purple-600 text-white rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-extrabold mb-1">Welcome Back! 👋</h2>
          <p className="opacity-80 text-sm">{userEmail}</p>
          <p className="mt-3 opacity-90">Here are all your projects with us.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total Projects', value: projects.length },
            { label: 'Completed', value: projects.filter(p => p.status === 'completed').length },
            { label: 'Ongoing', value: projects.filter(p => p.status === 'ongoing').length },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-3xl font-extrabold text-purple-600">{stat.value}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-8 py-5 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">Your Projects</h2>
          </div>

          {loading ? (
            <div className="p-8 text-center text-gray-400">Loading your projects...</div>
          ) : projects.length === 0 ? (
            <div className="p-8 text-center">
              <div className="text-5xl mb-4">📭</div>
              <p className="text-gray-500">No projects assigned yet.</p>
              <p className="text-gray-400 text-sm mt-1">Contact us to get started!</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-50">
              {projects.map((project) => (
                <div key={project.id} className="px-8 py-6 hover:bg-gray-50 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg">{project.title}</h3>
                      <p className="text-gray-500 text-sm mt-1 leading-relaxed">{project.description}</p>
                      <p className="text-gray-400 text-xs mt-2">
                        Started: {new Date(project.created_at).toLocaleDateString('en-IN', {
                          day: 'numeric', month: 'long', year: 'numeric'
                        })}
                      </p>
                    </div>
                    <span className={`${statusColor[project.status]} px-4 py-1.5 rounded-full text-xs font-semibold capitalize flex items-center gap-1 ml-4`}>
                      {statusIcon[project.status]} {project.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contact */}
        <div className="mt-8 bg-gray-100 rounded-2xl p-6 text-center">
          <p className="text-gray-600 font-medium">Have questions about your project?</p>
          <a href="mailto:demo@example.com" className="text-purple-600 font-semibold hover:underline mt-1 block">
            📧 demo@example.com
          </a>
        </div>

      </div>
    </div>
  );
}