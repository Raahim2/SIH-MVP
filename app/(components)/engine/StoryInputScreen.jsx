"use client";

import React, { useState } from 'react';
import { sampleStories } from '../../lib/engine-data';

const SampleStoryCard = ({ icon, title, onClick }) => (
    <div 
        onClick={onClick}
        className="bg-white border border-gray-200 rounded-lg p-6 text-center cursor-pointer transition-all duration-300 ease-in-out shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-blue-800"
    >
        <i className={`fas ${icon} text-3xl text-blue-800 mb-4`}></i>
        <p className="font-semibold uppercase text-xs tracking-wider text-gray-800">{title}</p>
    </div>
);

export default function StoryInputScreen({ onAnalyze }) {
    const [storyText, setStoryText] = useState('');
    const charCount = storyText.length;
    const isButtonDisabled = storyText.trim().length < 50;

    const handleAnalyzeClick = () => {
        if (!isButtonDisabled) {
            onAnalyze(storyText);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-4">
            <div className="container mx-auto max-w-3xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-blue-800 mb-4">Professional Experience Assessment</h2>
                    <p className="text-lg text-gray-600 mb-8">Share your professional background and experiences for intelligent career pathway analysis.</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg p-5 flex items-center gap-4 mb-8 shadow-sm">
                    <i className="fas fa-lightbulb text-2xl"></i>
                    <p className="font-medium italic m-0">Your professional experiences have equipped you with valuable competencies sought by leading organizations.</p>
                </div>

                <div className="mb-8">
                    <textarea 
                        id="storyText"
                        className="w-full p-5 text-lg leading-relaxed bg-white border-2 border-gray-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="Please document your professional experiences, including academic projects, work responsibilities, technical skills application, problem-solving instances, and collaborative achievements..."
                        rows="8"
                        value={storyText}
                        onChange={(e) => setStoryText(e.target.value)}
                    ></textarea>
                    <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
                        <span className="font-medium">{charCount} characters</span>
                        <small className="italic">Document concrete experiences and demonstrated competencies</small>
                    </div>
                </div>

                <div className="mb-8 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Professional Experience Examples:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <SampleStoryCard 
                            icon="fa-laptop-code" 
                            title="Technology Implementation"
                            onClick={() => setStoryText(sampleStories[0].story)}
                        />
                        <SampleStoryCard 
                            icon="fa-users-cog" 
                            title="Leadership & Project Management"
                            onClick={() => setStoryText(sampleStories[1].story)}
                        />
                    </div>
                </div>
                
                <button 
                    onClick={handleAnalyzeClick}
                    disabled={isButtonDisabled}
                    className="w-full text-lg font-bold text-white bg-gradient-to-r from-blue-800 to-blue-600 px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                    <i className="fas fa-analytics mr-3"></i>
                    Generate Internship Recommendations
                </button>
            </div>
        </div>
    );
}