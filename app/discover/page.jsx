"use client";

import { useState, useEffect } from 'react';
import internshipsData from '../../public/data.json';
import { Sidebar } from '../(components)/Sidebar';

const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

export default function DiscoverPage() {
  const [internships, setInternships] = useState([]);
  const [selectedInternship, setSelectedInternship] = useState(null);

  useEffect(() => {
    const shuffledData = shuffleArray([...internshipsData]); 
    setInternships(shuffledData);
    if (shuffledData.length > 0) {
      setSelectedInternship(shuffledData[0]);
    }
  }, []);

  const handleApply = () => {
    alert(`Applying for: ${selectedInternship.title}. This is a dummy action.`);
  };

  return (
    // 1. Use h-screen to ensure the container fills the entire screen height
    <div className="flex h-screen">
      {/* Sidebar is now the first item, so it appears on the left */}
      <Sidebar />
      
      {/* 2. Create a main wrapper for the two content columns */}
      {/* flex-1 makes it take up remaining space. overflow-hidden contains its children. */}
      <main className="flex-1 flex overflow-hidden">
        {/* Left Column: Internship List */}
        <div className="w-1/3 overflow-y-auto bg-white border-r border-gray-200">
          <div className="p-4 border-b sticky top-0 bg-white z-10">
            <h2 className="text-lg font-semibold text-gray-700">Discover Internships ({internships.length})</h2>
          </div>
          <ul>
            {internships.map((internship) => (
              <li key={internship.id}>
                <button
                  onClick={() => setSelectedInternship(internship)}
                  className={`w-full text-left p-4 border-b hover:bg-indigo-50 focus:outline-none transition-colors duration-150 ${
                    selectedInternship?.id === internship.id ? 'bg-indigo-100 border-l-4 border-indigo-500' : ''
                  }`}
                >
                  <h3 className="font-bold text-gray-900">{internship.title}</h3>
                  <p className="text-sm text-gray-600">{internship.ministry}</p>
                  <p className="text-sm text-gray-500 mt-1">{internship.location} • {internship.postedDate}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Internship Details */}
        <div className="w-2/3 overflow-y-auto p-8">
          {selectedInternship ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-extrabold text-gray-900">{selectedInternship.title}</h2>
              <p className="mt-2 text-lg font-semibold text-indigo-600">{selectedInternship.ministry}</p>
              
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-gray-600">
                <span>📍 {selectedInternship.location}</span>
                <span>💰 {selectedInternship.stipend}</span>
                <span>⏳ {selectedInternship.duration}</span>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-800">Skills Required:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedInternship.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 text-sm font-medium bg-gray-200 text-gray-800 rounded-full">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="mt-6 prose max-w-none text-gray-700">
                <h4 className="font-semibold text-gray-800">Job Description:</h4>
                <p>{selectedInternship.description}</p>
              </div>

              <div className="mt-8 text-right">
                <button 
                  onClick={handleApply}
                  className="px-6 py-3 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 shadow-lg"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Select an internship to view details.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}