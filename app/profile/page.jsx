"use client"; // Required for state management

import { useState } from 'react';
import { Sidebar } from '@/app/(components)/Sidebar';
import { ProfileModal } from '@/app/(components)/ProfileModal';

const GithubIcon = () => <svg className="w-5 h-5 text-gray-500" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>;

// Initial user data
const initialProfile = {
  name: "Vijay Kumar",
  location: "Bengaluru, India",
  status: "Active today",
  lookingFor: "Data Analyst or Business Intelligence Intern",
  resume: "Resume.pdf",
  experience: {
    role: "Research Assistant",
    company: "Indian Institute of Technology",
    duration: "May 2024 to Aug 2024 - 4 months",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png",
    skills: ["Data Collection", "Statistical Analysis", "R"],
  },
  education: {
    degree: "B.Tech, Information Technology",
    institution: "National Institute of Technology, Karnataka",
    year: 2025,
  },
  skills: ["SQL", "Tableau", "Power BI", "Python", "Excel", "Statistics"],
};

export default function ProfilePage() {
  const [userProfile, setUserProfile] = useState(initialProfile);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveProfile = (updatedProfile) => {
    setUserProfile(updatedProfile);
  };

  return (
    <>
      <div className="flex h-screen">
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header with Edit Button */}
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">Your Profile</h1>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                >
                    Edit Profile
                </button>
            </div>
            
            <div className="mt-4 border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                    <a href="#" className="border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Profile</a>
                    <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Resume / CV</a>
                    <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Preferences</a>
                </nav>
            </div>

            {/* Profile Card */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800">What recruiters will see</h2>
              <div className="mt-4 bg-white border border-gray-200 rounded-lg p-6">
                
                {/* User Info Header */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{userProfile.name}</h3>
                      <p className="text-gray-600">{userProfile.location} • Open to remote</p>
                      <span className="mt-2 inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">{userProfile.status}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <a href="#" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600"><GithubIcon /><span>Github</span></a>
                    <button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">Website</button>
                    <button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">Resume</button>
                  </div>
                </div>

                <div className="mt-8 space-y-8">
                    {/* Looking For */}
                    <div>
                        <h4 className="font-semibold text-gray-800">Looking for</h4>
                        <p className="mt-2 text-gray-600">{userProfile.lookingFor}</p>
                    </div>

                    {/* Experience */}
                    <div>
                        <h4 className="font-semibold text-gray-800">Experience</h4>
                        <div className="mt-4 flex justify-between items-start">
                            <div className="flex space-x-4">
                                <img src={userProfile.experience.logo} alt="Company Logo" width={48} height={48} className="rounded-md"/>
                                <div>
                                    <p className="font-bold text-gray-900">{userProfile.experience.role}</p>
                                    <p className="text-gray-600">{userProfile.experience.company}</p>
                                    <p className="text-sm text-gray-500">{userProfile.experience.duration}</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {userProfile.experience.skills.map(skill => (
                                    <span key={skill} className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">{skill}</span>
                              ))}
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <h4 className="font-semibold text-gray-800">Education</h4>
                        <div className="mt-2">
                            <p className="font-bold text-gray-900">{userProfile.education.degree}</p>
                            <p className="text-gray-600">{userProfile.education.institution} • {userProfile.education.year}</p>
                        </div>
                    </div>

                    {/* Skills */}
                    <div>
                        <h4 className="font-semibold text-gray-800">Skills</h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {userProfile.skills.map(skill => (
                                <span key={skill} className="px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-800 rounded-full">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* The Modal for Editing */}
      <ProfileModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        user={userProfile}
        onSave={handleSaveProfile}
      />
    </>
  );

}
