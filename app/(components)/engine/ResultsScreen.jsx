"use client";

import React, { useState } from 'react';
import { pmInternshipDetails, eligibilityCriteria } from '../../lib/engine-data';

// --- Sub-Components for the Results Screen ---

const SkillCard = ({ icon, name, confidence }) => {
    const getConfidenceLabel = (conf) => {
        if (conf >= 85) return 'Expert Level';
        if (conf >= 70) return 'Proficient';
        return 'Intermediate';
    };

    return (
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center shadow-md transition-all hover:shadow-lg hover:-translate-y-1 hover:border-blue-800">
            <i className={`fas ${icon} text-4xl text-blue-800 mb-4`}></i>
            <div className="font-bold uppercase tracking-wider mb-2 text-gray-800">{name}</div>
            <div className="text-sm font-semibold text-gray-500 mb-3">{getConfidenceLabel(confidence)} ({confidence}%)</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-800 to-blue-500 h-2 rounded-full" style={{ width: `${confidence}%` }}></div>
            </div>
        </div>
    );
};

const InternshipCard = ({ internship, onViewDetails }) => (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 hover:border-blue-800 flex flex-col">
        <h3 className="text-xl font-bold uppercase tracking-wider text-blue-800">{internship.role}</h3>
        <p className="font-semibold text-gray-700 mb-3">{internship.company}</p>
        <div className="bg-green-100 border border-green-200 text-green-800 rounded-md p-3 flex items-center gap-3 mb-4">
            <i className="fas fa-chart-line"></i>
            <span className="font-bold text-sm">{internship.matchPercentage}% Compatibility</span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm mb-auto">
            <div>
                <strong className="block text-xs uppercase font-bold text-gray-500">Duration</strong>
                <span>{pmInternshipDetails.duration}</span>
            </div>
            <div>
                <strong className="block text-xs uppercase font-bold text-gray-500">Stipend</strong>
                <span>{pmInternshipDetails.stipend}</span>
            </div>
        </div>
        <div className="mt-4 flex gap-2">
            <button onClick={() => window.alert('This would redirect to the official PM Portal.')} className="flex-1 text-sm font-bold text-white bg-gradient-to-r from-blue-800 to-blue-600 px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <i className="fas fa-external-link-alt mr-2"></i>Apply
            </button>
            <button onClick={() => onViewDetails(internship)} className="flex-1 text-sm font-bold bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all">
                <i className="fas fa-info-circle mr-2"></i>Details
            </button>
        </div>
    </div>
);

const Section = ({ icon, title, children }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm mb-8">
        <h3 className="flex items-center gap-3 mb-6 text-2xl font-bold uppercase tracking-wider text-gray-800">
            <i className={`fas ${icon} text-blue-800`}></i>
            {title}
        </h3>
        {children}
    </div>
);

const BottomNav = ({ view, setView, onRestart }) => (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 flex z-50 shadow-lg">
        <button onClick={() => setView('results')} className={`flex-1 flex flex-col items-center p-4 transition-colors ${view === 'results' ? 'text-blue-800 bg-blue-50' : 'text-gray-500'}`}>
            <i className="fas fa-briefcase text-xl mb-1"></i>
            <span className="text-xs font-bold uppercase">Opportunities</span>
        </button>
        <button onClick={() => setView('profile')} className={`flex-1 flex flex-col items-center p-4 transition-colors ${view === 'profile' ? 'text-blue-800 bg-blue-50' : 'text-gray-500'}`}>
            <i className="fas fa-user-tie text-xl mb-1"></i>
            <span className="text-xs font-bold uppercase">Profile</span>
        </button>
        <button onClick={onRestart} className="flex-1 flex flex-col items-center p-4 text-gray-500 transition-colors">
            <i className="fas fa-plus-circle text-xl mb-1"></i>
            <span className="text-xs font-bold uppercase">New Assessment</span>
        </button>
    </nav>
);

const InternshipModal = ({ internship, onClose }) => {
    if (!internship) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="text-3xl font-bold text-blue-800">{internship.role}</h2>
                            <p className="text-lg font-semibold text-gray-600">{internship.company}</p>
                        </div>
                        <button onClick={onClose} className="text-gray-400 hover:text-red-500 transition-colors text-2xl">&times;</button>
                    </div>

                    <div className="mb-6">
                        <h4 className="font-bold text-gray-700 mb-2 uppercase tracking-wider">Competency Requirements</h4>
                        <div className="space-y-2">
                            {internship.skillsRequired.map(skill => (
                                <div key={skill} className={`p-3 rounded-md text-sm flex justify-between items-center ${internship.matchingSkills.includes(skill) ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-700'}`}>
                                    <span>{skill}</span>
                                    {internship.matchingSkills.includes(skill) && <i className="fas fa-check-circle"></i>}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6">
                        <h4 className="font-bold text-gray-700 mb-2 uppercase tracking-wider">Program Benefits</h4>
                        <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                            <div><strong className="block text-xs uppercase">Stipend:</strong> {pmInternshipDetails.stipend}</div>
                            <div><strong className="block text-xs uppercase">Grant:</strong> {pmInternshipDetails.one_time_grant}</div>
                            <div><strong className="block text-xs uppercase">Duration:</strong> {pmInternshipDetails.duration}</div>
                            <div><strong className="block text-xs uppercase">Insurance:</strong> Provided</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- The Main Results Screen Component ---

export default function ResultsScreen({ skills, recommendations, userStory, onRestart }) {
    const [view, setView] = useState('results'); // 'results' or 'profile'
    const [modalInternship, setModalInternship] = useState(null);

    const getSkillIcon = (skillName) => ({
        'Programming & Technical Skills': 'fa-code',
        'Customer Service & Communication': 'fa-comments',
        'Leadership & Team Management': 'fa-users',
        'Business & Marketing': 'fa-chart-line',
        'Research & Analytical Skills': 'fa-search',
    }[skillName] || 'fa-star');
    
    return (
        <div className="container mx-auto p-4 pb-24">
            <div className="text-center my-8">
                <h2 className="text-3xl font-bold text-blue-800">Professional Internship Recommendations</h2>
                <p className="text-lg text-gray-600 mt-2">Customized recommendations based on your competency analysis.</p>
            </div>

            {view === 'results' && (
                <div>
                    <Section icon="fa-clipboard-check" title="Identified Core Competencies">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {skills.map(skill => (
                                <SkillCard key={skill.name} icon={getSkillIcon(skill.name)} name={skill.name} confidence={skill.confidence} />
                            ))}
                        </div>
                    </Section>

                    <Section icon="fa-briefcase" title="PM Internship Opportunities">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {recommendations.map((internship, index) => (
                                <InternshipCard key={index} internship={internship} onViewDetails={setModalInternship} />
                            ))}
                        </div>
                    </Section>
                </div>
            )}

            {view === 'profile' && (
                <div>
                    <Section icon="fa-user-circle" title="Professional Summary">
                         <div className="bg-gray-50 p-4 rounded-lg italic text-gray-700 border border-gray-200">
                            <p>{userStory}</p>
                         </div>
                    </Section>
                     <Section icon="fa-tasks" title="Competency Assessment">
                        <div className="flex flex-wrap gap-3">
                            {skills.map(skill => (
                                <div key={skill.name} className="bg-blue-100 text-blue-800 font-semibold px-4 py-2 rounded-full text-sm">
                                    {skill.name}
                                </div>
                            ))}
                        </div>
                    </Section>
                </div>
            )}

            <BottomNav view={view} setView={setView} onRestart={onRestart} />
            <InternshipModal internship={modalInternship} onClose={() => setModalInternship(null)} />
        </div>
    );
}