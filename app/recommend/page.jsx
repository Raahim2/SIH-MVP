"use client";

import { useState, useEffect } from 'react';
import * as engineData from '../lib/engine-data'
import LandingScreen from '../(components)/engine/LoadingScreen';
import StoryInputScreen from '../(components)/engine/StoryInputScreen';
import ProcessingScreen from '../(components)/engine/ProcessingScreen';
import ResultsScreen from '../(components)/engine/ResultsScreen';
import { Sidebar } from '../(components)/Sidebar';

// --- Core Logic Functions (ported from your app.js) ---

function extractSkillsFromStory(story) {
    const skills = [];
    const storyLower = story.toLowerCase();
    
    engineData.storyToSkillMapping.forEach(mapping => {
        const matches = mapping.story_keywords.filter(keyword => 
            storyLower.includes(keyword.toLowerCase())
        );
        
        if (matches.length > 0) {
            const confidence = Math.min(95, 70 + (matches.length * 5));
            skills.push({
                name: mapping.extracted_skill,
                confidence: confidence,
                matches: matches,
                matchingRoles: mapping.matching_roles
            });
        }
    });

    if (skills.length === 0) {
        skills.push(
            { name: 'Professional Communication', confidence: 75, matches: [], matchingRoles: [] },
            { name: 'Problem Solving', confidence: 70, matches: [], matchingRoles: [] }
        );
    }

    return skills.sort((a, b) => b.confidence - a.confidence);
}

function getInternshipRecommendations(identifiedSkills) {
    const userSkills = identifiedSkills.map(s => s.name);
    const recommendations = [];

    engineData.pmInternshipCompanies.forEach(company => {
        company.roles.forEach(role => {
            const matchingSkills = company.skills_required.filter(skill => 
                userSkills.some(userSkill => userSkill.toLowerCase().includes(skill.toLowerCase()) || 
                                         skill.toLowerCase().includes(userSkill.toLowerCase()))
            );
            
            const matchPercentage = Math.round((matchingSkills.length / company.skills_required.length) * 100);
            
            if (matchPercentage > 25 || recommendations.length < 3) {
                recommendations.push({
                    company: company.name,
                    sector: company.sector,
                    role: role,
                    locations: company.locations,
                    skillsRequired: company.skills_required,
                    matchPercentage: Math.max(matchPercentage, 50),
                    matchingSkills: matchingSkills
                });
            }
        });
    });

    return recommendations.sort((a, b) => b.matchPercentage - a.matchPercentage).slice(0, 5);
}


// --- Main Page Component ---

export default function RecommendationEnginePage() {
    // State to manage which screen is visible
    const [screen, setScreen] = useState('landing'); // 'landing', 'storyInput', 'processing', 'results'

    // State to hold user input and results
    const [userStory, setUserStory] = useState('');
    const [identifiedSkills, setIdentifiedSkills] = useState([]);
    const [recommendations, setRecommendations] = useState([]);

    // This effect runs when the screen changes to 'processing'
    useEffect(() => {
        if (screen === 'processing') {
            const timer = setTimeout(() => {
                setScreen('results');
            }, 4500); // Simulate the multi-step processing animation time
            return () => clearTimeout(timer); // Cleanup on component unmount
        }
    }, [screen]);

    // Handler to start the analysis
    const handleAnalyzeStory = (story) => {
        if (story.trim().length < 50) {
            alert('Please provide a more detailed description (minimum 50 characters).');
            return;
        }
        setUserStory(story);
        const extracted = extractSkillsFromStory(story);
        setIdentifiedSkills(extracted);
        
        const recs = getInternshipRecommendations(extracted);
        setRecommendations(recs);
        
        setScreen('processing');
    };

    const restart = () => {
        setUserStory('');
        setIdentifiedSkills([]);
        setRecommendations([]);
        setScreen('landing');
    }

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar />
            {/* This main content area will take the remaining space and scroll */}
            <main className="flex-1 overflow-y-auto">
                <div className="bg-[#FCFCF9] text-[#13343B]">
                    {screen === 'landing' && (
                        <LandingScreen onStart={() => setScreen('storyInput')} />
                    )}
                    {screen === 'storyInput' && (
                        <StoryInputScreen onAnalyze={handleAnalyzeStory} /> 
                    )}
                    {screen === 'processing' && (
                        <ProcessingScreen /> 
                    )}
                    {screen === 'results' && (
                        <ResultsScreen 
                            skills={identifiedSkills}
                            recommendations={recommendations}
                            userStory={userStory}
                            onRestart={restart}
                        /> 
                    )}
                </div>
            </main>
        </div>
    );
}
