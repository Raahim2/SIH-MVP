"use client";

import React, { useState, useEffect } from 'react';

const processingSteps = [
    { id: 1, icon: 'fa-file-text', text: 'Analyzing professional narrative using Advanced NLP' },
    { id: 2, icon: 'fa-cogs', text: 'Extracting core competencies and skill sets' },
    { id: 3, icon: 'fa-building', text: 'Matching with PM Internship opportunities' },
    { id: 4, icon: 'fa-user-tie', text: 'Generating personalized career recommendations' },
];

const Step = ({ icon, text, isActive, isCompleted }) => {
    const baseClasses = "flex items-center gap-4 p-5 rounded-lg transition-all duration-500 text-left shadow-sm";
    const inactiveClasses = "bg-white opacity-40";
    const activeClasses = "bg-blue-50 border border-blue-800 opacity-100 scale-105 shadow-md";
    const completedClasses = "bg-green-50 border border-green-600 opacity-100";

    const stateClasses = isCompleted ? completedClasses : (isActive ? activeClasses : inactiveClasses);

    return (
        <div className={`${baseClasses} ${stateClasses}`}>
            <i className={`fas ${icon} text-2xl w-8 ${isCompleted ? 'text-green-600' : 'text-blue-800'}`}></i>
            <span className="font-medium">{text}</span>
        </div>
    );
};


export default function ProcessingScreen() {
    const [currentStep, setCurrentStep] = useState(1);

    useEffect(() => {
        // Set up an interval to advance the step every 1.5 seconds
        const interval = setInterval(() => {
            setCurrentStep(prevStep => {
                if (prevStep < processingSteps.length + 1) {
                    return prevStep + 1;
                }
                clearInterval(interval);
                return prevStep;
            });
        }, 1500);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-4 text-center">
            <div className="max-w-2xl w-full">
                <div className="w-24 h-24 border-8 border-gray-200 border-t-blue-800 rounded-full animate-spin mx-auto mb-8"></div>
                
                <h2 className="text-2xl font-bold text-blue-800 mb-4">
                    {currentStep <= processingSteps.length ? processingSteps[currentStep - 1]?.text : 'Finalizing Recommendations...'}
                </h2>
                <p className="text-gray-600 mb-10 italic">Processing competencies and generating targeted recommendations...</p>

                <div className="space-y-4">
                    {processingSteps.map(step => (
                        <Step 
                            key={step.id}
                            icon={step.icon}
                            text={step.text}
                            isActive={currentStep === step.id}
                            isCompleted={currentStep > step.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}