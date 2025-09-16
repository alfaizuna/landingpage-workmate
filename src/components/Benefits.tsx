import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Heart, 
  Shield, 
  Zap,
  CheckCircle,
  Star
} from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: '40% Peningkatan Produktivitas',
      description: 'Rata-rata peningkatan produktivitas tim setelah menggunakan WorkMate',
      stats: '+40%',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: '85% Employee Satisfaction',
      description: 'Tingkat kepuasan karyawan meningkat signifikan dengan WorkMate',
      stats: '85%',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: '30% Penghematan Waktu',
      description: 'Otomatisasi tugas rutin menghemat waktu untuk hal yang lebih penting',
      stats: '-30%',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Heart,
      title: '60% Better Work-Life Balance',
      description: 'Keseimbangan kerja-hidup yang lebih baik dengan fitur wellness tracking',
      stats: '+60%',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const testimonials = [
    {
      name: 'Rio Herlambang',
      role: 'Data Engineer',
      content: 'Workmate sangat membantu onboarding karyawan baru seperti saya. Prosesnya jadi lebih cepat dan efisien.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Shanina Eki Prasesti',
      role: 'Business Analyst',
      content: 'Dengan workmate, membantu saya menyelesaikan proses onboarding karyawan baru dengan lebih cepat dan efisien.',
      rating: 5,
      avatar: '👩‍💻'
    },
    {
      name: 'Fachreza Nur Iman',
      role: 'Supervisor',
      content: 'Workmate memudahkan saya dalam mengelola tim dan meningkatkan produktivitas kerja secara keseluruhan.',
      rating: 5,
      avatar: '👨‍🔧'
    }
  ];

  const advantages = [
    'Setup dalam 5 menit tanpa technical expertise',
    'Integrasi mudah dengan tools yang sudah ada',
    'Support 24/7 dari tim expert kami',
    'Data security tingkat enterprise',
    'Scalable untuk tim kecil hingga enterprise',
    'Regular updates dan fitur baru setiap bulan'
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-red-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 text-green-700 text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            <span>Proven Results</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Dampak Nyata untuk{' '}
            <span className="gradient-text">Bisnis Anda</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lebih dari 5000+ perusahaan telah merasakan transformasi positif dengan WorkMate. 
            Saatnya giliran Anda!
          </p>
        </div>

        {/* Benefits Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{benefit.stats}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Advantages */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Mengapa Memilih WorkMate?
            </h3>
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{advantage}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl border border-red-100">
              <div className="flex items-center space-x-3 mb-3">
                <Shield className="w-6 h-6 text-red-600" />
                <span className="font-semibold text-gray-900">Enterprise Ready</span>
              </div>
              <p className="text-gray-600 text-sm">
                Trusted by Fortune 500 companies dengan sertifikasi SOC 2, ISO 27001, 
                dan GDPR compliance untuk keamanan data maksimal.
              </p>
            </div>
          </div>

          {/* Right - Testimonials */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Apa Kata Mereka?
            </h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                    <div className="ml-auto flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-3xl shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Siap Bergabung dengan 5000+ Perusahaan?
            </h3>
            <p className="text-gray-600 mb-6">
              Mulai transformasi digital workplace Anda hari ini dengan trial gratis 14 hari.
            </p>
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-red-600 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all">
              <span>Mulai Trial Gratis</span>
              <Zap className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
