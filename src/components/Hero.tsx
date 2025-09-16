import React from 'react';
import { ArrowRight, Users, Zap, Shield, Heart } from 'lucide-react';

interface HeroProps {
  onLogin: () => void;
}

const Hero: React.FC<HeroProps> = ({ onLogin }) => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-red-50/30 to-pink-50/30 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-100 to-pink-100 rounded-full px-4 py-2 text-red-700 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>Platform #1 untuk Employee Engagement</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transformasi{' '}
              <span className="gradient-text">
                Workplace
              </span>
              {' '}untuk Tim Modern
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              WorkMate menghadirkan solusi all-in-one untuk meningkatkan produktivitas, engagement, 
              dan kesejahteraan karyawan dalam satu platform yang mudah digunakan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={onLogin}
                className="group flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-red-600 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all text-lg"
              >
                <span>Mulai Gratis Sekarang</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={onLogin}
                className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-red-500 hover:text-red-600 transition-all text-lg"
              >
                <span>Lihat Demo</span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-red-600">5000+</div>
                <div className="text-sm text-gray-500">Perusahaan</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-red-600">150k+</div>
                <div className="text-sm text-gray-500">Karyawan Aktif</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-red-600">99%</div>
                <div className="text-sm text-gray-500">Uptime</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Feature Cards */}
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-400/10 to-pink-400/10 rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-3xl transform -rotate-3"></div>
            
            <div className="relative grid gap-6">
              {/* Feature Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Team Collaboration</h3>
                    <p className="text-gray-600 text-sm">Kolaborasi tim yang lebih efektif</p>
                  </div>
                </div>
              </div>
              
              {/* Feature Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 ml-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Security First</h3>
                    <p className="text-gray-600 text-sm">Keamanan data tingkat enterprise</p>
                  </div>
                </div>
              </div>
              
              {/* Feature Card 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Employee Wellness</h3>
                    <p className="text-gray-600 text-sm">Pantau kesehatan & kesejahteraan tim</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
