'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

interface Project {
  id: string;
  title: string;
  description: string;
  status: string;
  client_email: string;
  created_at: string;
}

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState<'projects' | 'contacts'>('projects');
  const [form, setForm] = useState({
    title: '',
    description: '',
    status: 'ongoing',
    client_email: '',
  });

  useEffect(() => {
    checkAuth();
    fetchProjects();
    fetchContacts();
  }, []);

  const checkAuth = async () => {
    const { data } = await supabase.auth.getSession();
    if (!data.session) router.push('/login');
  };

  const fetchProjects = async () => {
    const { data } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });
    setProjects(data || []);
    setLoading(false);
  };

  const fetchContacts = async () => {
    const { data } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });
    setContacts(data || []);
  };

  const handleAddProject = async () => {
    if (!form.title || !form.client_email) return;
    const { error } = await supabase.from('projects').insert([form]);
    if (!error) {
      setForm({ title: '', description: '', status: 'ongoing', client_email: '' });
      setShowForm(false);
      fetchProjects();
    }
  };

  const handleDelete = async (id: string) => {
    await supabase.from('projects').delete().eq('id', id);
    fetchProjects();
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  const statusConfig: Record<string, { text: string; bg: string; dot: string }> = {
    ongoing: { text: 'text-blue-600', bg: 'bg-blue-50 border-blue-100', dot: 'bg-blue-500' },
    completed: { text: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-100', dot: 'bg-emerald-500' },
    pending: { text: 'text-amber-600', bg: 'bg-amber-50 border-amber-100', dot: 'bg-amber-400' },
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col fixed h-full shadow-sm">

        {/* Logo */}
        <div className="px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-purple-600 rounded-xl flex items-center justify-center text-white text-base">
              🚀
            </div>
            <div>
              <p className="font-extrabold text-gray-900 text-sm leading-none">TechFast</p>
              <p className="text-purple-600 text-xs font-medium mt-0.5">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-3 py-5 flex flex-col gap-1">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest px-3 mb-3">
            Main Menu
          </p>

          {[
            { icon: '📁', label: 'Projects', tab: 'projects' as const, count: projects.length },
            { icon: '📩', label: 'Contacts', tab: 'contacts' as const, count: contacts.length },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.tab)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === item.tab
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-200'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span>{item.icon}</span>
              <span className="flex-1 text-left">{item.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                activeTab === item.tab
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-gray-500'
              }`}>
                {item.count}
              </span>
            </button>
          ))}

          <div className="mt-5">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest px-3 mb-3">
              Actions
            </p>
            <button
              onClick={() => setShowForm(!showForm)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all"
            >
              <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-xs font-bold">+</span>
              New Project
            </button>
          </div>
        </nav>

        {/* User Section */}
        <div className="px-3 py-4 border-t border-gray-100">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-500 hover:bg-red-50 hover:text-red-500 transition-all"
          >
            <span className="w-5 h-5 bg-gray-100 rounded-lg flex items-center justify-center text-xs">↩</span>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 ml-64">

        {/* Top Header */}
        <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between sticky top-0 z-40">
          <div>
            <h1 className="text-lg font-extrabold text-gray-900">
              {activeTab === 'projects' ? '📁 Projects' : '📩 Contact Requests'}
            </h1>
            <p className="text-gray-400 text-xs mt-0.5">
              {activeTab === 'projects'
                ? `${projects.length} total projects`
                : `${contacts.length} total inquiries`}
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md shadow-purple-200 flex items-center gap-2"
          >
            + New Project
          </button>
        </header>

        <div className="p-8">

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total Projects', value: projects.length, icon: '📁', iconBg: 'bg-purple-100', iconColor: 'text-purple-600', border: 'border-l-purple-500' },
              { label: 'Completed', value: projects.filter(p => p.status === 'completed').length, icon: '✅', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600', border: 'border-l-emerald-500' },
              { label: 'Ongoing', value: projects.filter(p => p.status === 'ongoing').length, icon: '⚙️', iconBg: 'bg-blue-100', iconColor: 'text-blue-600', border: 'border-l-blue-500' },
              { label: 'Inquiries', value: contacts.length, icon: '📩', iconBg: 'bg-amber-100', iconColor: 'text-amber-600', border: 'border-l-amber-500' },
            ].map((stat) => (
              <div key={stat.label} className={`bg-white rounded-2xl p-5 shadow-sm border border-gray-100 border-l-4 ${stat.border} flex items-center gap-4`}>
                <div className={`${stat.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-gray-900">{stat.value}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Add Project Form */}
          {showForm && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-base font-extrabold text-gray-900">New Project</h2>
                  <p className="text-gray-400 text-xs mt-0.5">Fill in the details below</p>
                </div>
                <button
                  onClick={() => setShowForm(false)}
                  className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 font-bold transition-all"
                >
                  ×
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 mb-1.5 block uppercase tracking-wider">
                    Project Title *
                  </label>
                  <input
                    placeholder="e.g. E-commerce Website"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-50 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 mb-1.5 block uppercase tracking-wider">
                    Client Email *
                  </label>
                  <input
                    placeholder="client@example.com"
                    value={form.client_email}
                    onChange={(e) => setForm({ ...form, client_email: e.target.value })}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-50 transition-all text-sm"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs font-bold text-gray-500 mb-1.5 block uppercase tracking-wider">
                    Description
                  </label>
                  <textarea
                    placeholder="Project details..."
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-50 transition-all resize-none h-20 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 mb-1.5 block uppercase tracking-wider">
                    Status
                  </label>
                  <select
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-50 transition-all text-sm"
                  >
                    <option value="ongoing">⚙️ Ongoing</option>
                    <option value="completed">✅ Completed</option>
                    <option value="pending">⏳ Pending</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    onClick={handleAddProject}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-3 font-bold transition-all text-sm shadow-md shadow-purple-200"
                  >
                    Save Project →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Projects Table */}
          {activeTab === 'projects' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-12 px-6 py-3 bg-gray-50 border-b border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <div className="col-span-4">Project</div>
                <div className="col-span-3">Client</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2">Date</div>
                <div className="col-span-1">Action</div>
              </div>

              {loading ? (
                <div className="p-8 text-center text-gray-400 text-sm">Loading...</div>
              ) : projects.length === 0 ? (
                <div className="p-12 text-center">
                  <p className="text-4xl mb-3">📭</p>
                  <p className="text-gray-500 text-sm font-semibold">No projects yet</p>
                  <p className="text-gray-400 text-xs mt-1">Click "New Project" to get started</p>
                </div>
              ) : (
                projects.map((project, idx) => (
                  <div
                    key={project.id}
                    className={`grid grid-cols-12 px-6 py-4 items-center hover:bg-purple-50/30 transition-all ${
                      idx !== projects.length - 1 ? 'border-b border-gray-50' : ''
                    }`}
                  >
                    <div className="col-span-4">
                      <p className="text-gray-900 text-sm font-bold">{project.title}</p>
                      {project.description && (
                        <p className="text-gray-400 text-xs mt-0.5 truncate max-w-xs">{project.description}</p>
                      )}
                    </div>
                    <div className="col-span-3">
                      <p className="text-gray-500 text-xs truncate">{project.client_email}</p>
                    </div>
                    <div className="col-span-2">
                      <span className={`${statusConfig[project.status].bg} ${statusConfig[project.status].text} border px-3 py-1 rounded-full text-xs font-bold capitalize flex items-center gap-1.5 w-fit`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${statusConfig[project.status].dot}`} />
                        {project.status}
                      </span>
                    </div>
                    <div className="col-span-2">
                      <p className="text-gray-400 text-xs">
                        {new Date(project.created_at).toLocaleDateString('en-IN', {
                          day: 'numeric', month: 'short', year: 'numeric'
                        })}
                      </p>
                    </div>
                    <div className="col-span-1">
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="text-gray-300 hover:text-red-500 transition-colors text-sm p-1.5 hover:bg-red-50 rounded-lg"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Contacts Table */}
          {activeTab === 'contacts' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-wider">
                Recent Inquiries
              </div>
              {contacts.length === 0 ? (
                <div className="p-12 text-center">
                  <p className="text-4xl mb-3">📭</p>
                  <p className="text-gray-500 text-sm font-semibold">No contact requests yet</p>
                </div>
              ) : (
                contacts.map((contact, idx) => (
                  <div
                    key={contact.id}
                    className={`px-6 py-5 hover:bg-purple-50/30 transition-all ${
                      idx !== contacts.length - 1 ? 'border-b border-gray-50' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-sm font-bold text-purple-600 shrink-0">
                          {contact.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap mb-2">
                            <p className="text-gray-900 text-sm font-bold">{contact.name}</p>
                            <span className="text-purple-600 text-xs bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-lg font-medium">
                              {contact.email}
                            </span>
                            {contact.phone && (
                              <span className="text-gray-500 text-xs bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-lg">
                                {contact.phone}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                            {contact.message}
                          </p>
                        </div>
                      </div>
                      <span className="text-gray-400 text-xs bg-gray-50 border border-gray-100 px-2.5 py-1.5 rounded-lg shrink-0 whitespace-nowrap">
                        {new Date(contact.created_at).toLocaleDateString('en-IN', {
                          day: 'numeric', month: 'short', year: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}