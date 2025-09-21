"use client";

import { useState, useEffect } from 'react';

// A small component for the skill tags inside the modal
const SkillTag = ({ skill, onRemove }) => (
    <div className="flex items-center bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
        <span>{skill}</span>
        <button onClick={() => onRemove(skill)} className="ml-2 text-indigo-500 hover:text-indigo-700">
            &times;
        </button>
    </div>
);

export function ProfileModal({ isOpen, onClose, user, onSave }) {
    const [editedUser, setEditedUser] = useState(user);
    const [newSkill, setNewSkill] = useState("");

    // Sync state when the user prop changes (e.g., when modal is opened)
    useEffect(() => {
        setEditedUser(user);
    }, [user, isOpen]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedUser(prev => ({ ...prev, [name]: value }));
    };

    const handleAddSkill = () => {
        if (newSkill && !editedUser.skills.includes(newSkill)) {
            setEditedUser(prev => ({ ...prev, skills: [...prev.skills, newSkill] }));
            setNewSkill("");
        }
    };

    const handleRemoveSkill = (skillToRemove) => {
        setEditedUser(prev => ({
            ...prev,
            skills: prev.skills.filter(skill => skill !== skillToRemove)
        }));
    };
    
    const handleResumeUpload = (e) => {
        if (e.target.files && e.target.files[0]) {
            setEditedUser(prev => ({...prev, resume: e.target.files[0].name}));
        }
    }

    const handleSave = () => {
        onSave(editedUser);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-8 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Edit Profile</h2>

                {/* --- Personal Details --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" name="name" value={editedUser.name} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input type="text" name="location" value={editedUser.location} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Looking for (Role)</label>
                    <textarea name="lookingFor" value={editedUser.lookingFor} onChange={handleChange} rows="2" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
                </div>
                
                {/* --- Skills Management --- */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Skills</label>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {editedUser.skills.map(skill => <SkillTag key={skill} skill={skill} onRemove={handleRemoveSkill} />)}
                    </div>
                    <div className="mt-3 flex gap-2">
                        <input type="text" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} placeholder="Add a new skill" className="flex-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                        <button onClick={handleAddSkill} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Add</button>
                    </div>
                </div>
                
                {/* --- Resume Upload --- */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Resume</label>
                    <div className="mt-2 flex items-center justify-between p-3 border border-gray-200 rounded-md">
                        <span className="font-medium text-gray-700">{editedUser.resume || "No resume uploaded"}</span>
                        <label htmlFor="resume-upload" className="cursor-pointer px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
                            Upload New
                        </label>
                        <input id="resume-upload" type="file" className="hidden" onChange={handleResumeUpload} accept=".pdf,.doc,.docx" />
                    </div>
                </div>

                {/* --- Actions --- */}
                <div className="flex justify-end gap-4 pt-4">
                    <button onClick={onClose} className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancel</button>
                    <button onClick={handleSave} className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Save Changes</button>
                </div>
            </div>
        </div>
    );
}