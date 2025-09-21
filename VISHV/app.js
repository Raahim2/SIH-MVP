// PM Internship Data (from provided JSON)
const pmInternshipCompanies = [
    {
        "name": "Tata Consultancy Services",
        "sector": "Information Technology & Software Development",
        "locations": ["Mumbai", "Pune", "Bangalore", "Chennai", "Hyderabad"],
        "roles": ["Software Development Intern", "Data Analytics Intern", "Digital Solutions Intern"],
        "skills_required": ["Programming Languages", "Problem Solving", "Professional Communication", "Analytical Thinking"]
    },
    {
        "name": "Reliance Industries Limited",
        "sector": "Oil, Gas & Energy",
        "locations": ["Mumbai", "Jamnagar", "Vadodara", "New Delhi"],
        "roles": ["Operations Management Intern", "Business Development Intern", "Technical Operations Intern"],
        "skills_required": ["Technical Knowledge", "Strategic Problem Solving", "Leadership Capabilities", "Professional Communication"]
    },
    {
        "name": "HDFC Bank Limited",
        "sector": "Banking & Financial Services",
        "locations": ["Mumbai", "New Delhi", "Bangalore", "Chennai", "Kolkata"],
        "roles": ["Banking Operations Intern", "Customer Relations Intern", "Risk Assessment Intern"],
        "skills_required": ["Customer Service Excellence", "Professional Communication", "Financial Analysis", "Problem Resolution"]
    },
    {
        "name": "Maruti Suzuki India Limited",
        "sector": "Automotive Manufacturing",
        "locations": ["Gurgaon", "Manesar", "Aurangabad", "Ahmedabad"],
        "roles": ["Production Management Intern", "Quality Assurance Intern", "Supply Chain Intern"],
        "skills_required": ["Technical Proficiency", "Quality Management", "Team Collaboration", "Process Optimization"]
    },
    {
        "name": "Larsen & Toubro Limited",
        "sector": "Infrastructure & Construction",
        "locations": ["Mumbai", "Chennai", "Hyderabad", "Pune", "Coimbatore"],
        "roles": ["Engineering Management Intern", "Project Coordination Intern", "Technical Development Intern"],
        "skills_required": ["Engineering Fundamentals", "Project Management", "Technical Communication", "Strategic Planning"]
    },
    {
        "name": "Mahindra & Mahindra Limited",
        "sector": "Automotive & Manufacturing",
        "locations": ["Mumbai", "Chennai", "Pune", "Nashik"],
        "roles": ["Manufacturing Excellence Intern", "Research & Development Intern", "Business Analytics Intern"],
        "skills_required": ["Manufacturing Processes", "Research Methodology", "Data Analysis", "Innovation Management"]
    },
    {
        "name": "Jubilant FoodWorks Limited",
        "sector": "Food Service & Hospitality",
        "locations": ["Noida", "Mumbai", "New Delhi", "Bangalore"],
        "roles": ["Operations Management Intern", "Marketing Strategy Intern", "Customer Experience Intern"],
        "skills_required": ["Operations Management", "Strategic Marketing", "Customer Service", "Business Communication"]
    },
    {
        "name": "Eicher Motors Limited",
        "sector": "Automotive Engineering",
        "locations": ["Chennai", "Aurangabad", "New Delhi"],
        "roles": ["Design Engineering Intern", "Manufacturing Process Intern", "Quality Systems Intern"],
        "skills_required": ["Design Thinking", "Manufacturing Engineering", "Quality Control", "Technical Innovation"]
    }
];

const pmInternshipDetails = {
    "duration": "12 months",
    "stipend": "₹5,000 per month",
    "one_time_grant": "₹6,000",
    "company_contribution": "₹500 per month",
    "government_contribution": "₹4,500 per month",
    "insurance": ["PM Jeevan Jyoti Bima Yojana", "PM Suraksha Bima Yojana"],
    "total_opportunities": "1+ Crore over 5 years",
    "pilot_phase": "1.25 lakh internships",
    "participating_companies": "500+ top companies",
    "sectors": "24 sectors including Banking, IT, Manufacturing, Oil & Gas, etc."
};

const eligibilityCriteria = {
    "age": "21-24 years",
    "family_income": "Below ₹8 lakh per annum",
    "education": "Minimum 10th pass (ITI, Polytechnic, Graduation allowed)",
    "exclusions": [
        "IIT/IIM/NLU graduates",
        "CA, MBA, Master's degree holders",
        "Government employee family members",
        "Currently employed full-time"
    ]
};

const storyToSkillMapping = [
    {
        "story_keywords": ["programming", "coding", "software", "apps", "websites", "computer", "technology", "development", "technical"],
        "extracted_skill": "Programming & Technical Skills",
        "confidence_factors": ["project experience", "problem solving", "learning ability"],
        "matching_roles": ["Software Development Intern", "Technical Operations Intern", "Data Analytics Intern"]
    },
    {
        "story_keywords": ["customers", "service", "helping", "communication", "explaining", "guidance", "support", "assistance"],
        "extracted_skill": "Customer Service & Communication",
        "confidence_factors": ["interpersonal skills", "patience", "problem resolution"],
        "matching_roles": ["Customer Relations Intern", "Banking Operations Intern", "Customer Experience Intern"]
    },
    {
        "story_keywords": ["team", "group", "leading", "organizing", "managing", "coordinating", "leadership", "supervision"],
        "extracted_skill": "Leadership & Team Management",
        "confidence_factors": ["collaborative work", "responsibility", "decision making"],
        "matching_roles": ["Project Coordination Intern", "Operations Management Intern", "Business Development Intern"]
    },
    {
        "story_keywords": ["sales", "business", "marketing", "promoting", "convincing", "negotiating", "strategy", "planning"],
        "extracted_skill": "Business & Marketing",
        "confidence_factors": ["persuasion", "market understanding", "customer insight"],
        "matching_roles": ["Marketing Strategy Intern", "Business Development Intern", "Business Analytics Intern"]
    },
    {
        "story_keywords": ["research", "analysis", "data", "studying", "investigating", "finding", "evaluation", "assessment"],
        "extracted_skill": "Research & Analytical Skills",
        "confidence_factors": ["curiosity", "systematic thinking", "attention to detail"],
        "matching_roles": ["Research & Development Intern", "Data Analytics Intern", "Risk Assessment Intern"]
    }
];

const heroMessages = {
    "Hope": [
        "Your professional experiences have equipped you with valuable competencies sought by leading organizations.",
        "Every experience has contributed to your professional development and career readiness.",
        "Top-tier companies recognize the value of diverse professional backgrounds and experiences."
    ],
    "Efficacy": [
        "Your demonstrated capabilities align with industry requirements for internship positions.",
        "Your professional experiences showcase the competencies valued by participating organizations.",
        "You possess the foundational skills required for successful internship performance."
    ],
    "Resilience": [
        "Your ability to overcome challenges demonstrates the resilience valued in professional environments.",
        "Professional growth through diverse experiences strengthens your candidacy for competitive positions.",
        "Adaptability and learning agility are key strengths that enhance your professional profile."
    ],
    "Optimism": [
        "Exceptional opportunities await candidates with your professional background and capabilities.",
        "Your career trajectory aligns with the growth opportunities available through this program.",
        "Professional development through structured internships will accelerate your career advancement."
    ]
};

const sampleStories = [
    {
        "story": "During my academic tenure, I assisted a local retail establishment in implementing digital inventory management systems. I developed proficiency in spreadsheet applications and facilitated the transition to electronic sales tracking. During the COVID-19 pandemic, I provided technical support for establishing online ordering capabilities through WhatsApp Business platform. This initiative enabled business continuity during challenging market conditions.",
        "extracted_skills": ["Digital Literacy", "Problem Solving", "Business Process Improvement", "Technical Support"],
        "recommended_internships": ["Business Development Intern - Jubilant Foodworks", "Operations Management Intern - Reliance Industries"],
        "match_percentage": 87
    },
    {
        "story": "As an active member of my institution's cultural coordination committee, I managed large-scale events for over 500 participants. My responsibilities included budget allocation, vendor coordination, and supervision of a 15-member volunteer team. Despite resource constraints, I successfully executed three major institutional events, demonstrating project management and leadership capabilities.",
        "extracted_skills": ["Leadership", "Project Management", "Budget Management", "Team Coordination"],
        "recommended_internships": ["Project Coordination Intern - Larsen & Toubro", "Operations Management Intern - Mahindra & Mahindra"],
        "match_percentage": 92
    }
];

// Application State
class PMInternshipApp {
    constructor() {
        this.currentScreen = 'landing';
        this.userStory = '';
        this.identifiedSkills = [];
        this.recommendedInternships = [];
        this.selectedLanguage = 'en';
        this.savedOpportunities = [];
        this.processingStep = 0;
    }

    setScreen(screen) {
        console.log(`Switching to screen: ${screen}`);
        
        // Hide all screens
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        // Show target screen
        const targetScreen = document.getElementById(screen);
        if (targetScreen) {
            targetScreen.classList.add('active');
            console.log(`Screen ${screen} is now active`);
        } else {
            console.error(`Screen ${screen} not found`);
        }
        this.currentScreen = screen;
        
        // Show/hide bottom nav based on screen
        const bottomNav = document.getElementById('bottomNav');
        if (screen === 'results' || screen === 'profile') {
            if (bottomNav) bottomNav.style.display = 'flex';
        } else {
            if (bottomNav) bottomNav.style.display = 'none';
        }

        // Update nav active state
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        if (screen === 'results') {
            document.getElementById('navResults')?.classList.add('active');
        } else if (screen === 'profile') {
            document.getElementById('navProfile')?.classList.add('active');
        }

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setStory(story) {
        this.userStory = story;
        this.analyzeStoryForPMInternship();
    }

    analyzeStoryForPMInternship() {
        // Extract skills based on story content
        this.identifiedSkills = this.extractSkillsFromStory(this.userStory);
        this.recommendedInternships = this.getInternshipRecommendations();
    }

    extractSkillsFromStory(story) {
        const skills = [];
        const storyLower = story.toLowerCase();
        
        storyToSkillMapping.forEach(mapping => {
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

        // Add some basic skills if none found
        if (skills.length === 0) {
            skills.push(
                { name: 'Professional Communication', confidence: 75, matches: [], matchingRoles: [] },
                { name: 'Problem Solving', confidence: 70, matches: [], matchingRoles: [] }
            );
        }

        return skills.sort((a, b) => b.confidence - a.confidence);
    }

    getInternshipRecommendations() {
        const userSkills = this.identifiedSkills.map(s => s.name);
        const recommendations = [];

        pmInternshipCompanies.forEach(company => {
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
}

// Global app instance
const appState = new PMInternshipApp();

// Utility Functions
function getSkillIcon(skillName) {
    const iconMap = {
        'Programming & Technical Skills': 'fa-code',
        'Customer Service & Communication': 'fa-comments',
        'Leadership & Team Management': 'fa-users',
        'Business & Marketing': 'fa-chart-line',
        'Research & Analytical Skills': 'fa-search',
        'Professional Communication': 'fa-comments',
        'Problem Solving': 'fa-puzzle-piece',
        'Digital Literacy': 'fa-laptop',
        'Project Management': 'fa-tasks'
    };
    return iconMap[skillName] || 'fa-star';
}

function formatConfidence(confidence) {
    if (confidence >= 85) return 'Expert Level';
    if (confidence >= 70) return 'Proficient';
    if (confidence >= 50) return 'Intermediate';
    return 'Developing';
}

function getRandomHeroMessage(type) {
    const messages = heroMessages[type];
    return messages[Math.floor(Math.random() * messages.length)];
}

// Story Input Functions
function toggleVoiceInput() {
    console.log('Voice input toggled');
    const voiceButton = document.getElementById('voiceButton');
    const voiceText = voiceButton?.querySelector('.voice-text');
    
    if (voiceButton?.classList.contains('recording')) {
        // Stop recording
        voiceButton.classList.remove('recording');
        if (voiceText) voiceText.textContent = 'Voice Input Available';
        
        // Simulate voice input result
        const storyTextarea = document.getElementById('storyText');
        if (storyTextarea && !storyTextarea.value.trim()) {
            storyTextarea.value = sampleStories[0].story;
            updateCharCount();
        }
    } else {
        // Start recording
        if (voiceButton) voiceButton.classList.add('recording');
        if (voiceText) voiceText.textContent = 'Recording in Progress...';
        
        // Simulate recording for 3 seconds then auto-stop
        setTimeout(() => {
            if (voiceButton?.classList.contains('recording')) {
                toggleVoiceInput(); // Stop recording
            }
        }, 3000);
    }
}

function useSampleStory(index) {
    console.log(`Using sample story ${index}`);
    const storyTextarea = document.getElementById('storyText');
    if (storyTextarea && sampleStories[index]) {
        storyTextarea.value = sampleStories[index].story;
        updateCharCount();
        
        // Add visual feedback
        const sampleCards = document.querySelectorAll('.sample-story-card');
        if (sampleCards[index]) {
            sampleCards[index].style.transform = 'scale(0.95)';
            setTimeout(() => {
                sampleCards[index].style.transform = '';
            }, 150);
        }
    }
}

function updateCharCount() {
    const storyTextarea = document.getElementById('storyText');
    const charCount = document.getElementById('charCount');
    const analyzeBtn = document.getElementById('analyzeStoryBtn');
    
    if (!storyTextarea || !charCount || !analyzeBtn) return;
    
    const storyText = storyTextarea.value;
    charCount.textContent = `${storyText.length} characters`;
    
    // Enable/disable analyze button
    if (storyText.trim().length > 50) {
        analyzeBtn.disabled = false;
        analyzeBtn.classList.remove('btn--disabled');
    } else {
        analyzeBtn.disabled = true;
        analyzeBtn.classList.add('btn--disabled');
    }
}

function analyzeForPMInternship() {
    console.log('Starting PM Internship analysis');
    const storyTextarea = document.getElementById('storyText');
    if (!storyTextarea) return;
    
    const storyText = storyTextarea.value.trim();
    if (storyText.length < 50) {
        alert('Please provide a more comprehensive professional background description (minimum 50 characters) to ensure accurate assessment and recommendations.');
        return;
    }
    
    console.log('Analyzing professional profile for PM Internship:', storyText);
    appState.setStory(storyText);
    startPMInternshipProcessing();
}

function startPMInternshipProcessing() {
    console.log('Starting processing animation');
    appState.setScreen('processing');
    
    const titles = [
        'Initializing Advanced Natural Language Processing Systems',
        'Analyzing Professional Experience Narratives',
        'Extracting Core Competencies and Skills',
        'Mapping Capabilities to Industry Requirements',
        'Matching with Participating Organization Profiles',
        'Calculating Compatibility Scores and Rankings',
        'Generating Personalized Recommendation Matrix',
        'Finalizing Professional Development Pathway'
    ];
    
    const subtitles = [
        'Processing linguistic patterns and professional terminology',
        'Identifying key competencies and skill indicators',
        'Cross-referencing with industry requirements database',
        'Generating comprehensive compatibility assessments'
    ];

    const heroMessageTypes = ['Hope', 'Efficacy', 'Resilience', 'Optimism'];
    
    const steps = ['step1', 'step2', 'step3', 'step4'];
    let currentStep = 0;
    
    const processNextStep = () => {
        // Mark previous step as completed
        if (currentStep > 0) {
            const prevStep = document.getElementById(steps[currentStep - 1]);
            if (prevStep) {
                prevStep.classList.remove('active');
                prevStep.classList.add('completed');
            }
        }
        
        if (currentStep < steps.length) {
            // Activate current step
            const currentStepEl = document.getElementById(steps[currentStep]);
            const titleEl = document.getElementById('processingTitle');
            const subtitleEl = document.getElementById('processingSubtitle');
            const heroMessageEl = document.getElementById('heroMessage');
            
            if (currentStepEl) currentStepEl.classList.add('active');
            if (titleEl) titleEl.textContent = titles[currentStep];
            if (subtitleEl) subtitleEl.textContent = subtitles[currentStep];
            if (heroMessageEl) {
                heroMessageEl.textContent = getRandomHeroMessage(heroMessageTypes[currentStep]);
            }
            
            currentStep++;
            
            // Continue to next step after delay
            setTimeout(processNextStep, 2500);
        } else {
            // All steps completed, show results
            setTimeout(() => {
                showPMInternshipResults();
            }, 1000);
        }
    };
    
    // Start the animation
    setTimeout(processNextStep, 500);
}

function showPMInternshipResults() {
    console.log('Showing PM Internship results');
    appState.setScreen('results');
    renderSkills();
    renderPMInternships();
    renderPMSchemeDetails();
}

function renderSkills() {
    console.log('Rendering skills');
    const skillsContainer = document.getElementById('identifiedSkills');
    if (!skillsContainer) return;
    
    skillsContainer.innerHTML = '';
    
    appState.identifiedSkills.forEach((skill, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card fade-in';
        skillCard.style.animationDelay = `${index * 0.1}s`;
        
        skillCard.innerHTML = `
            <div class="skill-icon">
                <i class="fas ${getSkillIcon(skill.name)}"></i>
            </div>
            <div class="skill-name">${skill.name}</div>
            <div class="skill-confidence">${formatConfidence(skill.confidence)} (${skill.confidence}%)</div>
            <div class="confidence-bar">
                <div class="confidence-fill" style="width: ${skill.confidence}%"></div>
            </div>
        `;
        
        skillsContainer.appendChild(skillCard);
    });
}

function renderPMInternships() {
    console.log('Rendering PM internships');
    const internshipsContainer = document.getElementById('internshipPaths');
    if (!internshipsContainer) return;
    
    internshipsContainer.innerHTML = '';
    
    appState.recommendedInternships.forEach((internship, index) => {
        const internshipCard = document.createElement('div');
        internshipCard.className = 'career-card fade-in';
        internshipCard.style.animationDelay = `${index * 0.1}s`;
        
        internshipCard.innerHTML = `
            <div class="career-title">${internship.role}</div>
            <div class="company-name">${internship.company}</div>
            <div class="career-description">Sector: ${internship.sector}</div>
            
            <div class="career-match">
                <i class="fas fa-chart-line"></i>
                <span class="match-percentage">${internship.matchPercentage}% Compatibility</span>
                <span>Based on competency assessment</span>
            </div>
            
            <div class="career-details">
                <div class="career-detail">
                    <strong>Program Duration</strong>
                    <span>${pmInternshipDetails.duration}</span>
                </div>
                <div class="career-detail">
                    <strong>Monthly Stipend</strong>
                    <span>${pmInternshipDetails.stipend}</span>
                </div>
                <div class="career-detail">
                    <strong>Available Locations</strong>
                    <span>${internship.locations.slice(0, 2).join(', ')}${internship.locations.length > 2 ? ', +' + (internship.locations.length - 2) + ' more' : ''}</span>
                </div>
                <div class="career-detail">
                    <strong>One-time Grant</strong>
                    <span>${pmInternshipDetails.one_time_grant}</span>
                </div>
            </div>
            
            <div class="career-actions">
                <button class="btn btn--primary btn--sm pm-portal-btn" data-internship="${index}" data-action="apply">
                    <i class="fas fa-external-link-alt"></i>
                    Apply via Official Portal
                </button>
                <button class="btn btn--outline btn--sm" data-internship="${index}" data-action="details">
                    <i class="fas fa-info-circle"></i>
                    View Details
                </button>
            </div>
        `;
        
        internshipsContainer.appendChild(internshipCard);
    });

    // Add event listeners to dynamically created buttons
    internshipsContainer.addEventListener('click', (e) => {
        const button = e.target.closest('button[data-internship]');
        if (!button) return;
        
        const internshipIndex = parseInt(button.dataset.internship);
        const action = button.dataset.action;
        
        if (action === 'apply') {
            applyViaPMPortal(internshipIndex);
        } else if (action === 'details') {
            showInternshipDetails(internshipIndex);
        }
    });
}

function renderPMSchemeDetails() {
    console.log('Rendering PM scheme details');
    const schemeContainer = document.getElementById('pmSchemeDetails');
    if (!schemeContainer) return;
    
    const schemeDetails = [
        {
            name: "Monthly Financial Support",
            description: "₹5,000 per month for 12 months duration",
            features: ["Government Contribution: ₹4,500", "Corporate Contribution: ₹500", "Direct bank transfer mechanism"]
        },
        {
            name: "One-time Grant Support",
            description: "₹6,000 additional financial assistance",
            features: ["Program completion incentive", "Skill certification bonus", "Career development fund"]
        },
        {
            name: "Comprehensive Insurance",
            description: "Complete health and safety coverage",
            features: ["PM Jeevan Jyoti Bima Yojana", "PM Suraksha Bima Yojana", "Accidental death coverage"]
        },
        {
            name: "Career Development Support",
            description: "End-to-end professional guidance",
            features: ["Structured skill development", "Industry placement assistance", "Professional mentorship programs"]
        }
    ];
    
    schemeContainer.innerHTML = '';
    
    schemeDetails.forEach((scheme, index) => {
        const schemeCard = document.createElement('div');
        schemeCard.className = 'training-card fade-in';
        schemeCard.style.animationDelay = `${index * 0.1}s`;
        
        schemeCard.innerHTML = `
            <div class="training-name">${scheme.name}</div>
            <div class="training-description">${scheme.description}</div>
            
            <div class="training-features">
                ${scheme.features.map(feature => `<span class="training-feature pm-benefit">${feature}</span>`).join('')}
            </div>
            
            <div class="career-actions">
                <button class="btn btn--outline btn--sm" onclick="learnMoreAboutScheme()">
                    <i class="fas fa-info-circle"></i>
                    Learn More
                </button>
            </div>
        `;
        
        schemeContainer.appendChild(schemeCard);
    });
}

function showInternshipDetails(internshipIndex) {
    console.log(`Showing details for internship ${internshipIndex}`);
    const internship = appState.recommendedInternships[internshipIndex];
    const modal = document.getElementById('internshipModal');
    const content = document.getElementById('internshipDetailContent');
    
    if (!modal || !content || !internship) return;
    
    content.innerHTML = `
        <div class="career-detail-header">
            <h2 class="career-detail-title">${internship.role}</h2>
            <p class="career-detail-subtitle">${internship.company}</p>
            <div class="company-info">
                <strong>Industry Sector:</strong> ${internship.sector}<br>
                <strong>Available Locations:</strong> ${internship.locations.join(', ')}
            </div>
        </div>
        
        <div class="detail-section">
            <h4><i class="fas fa-bullseye"></i>Compatibility Assessment</h4>
            <div class="career-match">
                <i class="fas fa-chart-line"></i>
                <span class="match-percentage">${internship.matchPercentage}% Compatibility Rating</span>
                <span>Excellent alignment for this PM Internship opportunity</span>
            </div>
        </div>
        
        <div class="detail-section">
            <h4><i class="fas fa-tasks"></i>Competency Requirements Analysis</h4>
            <div class="skills-comparison">
                ${internship.skillsRequired.map(skill => `
                    <div class="skill-comparison-item ${internship.matchingSkills && internship.matchingSkills.some(ms => ms.toLowerCase().includes(skill.toLowerCase()) || skill.toLowerCase().includes(ms.toLowerCase())) ? 'match' : ''}">
                        <span>${skill}</span>
                        <span>${internship.matchingSkills && internship.matchingSkills.some(ms => ms.toLowerCase().includes(skill.toLowerCase()) || skill.toLowerCase().includes(ms.toLowerCase())) ? 'Demonstrated competency' : 'Development opportunity'}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="detail-section">
            <h4><i class="fas fa-money-check-alt"></i>PM Internship Program Benefits</h4>
            <div class="career-details">
                <div class="career-detail">
                    <strong>Program Duration</strong>
                    <span>${pmInternshipDetails.duration}</span>
                </div>
                <div class="career-detail">
                    <strong>Monthly Stipend</strong>
                    <span>${pmInternshipDetails.stipend}</span>
                </div>
                <div class="career-detail">
                    <strong>One-time Grant</strong>
                    <span>${pmInternshipDetails.one_time_grant}</span>
                </div>
                <div class="career-detail">
                    <strong>Insurance Coverage</strong>
                    <span>PM Jeevan Jyoti & Suraksha Bima</span>
                </div>
            </div>
        </div>
        
        <div class="detail-section">
            <h4><i class="fas fa-check-circle"></i>Eligibility Requirements</h4>
            <div class="skills-comparison">
                <div class="skill-comparison-item">
                    <span>Age Requirements: ${eligibilityCriteria.age}</span>
                    <span>Verify age documentation</span>
                </div>
                <div class="skill-comparison-item">
                    <span>Family Income: ${eligibilityCriteria.family_income}</span>
                    <span>Income certificate mandatory</span>
                </div>
                <div class="skill-comparison-item">
                    <span>Education: ${eligibilityCriteria.education}</span>
                    <span>Educational certificates required</span>
                </div>
            </div>
        </div>
        
        <div style="margin-top: 2rem;">
            <button class="btn btn--primary btn--full-width pm-portal-btn" data-internship="${internshipIndex}" data-action="apply-modal">
                <i class="fas fa-external-link-alt"></i>
                Submit Application via Official PM Portal
            </button>
        </div>
    `;
    
    // Add event listener for the apply button in modal
    const applyModalBtn = content.querySelector('button[data-action="apply-modal"]');
    if (applyModalBtn) {
        applyModalBtn.addEventListener('click', () => {
            applyViaPMPortal(internshipIndex);
        });
    }
    
    modal.classList.remove('hidden');
}

function applyViaPMPortal(internshipIndex) {
    console.log(`Applying to PM Portal for internship ${internshipIndex}`);
    const internship = appState.recommendedInternships[internshipIndex];
    
    const alertMessage = `REDIRECTING TO OFFICIAL PM INTERNSHIP PORTAL

Application Details:
Position: ${internship.role}
Organization: ${internship.company}
Sector: ${internship.sector}

NEXT STEPS:
• Official PM Internship portal will open
• Your profile information will be pre-populated
• Complete the application process as guided
• Application status will be tracked automatically

CONFIRMATION: Your professional profile has been saved for streamlined application processing.

Note: In production environment, this will redirect to the official government portal with secure authentication and integrated application workflow.`;
    
    alert(alertMessage);
    
    // Save application status
    const applicationStatus = {
        role: internship.role,
        company: internship.company,
        appliedDate: new Date().toLocaleDateString(),
        status: 'Application Submitted to Review Board'
    };
    
    // Add to saved opportunities
    appState.savedOpportunities.push({
        type: 'internship',
        data: internship,
        applicationStatus: applicationStatus
    });
    
    closeModal();
}

function learnMoreAboutScheme() {
    const schemeInfo = `PM INTERNSHIP SCHEME - COMPREHENSIVE INFORMATION

PROGRAM OVERVIEW:
Total Opportunities: ${pmInternshipDetails.total_opportunities}
Partner Organizations: ${pmInternshipDetails.participating_companies}
Industry Coverage: ${pmInternshipDetails.sectors}

FINANCIAL BENEFITS:
Monthly Stipend: ${pmInternshipDetails.stipend}
One-time Grant: ${pmInternshipDetails.one_time_grant}
Government Contribution: ${pmInternshipDetails.government_contribution}
Corporate Contribution: ${pmInternshipDetails.company_contribution}

INSURANCE COVERAGE:
${pmInternshipDetails.insurance.join('\n')}

PROGRAM STRUCTURE:
Duration: ${pmInternshipDetails.duration}
Pilot Phase: ${pmInternshipDetails.pilot_phase}

For detailed program guidelines, eligibility criteria, and application procedures, please visit the official government information portal.

Note: In production environment, this will provide direct links to official documentation and policy guidelines.`;
    
    alert(schemeInfo);
}

function closeModal() {
    const modal = document.getElementById('internshipModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function renderProfile() {
    console.log('Rendering profile');
    // Story Summary
    const storySummary = document.getElementById('storySummary');
    if (storySummary) {
        storySummary.innerHTML = `
            <p>${appState.userStory}</p>
            <div style="margin-top: 1rem;">
                <small><strong>Professional Profile Length:</strong> ${appState.userStory.length} characters</small><br>
                <small><strong>Competencies Identified:</strong> ${appState.identifiedSkills.length}</small><br>
                <small><strong>PM Internship Matches:</strong> ${appState.recommendedInternships.length}</small>
            </div>
        `;
    }
    
    // Skills Inventory
    const skillsInventory = document.getElementById('skillsInventory');
    if (skillsInventory) {
        skillsInventory.innerHTML = '';
        
        appState.identifiedSkills.forEach(skill => {
            const skillDiv = document.createElement('div');
            skillDiv.className = 'inventory-skill';
            skillDiv.innerHTML = `
                <div class="skill-name">${skill.name}</div>
                <div class="skill-level">${formatConfidence(skill.confidence)}</div>
            `;
            skillsInventory.appendChild(skillDiv);
        });
    }
    
    // Saved Opportunities
    const savedContainer = document.getElementById('savedOpportunities');
    if (savedContainer) {
        if (appState.savedOpportunities.length === 0) {
            savedContainer.innerHTML = '<p class="empty-state">No saved opportunities. Return to recommendations to bookmark positions of interest.</p>';
        } else {
            savedContainer.innerHTML = appState.savedOpportunities.map(item => `
                <div class="saved-item" style="background: var(--color-bg-3); padding: var(--space-16); border-radius: var(--radius-base); margin-bottom: var(--space-12); border: 1px solid rgba(5, 150, 105, 0.2);">
                    <strong>${item.data.role} - ${item.data.company}</strong>
                    <p style="margin: var(--space-8) 0; color: var(--color-text-secondary);">Industry Sector: ${item.data.sector}</p>
                    ${item.applicationStatus ? `<small style="color: var(--color-success);">Status: ${item.applicationStatus.status} (${item.applicationStatus.appliedDate})</small>` : ''}
                </div>
            `).join('');
        }
    }
    
    // Application Status
    const applicationStatus = document.getElementById('applicationStatus');
    if (applicationStatus) {
        const appliedOpportunities = appState.savedOpportunities.filter(item => item.applicationStatus);
        
        if (appliedOpportunities.length === 0) {
            applicationStatus.innerHTML = '<p class="empty-state">No applications submitted. Click "Apply via Official Portal" to initiate the application process.</p>';
        } else {
            applicationStatus.innerHTML = appliedOpportunities.map(item => `
                <div style="background: linear-gradient(135deg, rgba(5, 150, 105, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%); padding: var(--space-16); border-radius: var(--radius-base); margin-bottom: var(--space-12); border-left: 4px solid #059669;">
                    <strong>${item.data.role}</strong> at <strong>${item.data.company}</strong><br>
                    <small>Submission Date: ${item.applicationStatus.appliedDate}</small><br>
                    <span class="status status--success">${item.applicationStatus.status}</span>
                </div>
            `).join('');
        }
    }
}

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    console.log('PM Internship Recommendation Engine initializing...');
    
    // Landing page - Find Internship button
    const findInternshipBtn = document.getElementById('findInternshipBtn');
    if (findInternshipBtn) {
        console.log('Setting up Access PM Internship Portal button');
        findInternshipBtn.addEventListener('click', () => {
            console.log('Access PM Internship Portal button clicked');
            appState.setScreen('storyInput');
            setTimeout(() => {
                const storyTextarea = document.getElementById('storyText');
                if (storyTextarea) {
                    storyTextarea.focus();
                }
            }, 100);
        });
    } else {
        console.error('Access PM Internship Portal button not found');
    }

    // Back buttons
    const backToLandingBtn = document.getElementById('backToLandingBtn');
    if (backToLandingBtn) {
        backToLandingBtn.addEventListener('click', () => appState.setScreen('landing'));
    }

    const backToStoryBtn = document.getElementById('backToStoryBtn');
    if (backToStoryBtn) {
        backToStoryBtn.addEventListener('click', () => appState.setScreen('storyInput'));
    }

    const backToResultsBtn = document.getElementById('backToResultsBtn');
    if (backToResultsBtn) {
        backToResultsBtn.addEventListener('click', () => appState.setScreen('results'));
    }

    // Voice input button
    const voiceButton = document.getElementById('voiceButton');
    if (voiceButton) {
        voiceButton.addEventListener('click', toggleVoiceInput);
    }

    // Story textarea
    const storyTextarea = document.getElementById('storyText');
    if (storyTextarea) {
        storyTextarea.addEventListener('input', updateCharCount);
    }

    // Sample story buttons
    const sampleStory1 = document.getElementById('sampleStory1');
    if (sampleStory1) {
        sampleStory1.addEventListener('click', () => useSampleStory(0));
    }

    const sampleStory2 = document.getElementById('sampleStory2');
    if (sampleStory2) {
        sampleStory2.addEventListener('click', () => useSampleStory(1));
    }

    // Analyze story button
    const analyzeStoryBtn = document.getElementById('analyzeStoryBtn');
    if (analyzeStoryBtn) {
        analyzeStoryBtn.addEventListener('click', analyzeForPMInternship);
    }

    // Modal close button
    const closeModalBtn = document.getElementById('closeModalBtn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Bottom navigation
    const navResults = document.getElementById('navResults');
    if (navResults) {
        navResults.addEventListener('click', () => appState.setScreen('results'));
    }

    const navProfile = document.getElementById('navProfile');
    if (navProfile) {
        navProfile.addEventListener('click', () => {
            appState.setScreen('profile');
            renderProfile();
        });
    }

    const navNewSearch = document.getElementById('navNewSearch');
    if (navNewSearch) {
        navNewSearch.addEventListener('click', () => {
            const storyTextarea = document.getElementById('storyText');
            if (storyTextarea) {
                storyTextarea.value = '';
                updateCharCount();
            }
            appState.setScreen('storyInput');
        });
    }

    // Language selector
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            appState.selectedLanguage = e.target.value;
            console.log(`Language changed to: ${e.target.value}`);
        });
    }
    
    // Initial setup
    updateCharCount();
    
    console.log('PM Internship recommendation system initialized successfully');
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // ESC to close modal
    if (e.key === 'Escape') {
        closeModal();
    }
    
    // Enter to analyze story (when in textarea and story is long enough)
    if (e.key === 'Enter' && e.ctrlKey && appState.currentScreen === 'storyInput') {
        const analyzeBtn = document.getElementById('analyzeStoryBtn');
        if (analyzeBtn && !analyzeBtn.disabled) {
            analyzeForPMInternship();
        }
    }
});