import React from 'react';

// A simple component for stat cards to avoid repetition
const StatCard = ({ number, label }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-5 text-center shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
        <div className="text-3xl font-bold text-blue-800 font-mono">{number}</div>
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">{label}</div>
    </div>
);

// A simple component for feature cards
const FeatureCard = ({ icon, label }) => (
    <div className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
        <i className={`fas ${icon} text-3xl text-blue-800 mb-4`}></i>
        <span className="text-xs font-semibold text-center text-gray-800 uppercase tracking-wider">{label}</span>
    </div>
);


export default function LandingScreen({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
      <div className="container mx-auto max-w-4xl">
        
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-800 to-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg border-2 border-white/20 mb-6">
          <i className="fas fa-certificate"></i>
          <span>Government of India Initiative</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
          PM Internship Recommendation Engine
        </h1>
        
        <p className="text-lg text-gray-500 italic mb-8">
          Smart India Hackathon 2025 - Problem Statement 25033
        </p>

        <div className="max-w-3xl mx-auto text-lg text-gray-600 space-y-4 mb-10">
          <p>Advanced AI-powered platform connecting candidates with <strong>PM Internship Scheme opportunities</strong> across India's leading 500 organizations.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
          <StatCard number="1+ Crore" label="Internship Positions" />
          <StatCard number="500+" label="Partner Organizations" />
          <StatCard number="₹5,000" label="Monthly Stipend" />
          <StatCard number="24" label="Industry Sectors" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-10">
            <FeatureCard icon="fa-microphone-alt" label="Voice-Enabled Interface" />
            <FeatureCard icon="fa-brain" label="AI-Powered Analysis" />
            <FeatureCard icon="fa-building" label="Enterprise Integration" />
        </div>

        <button 
          onClick={onStart} 
          className="text-xl font-bold text-white bg-gradient-to-r from-blue-800 to-blue-600 px-12 py-5 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out"
        >
          <i className="fas fa-arrow-right mr-3"></i>
          Access PM Internship Portal
        </button>
        
        <div className="mt-6 text-sm text-gray-500 font-medium flex justify-center items-center gap-2">
            <i className="fas fa-link text-green-600"></i>
            <p>Direct integration with Official PM Internship Portal</p>
        </div>

      </div>
    </div>
  );
}