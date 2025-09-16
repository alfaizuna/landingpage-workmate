import React from 'react';
import { Check, Zap, Crown, Building, Star } from 'lucide-react';

interface PricingProps {
  onLogin: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onLogin }) => {
  const plans = [
    {
      name: 'Starter',
      price: 'Gratis',
      period: 'untuk selamanya',
      description: 'Cocok untuk tim kecil yang baru memulai',
      features: [
        'Hingga 10 pengguna',
        'Dashboard dasar',
        'Task management',
        'Basic calendar',
        '5GB storage',
        'Email support'
      ],
      buttonText: 'Mulai Gratis',
      popular: false,
      icon: Zap,
      color: 'from-gray-500 to-slate-500'
    },
    {
      name: 'Professional',
      price: 'Rp 150.000',
      period: 'per pengguna/bulan',
      description: 'Solusi lengkap untuk tim yang sedang berkembang',
      features: [
        'Hingga 100 pengguna',
        'Advanced analytics',
        'Meeting room booking',
        'Document management',
        'Health tracking',
        'Feedback system',
        'AI Assistant',
        '100GB storage',
        'Priority support',
        'Custom integrations'
      ],
      buttonText: 'Pilih Professional',
      popular: true,
      icon: Star,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'sesuai kebutuhan',
      description: 'Solusi enterprise dengan fitur advanced',
      features: [
        'Unlimited pengguna',
        'White-label solution',
        'Advanced security',
        'Custom development',
        'Dedicated support',
        'SLA guarantee',
        'On-premise deployment',
        'Unlimited storage',
        'Training & onboarding',
        'Custom reporting'
      ],
      buttonText: 'Hubungi Sales',
      popular: false,
      icon: Building,
      color: 'from-purple-500 to-violet-500'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 text-purple-700 text-sm font-medium mb-4">
            <Crown className="w-4 h-4" />
            <span>Harga Transparan</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pilih Paket yang{' '}
            <span className="gradient-text">Tepat</span>
            {' '}untuk Anda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mulai dari gratis hingga enterprise. Semua paket include support 24/7 
            dan akses ke semua update fitur terbaru.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl border-2 p-8 transition-all hover:shadow-2xl transform hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-red-500 shadow-xl' 
                  : 'border-gray-200 hover:border-red-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== 'Gratis' && plan.price !== 'Custom' && (
                    <span className="text-gray-600 text-sm ml-1">/user</span>
                  )}
                </div>
                <p className="text-gray-500 text-sm">{plan.period}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onLogin}
                className={`w-full py-4 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-600 to-pink-500 text-white hover:shadow-lg transform hover:-translate-y-0.5'
                    : 'border-2 border-gray-300 text-gray-700 hover:border-red-500 hover:text-red-600'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Apakah ada biaya setup atau implementasi?
                </h4>
                <p className="text-gray-600 text-sm">
                  Tidak ada biaya setup. Semua paket sudah include onboarding dan training gratis.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Bisakah upgrade atau downgrade paket kapan saja?
                </h4>
                <p className="text-gray-600 text-sm">
                  Ya, Anda bisa mengubah paket kapan saja. Billing akan disesuaikan secara pro-rata.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Bagaimana dengan keamanan data?
                </h4>
                <p className="text-gray-600 text-sm">
                  Kami menggunakan enkripsi tingkat enterprise dan compliance dengan ISO 27001, SOC 2, dan GDPR.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Apakah ada kontrak jangka panjang?
                </h4>
                <p className="text-gray-600 text-sm">
                  Tidak, semua paket berbasis monthly subscription tanpa kontrak jangka panjang.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Bagaimana dengan migrasi data dari sistem lama?
                </h4>
                <p className="text-gray-600 text-sm">
                  Tim kami akan membantu migrasi data secara gratis untuk paket Professional dan Enterprise.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Apakah tersedia API untuk integrasi?
                </h4>
                <p className="text-gray-600 text-sm">
                  Ya, kami menyediakan REST API lengkap dan webhook untuk integrasi dengan sistem existing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-50 to-pink-50 p-8 rounded-3xl max-w-2xl mx-auto border border-red-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Masih Ragu? Coba Gratis Dulu!
            </h3>
            <p className="text-gray-600 mb-6">
              Dapatkan akses penuh ke semua fitur Professional selama 14 hari. 
              Tidak perlu kartu kredit.
            </p>
            <button 
              onClick={onLogin}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-red-600 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
            >
              <span>Mulai Trial 14 Hari Gratis</span>
              <Zap className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
