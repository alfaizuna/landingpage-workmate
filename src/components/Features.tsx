import React from 'react';
import { 
  Calendar, 
  Users, 
  FileText, 
  MessageSquare, 
  BarChart3, 
  Heart,
  Clock,
  Shield,
  Zap,
  Target,
  BookOpen,
  Settings
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Kelola jadwal meeting dan booking ruangan dengan mudah',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Manajemen tim dan kolaborasi yang lebih efektif',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: FileText,
      title: 'Document Hub',
      description: 'Pusat dokumen terintegrasi untuk semua kebutuhan',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageSquare,
      title: 'Real-time Feedback',
      description: 'Sistem feedback real-time untuk improvement berkelanjutan',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Dashboard analitik untuk insights mendalam',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: Heart,
      title: 'Health Tracking',
      description: 'Monitor kesehatan dan wellness karyawan',
      color: 'from-rose-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Time Management',
      description: 'Manajemen waktu dan produktivitas yang optimal',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Keamanan tingkat enterprise untuk melindungi data',
      color: 'from-gray-500 to-slate-500'
    },
    {
      icon: Zap,
      title: 'AI Assistant',
      description: 'Asisten AI untuk membantu produktivitas harian',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Pantau dan capai target dengan mudah',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: BookOpen,
      title: 'Learning Hub',
      description: 'Platform pembelajaran dan development karyawan',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Settings,
      title: 'Custom Integration',
      description: 'Integrasi mudah dengan sistem yang sudah ada',
      color: 'from-slate-500 to-gray-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-100 rounded-full px-4 py-2 text-red-700 text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            <span>Fitur Lengkap</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Semua yang Anda Butuhkan dalam{' '}
            <span className="gradient-text">Satu Platform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            WorkMate menghadirkan fitur-fitur canggih yang dirancang khusus untuk meningkatkan 
            produktivitas dan engagement tim Anda.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Siap merasakan semua fitur ini? Mulai trial gratis hari ini!
          </p>
          <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-red-600 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all">
            <span>Mulai Trial Gratis</span>
            <Zap className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
