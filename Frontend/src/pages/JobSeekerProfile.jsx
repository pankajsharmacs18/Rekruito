import React, { useState } from 'react';
import {
    User, Mail, Phone, MapPin, Briefcase, GraduationCap,
    Award, FileText, Globe, Settings, Plus, Trash2,
    Edit2, Save, X, Upload, Linkedin, Github, Twitter,
    Calendar, DollarSign, Target, Star, CheckCircle,
    GlobeIcon, Languages, BookOpen, Users, Code,
    Heart, Trophy, Building, Home, Download,
    Eye, EyeOff, Bell, Share2, Database
} from 'lucide-react';

const JobSeekerProfile = () => {
    const [activeTab, setActiveTab] = useState('personal');
    const [isEditing, setIsEditing] = useState(false);
    const [profileImage, setProfileImage] = useState('https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80');

    // Hardcoded user data
    const [userData, setUserData] = useState({
        personalInfo: {
            fullName: "Alexandra Chen",
            preferredName: "Alex",
            dateOfBirth: "1990-05-15",
            gender: "Female",
            pronouns: "She/Her",
            nationality: "Canadian",
            workAuthorization: "Permanent Resident",
            primaryEmail: "alex.chen@email.com",
            secondaryEmail: "alex.personal@email.com",
            mobileNumber: "+1 (416) 555-7890",
            alternatePhone: "+1 (416) 555-1234",
            currentAddress: "123 Tech Street, Toronto, ON M5V 2T6",
            permanentAddress: "456 Innovation Blvd, Vancouver, BC V6B 4Y9",
            emergencyContact: {
                name: "Michael Chen",
                relationship: "Brother",
                phone: "+1 (604) 555-4321"
            },
            communicationMethod: ["Email", "Portal Messaging"],
            languages: [
                { id: 1, language: "English", proficiency: "Native", reading: 5, writing: 5, speaking: 5 },
                { id: 2, language: "French", proficiency: "Intermediate", reading: 4, writing: 3, speaking: 4 },
                { id: 3, language: "Spanish", proficiency: "Basic", reading: 2, writing: 1, speaking: 2 }
            ]
        },

        experience: [
            {
                id: 1,
                jobTitle: "Senior Software Engineer",
                company: "Tech Innovations Inc.",
                industry: "Information Technology",
                employmentType: "Full-time Permanent",
                startDate: "2020-03-01",
                endDate: "Present",
                location: "Toronto, ON (Remote)",
                department: "Engineering",
                reportingTo: "CTO",
                salary: {
                    base: 120000,
                    bonus: 15000,
                    currency: "CAD"
                },
                responsibilities: [
                    "Led a team of 5 developers in building scalable microservices",
                    "Architected and implemented cloud-based solutions using AWS",
                    "Improved application performance by 40% through optimization",
                    "Mentored junior developers and conducted code reviews"
                ],
                projects: [
                    {
                        id: 1,
                        name: "E-commerce Platform Migration",
                        duration: "8 months",
                        teamSize: 8,
                        role: "Technical Lead",
                        technologies: ["React", "Node.js", "MongoDB", "AWS"],
                        outcome: "Successfully migrated platform reducing downtime by 60%"
                    }
                ],
                reasonForLeaving: ""
            },
            {
                id: 2,
                jobTitle: "Software Developer",
                company: "Digital Solutions Ltd.",
                industry: "Software Development",
                employmentType: "Full-time Permanent",
                startDate: "2017-06-01",
                endDate: "2020-02-28",
                location: "Vancouver, BC",
                department: "Development",
                reportingTo: "Development Manager",
                salary: {
                    base: 85000,
                    bonus: 8000,
                    currency: "CAD"
                },
                responsibilities: [
                    "Developed full-stack web applications using React and .NET Core",
                    "Implemented RESTful APIs and database designs",
                    "Collaborated with cross-functional teams on agile projects"
                ],
                reasonForLeaving: "Career Growth"
            }
        ],

        education: [
            {
                id: 1,
                degree: "Master of Science",
                field: "Computer Science",
                institution: "University of Toronto",
                location: "Toronto, ON",
                startDate: "2015-09-01",
                endDate: "2017-04-30",
                grade: "3.9/4.0",
                honors: "Dean's List",
                thesis: "Machine Learning Applications in Healthcare",
                coursework: ["Advanced Algorithms", "Data Mining", "Cloud Computing"]
            },
            {
                id: 2,
                degree: "Bachelor of Engineering",
                field: "Software Engineering",
                institution: "University of British Columbia",
                location: "Vancouver, BC",
                startDate: "2011-09-01",
                endDate: "2015-04-30",
                grade: "3.7/4.0",
                honors: "Summa Cum Laude"
            }
        ],

        certifications: [
            {
                id: 1,
                name: "AWS Certified Solutions Architect",
                authority: "Amazon Web Services",
                certificateId: "AWS-123456",
                issueDate: "2021-03-15",
                expiryDate: "2024-03-15",
                credentialUrl: "https://aws.amazon.com/certification",
                verified: true
            },
            {
                id: 2,
                name: "Professional Scrum Master I",
                authority: "Scrum.org",
                certificateId: "PSM-I-789012",
                issueDate: "2020-08-20",
                expiryDate: null,
                verified: true
            }
        ],

        skills: {
            technical: [
                { id: 1, name: "React", category: "Frameworks", proficiency: 5, years: 4, lastUsed: "2023-12" },
                { id: 2, name: "Node.js", category: "Backend", proficiency: 4, years: 5, lastUsed: "2023-12" },
                { id: 3, name: "Python", category: "Languages", proficiency: 4, years: 6, lastUsed: "2023-11" },
                { id: 4, name: "AWS", category: "Cloud", proficiency: 4, years: 3, lastUsed: "2023-12" },
                { id: 5, name: "MongoDB", category: "Databases", proficiency: 4, years: 4, lastUsed: "2023-12" }
            ],
            softSkills: [
                { id: 1, name: "Leadership" },
                { id: 2, name: "Communication" },
                { id: 3, name: "Problem Solving" },
                { id: 4, name: "Team Collaboration" }
            ],
            methodologies: [
                { id: 1, name: "Agile" },
                { id: 2, name: "Scrum" },
                { id: 3, name: "DevOps" }
            ]
        },

        jobPreferences: {
            desiredTitles: [
                { id: 1, title: "Senior Software Engineer" },
                { id: 2, title: "Tech Lead" },
                { id: 3, title: "Solutions Architect" }
            ],
            targetIndustry: "Technology",
            careerLevel: "Manager",
            shortTermGoal: "Lead a team of 10+ engineers",
            longTermGoal: "Director of Engineering",
            willingToRelocate: "Depends on opportunity",
            workMode: "Hybrid",
            workSchedule: "Flexible Hours",
            travelWillingness: "Up to 25%",
            minSalary: 130000,
            expectedRange: { low: 130000, high: 160000 },
            noticePeriod: "30 days",
            earliestStart: "2024-02-01",
            employmentStatus: "Employed (Actively looking)",
            benefits: [
                { id: 1, name: "Health Insurance", priority: 1 },
                { id: 2, name: "Retirement Plans", priority: 2 },
                { id: 3, name: "Professional Development", priority: 3 }
            ]
        },

        portfolio: {
            website: "https://alexchen.dev",
            github: "https://github.com/alexchen",
            linkedin: "https://linkedin.com/in/alexchen",
            behance: null,
            projects: [
                {
                    id: 1,
                    name: "E-commerce Dashboard",
                    type: "Case Study",
                    url: "https://github.com/alexchen/ecommerce-dashboard",
                    description: "Real-time analytics dashboard for e-commerce"
                }
            ],
            videoIntroduction: "https://youtube.com/watch?v=sample123"
        },

        achievements: [
            {
                id: 1,
                type: "Award",
                name: "Innovation Award 2022",
                organization: "Tech Innovations Inc.",
                year: "2022",
                description: "Recognized for developing innovative cloud solution"
            },
            {
                id: 2,
                type: "Publication",
                name: "Microservices Best Practices",
                organization: "IEEE Software",
                year: "2021",
                description: "Co-authored research paper on microservices architecture"
            }
        ],

        socialMedia: [
            { id: 1, platform: "LinkedIn", url: "https://linkedin.com/in/alexchen", icon: <Linkedin size={16} /> },
            { id: 2, platform: "GitHub", url: "https://github.com/alexchen", icon: <Github size={16} /> },
            { id: 3, platform: "Twitter", url: "https://twitter.com/alex_chen", icon: <Twitter size={16} /> }
        ],

        resume: {
            fileName: "Alexandra_Chen_Resume_2023.pdf",
            lastUpdated: "2023-11-15",
            fileSize: "2.4 MB"
        },

        settings: {
            visibility: "Public",
            hideFromCompanies: ["Current Employer Inc."],
            jobAlerts: {
                frequency: "Daily Digest",
                channels: ["Email", "Push Notification"]
            },
            dataSharing: {
                recruiters: true,
                analytics: true,
                research: false
            }
        },

        volunteerExperience: [
            {
                id: 1,
                organization: "Code for Canada",
                role: "Technical Mentor",
                cause: "Education",
                startDate: "2019-01-01",
                endDate: "Present",
                contributions: ["Mentored aspiring developers", "Conducted coding workshops"]
            }
        ],

        memberships: [
            {
                id: 1,
                organization: "IEEE Computer Society",
                memberId: "IEEE12345",
                level: "Professional",
                startDate: "2018-01-01",
                endDate: "Present"
            }
        ],

        hobbies: [
            { id: 1, name: "Photography", type: "Personal" },
            { id: 2, name: "Hiking", type: "Personal" },
            { id: 3, name: "Open Source Contribution", type: "Professional" }
        ]
    });

    const tabs = [
        { id: 'personal', label: 'Personal Info', icon: <User size={18} /> },
        { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
        { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
        { id: 'skills', label: 'Skills', icon: <Star size={18} /> },
        { id: 'certifications', label: 'Certifications', icon: <Award size={18} /> },
        { id: 'achievements', label: 'Achievements', icon: <Trophy size={18} /> },
        { id: 'preferences', label: 'Job Preferences', icon: <Target size={18} /> },
        { id: 'portfolio', label: 'Portfolio', icon: <GlobeIcon size={18} /> },
        { id: 'social', label: 'Social Media', icon: <Share2 size={18} /> },
        { id: 'resume', label: 'Resume', icon: <FileText size={18} /> },
        { id: 'volunteer', label: 'Volunteer', icon: <Heart size={18} /> },
        { id: 'memberships', label: 'Memberships', icon: <Users size={18} /> },
        { id: 'hobbies', label: 'Hobbies', icon: <BookOpen size={18} /> },
        { id: 'settings', label: 'Settings', icon: <Settings size={18} /> }
    ];

    // Generic add functions for each section
    const addItem = (section, newItem) => {
        setUserData(prev => {
            if (Array.isArray(prev[section])) {
                return { ...prev, [section]: [...prev[section], { ...newItem, id: Date.now() }] };
            } else if (section.includes('.')) {
                // Handle nested structures like skills.technical
                const [parent, child] = section.split('.');
                return {
                    ...prev,
                    [parent]: {
                        ...prev[parent],
                        [child]: [...prev[parent][child], { ...newItem, id: Date.now() }]
                    }
                };
            }
            return prev;
        });
    };

    const deleteItem = (section, id) => {
        setUserData(prev => {
            if (Array.isArray(prev[section])) {
                return { ...prev, [section]: prev[section].filter(item => item.id !== id) };
            } else if (section.includes('.')) {
                const [parent, child] = section.split('.');
                return {
                    ...prev,
                    [parent]: {
                        ...prev[parent],
                        [child]: prev[parent][child].filter(item => item.id !== id)
                    }
                };
            }
            return prev;
        });
    };

    // Specific add functions
    const addExperience = () => {
        const newExp = {
            id: Date.now(),
            jobTitle: "New Position",
            company: "",
            industry: "",
            employmentType: "Full-time Permanent",
            startDate: new Date().toISOString().split('T')[0],
            endDate: "",
            location: "",
            department: "",
            reportingTo: "",
            salary: { base: 0, bonus: 0, currency: "CAD" },
            responsibilities: [],
            projects: [],
            reasonForLeaving: ""
        };
        addItem('experience', newExp);
    };

    const addEducation = () => {
        const newEdu = {
            id: Date.now(),
            degree: "",
            field: "",
            institution: "",
            location: "",
            startDate: "",
            endDate: "",
            grade: "",
            honors: "",
            thesis: "",
            coursework: []
        };
        addItem('education', newEdu);
    };

    const addCertification = () => {
        const newCert = {
            id: Date.now(),
            name: "",
            authority: "",
            certificateId: "",
            issueDate: new Date().toISOString().split('T')[0],
            expiryDate: "",
            credentialUrl: "",
            verified: false
        };
        addItem('certifications', newCert);
    };

    const addSkill = (type) => {
        const newSkill = {
            id: Date.now(),
            name: "",
            ...(type === 'technical' ? { category: "", proficiency: 3, years: 1, lastUsed: "" } : {})
        };
        addItem(`skills.${type}`, newSkill);
    };

    const addAchievement = () => {
        const newAchievement = {
            id: Date.now(),
            type: "Award",
            name: "",
            organization: "",
            year: new Date().getFullYear().toString(),
            description: ""
        };
        addItem('achievements', newAchievement);
    };

    const addSocialMedia = () => {
        const newSocial = {
            id: Date.now(),
            platform: "",
            url: "",
            icon: <GlobeIcon size={16} />
        };
        addItem('socialMedia', newSocial);
    };

    const addLanguage = () => {
        const newLanguage = {
            id: Date.now(),
            language: "",
            proficiency: "Intermediate",
            reading: 3,
            writing: 3,
            speaking: 3
        };
        addItem('personalInfo.languages', newLanguage);
    };

    const addProject = () => {
        const newProject = {
            id: Date.now(),
            name: "",
            type: "Case Study",
            url: "",
            description: ""
        };
        addItem('portfolio.projects', newProject);
    };

    const addVolunteerExperience = () => {
        const newVolunteer = {
            id: Date.now(),
            organization: "",
            role: "",
            cause: "Education",
            startDate: "",
            endDate: "",
            contributions: []
        };
        addItem('volunteerExperience', newVolunteer);
    };

    const addMembership = () => {
        const newMembership = {
            id: Date.now(),
            organization: "",
            memberId: "",
            level: "Professional",
            startDate: "",
            endDate: ""
        };
        addItem('memberships', newMembership);
    };

    const addHobby = () => {
        const newHobby = {
            id: Date.now(),
            name: "",
            type: "Personal"
        };
        addItem('hobbies', newHobby);
    };

    const addDesiredTitle = () => {
        const newTitle = {
            id: Date.now(),
            title: ""
        };
        addItem('jobPreferences.desiredTitles', newTitle);
    };

    const addBenefit = () => {
        const newBenefit = {
            id: Date.now(),
            name: "",
            priority: userData.jobPreferences.benefits.length + 1
        };
        addItem('jobPreferences.benefits', newBenefit);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const saveChanges = () => {
        setIsEditing(false);
        alert('Profile updated successfully!');
    };

    const AddButton = ({ onClick, label, icon = <Plus size={16} />, className = "" }) => (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ${className}`}
        >
            {icon}
            {label}
        </button>
    );

    const SectionHeader = ({ title, description, onAdd, showAdd = true }) => (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                {description && <p className="text-gray-600 mt-1">{description}</p>}
            </div>
            {isEditing && showAdd && onAdd && (
                <AddButton onClick={onAdd} label={`Add ${title}`} />
            )}
        </div>
    );

    const renderTabContent = () => {
        switch(activeTab) {
            case 'personal':
                return (
                    <div className="space-y-8">
                        <SectionHeader
                            title="Basic Information"
                            description="Your personal and contact details"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Object.entries({
                                'Full Name': userData.personalInfo.fullName,
                                'Preferred Name': userData.personalInfo.preferredName,
                                'Date of Birth': userData.personalInfo.dateOfBirth,
                                'Gender': userData.personalInfo.gender,
                                'Pronouns': userData.personalInfo.pronouns,
                                'Nationality': userData.personalInfo.nationality,
                                'Work Authorization': userData.personalInfo.workAuthorization
                            }).map(([label, value]) => (
                                <div key={label}>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                                    <input
                                        type={label.includes('Date') ? 'date' : 'text'}
                                        value={value}
                                        onChange={(e) => setUserData({
                                            ...userData,
                                            personalInfo: { ...userData.personalInfo, [label.toLowerCase().replace(' ', '')]: e.target.value }
                                        })}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        disabled={!isEditing}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <SectionHeader
                                title="Languages"
                                onAdd={addLanguage}
                            />
                            {userData.personalInfo.languages.map((lang) => (
                                <div key={lang.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                                        <input
                                            value={lang.language}
                                            onChange={(e) => {
                                                const updated = userData.personalInfo.languages.map(l =>
                                                    l.id === lang.id ? { ...l, language: e.target.value } : l
                                                );
                                                setUserData({
                                                    ...userData,
                                                    personalInfo: { ...userData.personalInfo, languages: updated }
                                                });
                                            }}
                                            className="px-3 py-1 border rounded"
                                            disabled={!isEditing}
                                            placeholder="Language"
                                        />
                                        <select
                                            value={lang.proficiency}
                                            onChange={(e) => {
                                                const updated = userData.personalInfo.languages.map(l =>
                                                    l.id === lang.id ? { ...l, proficiency: e.target.value } : l
                                                );
                                                setUserData({
                                                    ...userData,
                                                    personalInfo: { ...userData.personalInfo, languages: updated }
                                                });
                                            }}
                                            className="px-3 py-1 border rounded"
                                            disabled={!isEditing}
                                        >
                                            <option value="Native">Native</option>
                                            <option value="Fluent">Fluent</option>
                                            <option value="Intermediate">Intermediate</option>
                                            <option value="Basic">Basic</option>
                                        </select>
                                        <input
                                            type="number"
                                            min="1"
                                            max="5"
                                            value={lang.reading}
                                            onChange={(e) => {
                                                const updated = userData.personalInfo.languages.map(l =>
                                                    l.id === lang.id ? { ...l, reading: parseInt(e.target.value) } : l
                                                );
                                                setUserData({
                                                    ...userData,
                                                    personalInfo: { ...userData.personalInfo, languages: updated }
                                                });
                                            }}
                                            className="px-3 py-1 border rounded"
                                            disabled={!isEditing}
                                        />
                                        <input
                                            type="number"
                                            min="1"
                                            max="5"
                                            value={lang.speaking}
                                            onChange={(e) => {
                                                const updated = userData.personalInfo.languages.map(l =>
                                                    l.id === lang.id ? { ...l, speaking: parseInt(e.target.value) } : l
                                                );
                                                setUserData({
                                                    ...userData,
                                                    personalInfo: { ...userData.personalInfo, languages: updated }
                                                });
                                            }}
                                            className="px-3 py-1 border rounded"
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    {isEditing && (
                                        <button
                                            onClick={() => deleteItem('personalInfo.languages', lang.id)}
                                            className="ml-4 p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800">Contact Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {Object.entries({
                                    'Primary Email': userData.personalInfo.primaryEmail,
                                    'Mobile Number': userData.personalInfo.mobileNumber,
                                    'Current Address': userData.personalInfo.currentAddress,
                                    'Permanent Address': userData.personalInfo.permanentAddress
                                }).map(([label, value]) => (
                                    <div key={label}>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                                        <input
                                            type={label.includes('Email') ? 'email' : 'text'}
                                            value={value}
                                            onChange={(e) => setUserData({
                                                ...userData,
                                                personalInfo: { ...userData.personalInfo, [label.toLowerCase().replace(' ', '')]: e.target.value }
                                            })}
                                            className="w-full px-4 py-2 border rounded-lg"
                                            disabled={!isEditing || label.includes('Primary Email')}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case 'experience':
                return (
                    <div className="space-y-8">
                        <SectionHeader
                            title="Work Experience"
                            onAdd={addExperience}
                        />

                        {userData.experience.map((exp) => (
                            <div key={exp.id} className="bg-white border rounded-xl p-6 shadow-sm relative">
                                {isEditing && (
                                    <button
                                        onClick={() => deleteItem('experience', exp.id)}
                                        className="absolute top-4 right-4 p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input
                                        value={exp.jobTitle}
                                        onChange={(e) => {
                                            const updated = userData.experience.map(e =>
                                                e.id === exp.id ? { ...e, jobTitle: e.target.value } : e
                                            );
                                            setUserData({ ...userData, experience: updated });
                                        }}
                                        className="text-xl font-bold text-gray-900 px-3 py-2 border rounded"
                                        disabled={!isEditing}
                                        placeholder="Job Title"
                                    />
                                    <input
                                        value={exp.company}
                                        onChange={(e) => {
                                            const updated = userData.experience.map(e =>
                                                e.id === exp.id ? { ...e, company: e.target.value } : e
                                            );
                                            setUserData({ ...userData, experience: updated });
                                        }}
                                        className="text-lg text-blue-600 px-3 py-2 border rounded"
                                        disabled={!isEditing}
                                        placeholder="Company"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-1">Start Date</label>
                                        <input
                                            type="date"
                                            value={exp.startDate}
                                            onChange={(e) => {
                                                const updated = userData.experience.map(e =>
                                                    e.id === exp.id ? { ...e, startDate: e.target.value } : e
                                                );
                                                setUserData({ ...userData, experience: updated });
                                            }}
                                            className="w-full px-3 py-1 border rounded"
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-1">End Date</label>
                                        <input
                                            type="date"
                                            value={exp.endDate}
                                            onChange={(e) => {
                                                const updated = userData.experience.map(e =>
                                                    e.id === exp.id ? { ...e, endDate: e.target.value } : e
                                                );
                                                setUserData({ ...userData, experience: updated });
                                            }}
                                            className="w-full px-3 py-1 border rounded"
                                            disabled={!isEditing}
                                            placeholder="Present"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-1">Location</label>
                                        <input
                                            value={exp.location}
                                            onChange={(e) => {
                                                const updated = userData.experience.map(e =>
                                                    e.id === exp.id ? { ...e, location: e.target.value } : e
                                                );
                                                setUserData({ ...userData, experience: updated });
                                            }}
                                            className="w-full px-3 py-1 border rounded"
                                            disabled={!isEditing}
                                            placeholder="Location"
                                        />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Responsibilities</label>
                                    {exp.responsibilities.map((resp, idx) => (
                                        <div key={idx} className="flex gap-2 mb-2">
                                            <input
                                                value={resp}
                                                onChange={(e) => {
                                                    const updatedResp = [...exp.responsibilities];
                                                    updatedResp[idx] = e.target.value;
                                                    const updatedExp = userData.experience.map(e =>
                                                        e.id === exp.id ? { ...e, responsibilities: updatedResp } : e
                                                    );
                                                    setUserData({ ...userData, experience: updatedExp });
                                                }}
                                                className="flex-1 px-3 py-1 border rounded"
                                                disabled={!isEditing}
                                            />
                                            {isEditing && (
                                                <button
                                                    onClick={() => {
                                                        const updatedResp = exp.responsibilities.filter((_, i) => i !== idx);
                                                        const updatedExp = userData.experience.map(e =>
                                                            e.id === exp.id ? { ...e, responsibilities: updatedResp } : e
                                                        );
                                                        setUserData({ ...userData, experience: updatedExp });
                                                    }}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                    {isEditing && (
                                        <button
                                            onClick={() => {
                                                const updatedResp = [...exp.responsibilities, ""];
                                                const updatedExp = userData.experience.map(e =>
                                                    e.id === exp.id ? { ...e, responsibilities: updatedResp } : e
                                                );
                                                setUserData({ ...userData, experience: updatedExp });
                                            }}
                                            className="mt-2 flex items-center gap-2 text-blue-600 hover:text-blue-800"
                                        >
                                            <Plus size={16} />
                                            Add Responsibility
                                        </button>
                                    )}
                                </div>

                                {isEditing && exp.projects && (
                                    <div className="mt-6">
                                        <h4 className="font-semibold text-gray-800 mb-3">Projects</h4>
                                        {exp.projects.map((project, idx) => (
                                            <div key={idx} className="bg-gray-50 rounded-lg p-4 mt-2">
                                                <div className="flex justify-between">
                                                    <input
                                                        value={project.name}
                                                        className="font-medium text-gray-900 bg-transparent border-b"
                                                        disabled={!isEditing}
                                                        placeholder="Project Name"
                                                    />
                                                    {isEditing && (
                                                        <button className="text-red-600">
                                                            <Trash2 size={16} />
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                );

            case 'education':
                return (
                    <div className="space-y-8">
                        <SectionHeader
                            title="Education"
                            onAdd={addEducation}
                        />

                        {userData.education.map((edu) => (
                            <div key={edu.id} className="bg-white border rounded-xl p-6 shadow-sm relative">
                                {isEditing && (
                                    <button
                                        onClick={() => deleteItem('education', edu.id)}
                                        className="absolute top-4 right-4 p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input
                                        value={edu.degree}
                                        onChange={(e) => {
                                            const updated = userData.education.map(e =>
                                                e.id === edu.id ? { ...e, degree: e.target.value } : e
                                            );
                                            setUserData({ ...userData, education: updated });
                                        }}
                                        className="text-xl font-bold text-gray-900 px-3 py-2 border rounded"
                                        disabled={!isEditing}
                                        placeholder="Degree"
                                    />
                                    <input
                                        value={edu.field}
                                        onChange={(e) => {
                                            const updated = userData.education.map(e =>
                                                e.id === edu.id ? { ...e, field: e.target.value } : e
                                            );
                                            setUserData({ ...userData, education: updated });
                                        }}
                                        className="text-lg text-gray-700 px-3 py-2 border rounded"
                                        disabled={!isEditing}
                                        placeholder="Field of Study"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input
                                        value={edu.institution}
                                        onChange={(e) => {
                                            const updated = userData.education.map(e =>
                                                e.id === edu.id ? { ...e, institution: e.target.value } : e
                                            );
                                            setUserData({ ...userData, education: updated });
                                        }}
                                        className="text-blue-600 px-3 py-2 border rounded"
                                        disabled={!isEditing}
                                        placeholder="Institution"
                                    />
                                    <input
                                        value={edu.location}
                                        onChange={(e) => {
                                            const updated = userData.education.map(e =>
                                                e.id === edu.id ? { ...e, location: e.target.value } : e
                                            );
                                            setUserData({ ...userData, education: updated });
                                        }}
                                        className="px-3 py-2 border rounded"
                                        disabled={!isEditing}
                                        placeholder="Location"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-1">Start Date</label>
                                        <input
                                            type="date"
                                            value={edu.startDate}
                                            onChange={(e) => {
                                                const updated = userData.education.map(e =>
                                                    e.id === edu.id ? { ...e, startDate: e.target.value } : e
                                                );
                                                setUserData({ ...userData, education: updated });
                                            }}
                                            className="w-full px-3 py-1 border rounded"
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-1">End Date</label>
                                        <input
                                            type="date"
                                            value={edu.endDate}
                                            onChange={(e) => {
                                                const updated = userData.education.map(e =>
                                                    e.id === edu.id ? { ...e, endDate: e.target.value } : e
                                                );
                                                setUserData({ ...userData, education: updated });
                                            }}
                                            className="w-full px-3 py-1 border rounded"
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-1">Grade/GPA</label>
                                        <input
                                            value={edu.grade}
                                            onChange={(e) => {
                                                const updated = userData.education.map(e =>
                                                    e.id === edu.id ? { ...e, grade: e.target.value } : e
                                                );
                                                setUserData({ ...userData, education: updated });
                                            }}
                                            className="w-full px-3 py-1 border rounded"
                                            disabled={!isEditing}
                                            placeholder="Grade/GPA"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case 'skills':
                return (
                    <div className="space-y-8">
                        <SectionHeader
                            title="Technical Skills"
                            onAdd={() => addSkill('technical')}
                        />

                        <div className="space-y-4">
                            {userData.skills.technical.map((skill) => (
                                <div key={skill.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-4">
                                        <input
                                            value={skill.name}
                                            onChange={(e) => {
                                                const updated = userData.skills.technical.map(s =>
                                                    s.id === skill.id ? { ...s, name: e.target.value } : s
                                                );
                                                setUserData({
                                                    ...userData,
                                                    skills: { ...userData.skills, technical: updated }
                                                });
                                            }}
                                            className="px-3 py-2 border rounded"
                                            disabled={!isEditing}
                                            placeholder="Skill Name"
                                        />
                                        <input
                                            value={skill.category}
                                            onChange={(e) => {
                                                const updated = userData.skills.technical.map(s =>
                                                    s.id === skill.id ? { ...s, category: e.target.value } : s
                                                );
                                                setUserData({
                                                    ...userData,
                                                    skills: { ...userData.skills, technical: updated }
                                                });
                                            }}
                                            className="px-3 py-2 border rounded"
                                            disabled={!isEditing}
                                            placeholder="Category"
                                        />
                                        <select
                                            value={skill.proficiency}
                                            onChange={(e) => {
                                                const updated = userData.skills.technical.map(s =>
                                                    s.id === skill.id ? { ...s, proficiency: parseInt(e.target.value) } : s
                                                );
                                                setUserData({
                                                    ...userData,
                                                    skills: { ...userData.skills, technical: updated }
                                                });
                                            }}
                                            className="px-3 py-2 border rounded"
                                            disabled={!isEditing}
                                        >
                                            {[1,2,3,4,5].map(num => (
                                                <option key={num} value={num}>{num} - {num === 1 ? 'Beginner' : num === 5 ? 'Expert' : 'Intermediate'}</option>
                                            ))}
                                        </select>
                                        <input
                                            type="number"
                                            value={skill.years}
                                            onChange={(e) => {
                                                const updated = userData.skills.technical.map(s =>
                                                    s.id === skill.id ? { ...s, years: parseInt(e.target.value) } : s
                                                );
                                                setUserData({
                                                    ...userData,
                                                    skills: { ...userData.skills, technical: updated }
                                                });
                                            }}
                                            className="px-3 py-2 border rounded"
                                            disabled={!isEditing}
                                            placeholder="Years"
                                        />
                                        <input
                                            value={skill.lastUsed}
                                            onChange={(e) => {
                                                const updated = userData.skills.technical.map(s =>
                                                    s.id === skill.id ? { ...s, lastUsed: e.target.value } : s
                                                );
                                                setUserData({
                                                    ...userData,
                                                    skills: { ...userData.skills, technical: updated }
                                                });
                                            }}
                                            className="px-3 py-2 border rounded"
                                            disabled={!isEditing}
                                            placeholder="YYYY-MM"
                                        />
                                    </div>
                                    {isEditing && (
                                        <button
                                            onClick={() => deleteItem('skills.technical', skill.id)}
                                            className="ml-4 p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>

                        <SectionHeader
                            title="Soft Skills"
                            onAdd={() => addSkill('softSkills')}
                        />

                        <div className="flex flex-wrap gap-2">
                            {userData.skills.softSkills.map((skill) => (
                                <div key={skill.id} className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-lg">
                                    <input
                                        value={skill.name}
                                        onChange={(e) => {
                                            const updated = userData.skills.softSkills.map(s =>
                                                s.id === skill.id ? { ...s, name: e.target.value } : s
                                            );
                                            setUserData({
                                                ...userData,
                                                skills: { ...userData.skills, softSkills: updated }
                                            });
                                        }}
                                        className="bg-transparent border-none focus:outline-none"
                                        disabled={!isEditing}
                                    />
                                    {isEditing && (
                                        <button
                                            onClick={() => deleteItem('skills.softSkills', skill.id)}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            <X size={14} />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>

                        <SectionHeader
                            title="Methodologies"
                            onAdd={() => addSkill('methodologies')}
                        />

                        <div className="flex flex-wrap gap-2">
                            {userData.skills.methodologies.map((method) => (
                                <div key={method.id} className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-lg">
                                    <input
                                        value={method.name}
                                        onChange={(e) => {
                                            const updated = userData.skills.methodologies.map(m =>
                                                m.id === method.id ? { ...m, name: e.target.value } : m
                                            );
                                            setUserData({
                                                ...userData,
                                                skills: { ...userData.skills, methodologies: updated }
                                            });
                                        }}
                                        className="bg-transparent border-none focus:outline-none"
                                        disabled={!isEditing}
                                    />
                                    {isEditing && (
                                        <button
                                            onClick={() => deleteItem('skills.methodologies', method.id)}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            <X size={14} />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'certifications':
                return (
                    <div className="space-y-8">
                        <SectionHeader
                            title="Certifications"
                            onAdd={addCertification}
                        />

                        {userData.certifications.map((cert) => (
                            <div key={cert.id} className="bg-white border rounded-xl p-6 shadow-sm relative">
                                {isEditing && (
                                    <button
                                        onClick={() => deleteItem('certifications', cert.id)}
                                        className="absolute top-4 right-4 p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input
                                        value={cert.name}
                                        onChange={(e) => {
                                            const updated = userData.certifications.map(c =>
                                                c.id === cert.id ? { ...c, name: e.target.value } : c
                                            );
                                            setUserData({ ...userData, certifications: updated });
                                        }}
                                        className="text-xl font-bold text-gray-900 px-3 py-2 border rounded"
                                        disabled={!isEditing}
                                        placeholder="Certification Name"
                                    />
                                    <input
                                        value={cert.authority}
                                        onChange={(e) => {
                                            const updated = userData.certifications.map(c =>
                                                c.id === cert.id ? { ...c, authority: e.target.value } : c
                                            );
                                            setUserData({ ...userData, certifications: updated });
                                        }}
                                        className="text-lg text-blue-600 px-3 py-2 border rounded"
                                        disabled={!isEditing}
                                        placeholder="Issuing Authority"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-1">Issue Date</label>
                                        <input
                                            type="date"
                                            value={cert.issueDate}
                                            onChange={(e) => {
                                                const updated = userData.certifications.map(c =>
                                                    c.id === cert.id ? { ...c, issueDate: e.target.value } : c
                                                );
                                                setUserData({ ...userData, certifications: updated });
                                            }}
                                            className="w-full px-3 py-1 border rounded"
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-1">Expiry Date</label>
                                        <input
                                            type="date"
                                            value={cert.expiryDate || ''}
                                            onChange={(e) => {
                                                const updated = userData.certifications.map(c =>
                                                    c.id === cert.id ? { ...c, expiryDate: e.target.value } : c
                                                );
                                                setUserData({ ...userData, certifications: updated });
                                            }}
                                            className="w-full px-3 py-1 border rounded"
                                            disabled={!isEditing}
                                            placeholder="No expiry"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-1">Certificate ID</label>
                                        <input
                                            value={cert.certificateId}
                                            onChange={(e) => {
                                                const updated = userData.certifications.map(c =>
                                                    c.id === cert.id ? { ...c, certificateId: e.target.value } : c
                                                );
                                                setUserData({ ...userData, certifications: updated });
                                            }}
                                            className="w-full px-3 py-1 border rounded"
                                            disabled={!isEditing}
                                            placeholder="Certificate ID"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case 'achievements':
                return (
                    <div className="space-y-8">
                        <SectionHeader
                            title="Achievements"
                            onAdd={addAchievement}
                        />

                        {userData.achievements.map((achievement) => (
                            <div key={achievement.id} className="bg-white border rounded-xl p-6 shadow-sm relative">
                                {isEditing && (
                                    <button
                                        onClick={() => deleteItem('achievements', achievement.id)}
                                        className="absolute top-4 right-4 p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input
                                        value={achievement.name}
                                        onChange={(e) => {
                                            const updated = userData.achievements.map(a =>
                                                a.id === achievement.id ? { ...a, name: e.target.value } : a
                                            );
                                            setUserData({ ...userData, achievements: updated });
                                        }}
                                        className="text-xl font-bold text-gray-900 px-3 py-2 border rounded"
                                        disabled={!isEditing}
                                        placeholder="Achievement Name"
                                    />
                                    <select
                                        value={achievement.type}
                                        onChange={(e) => {
                                            const updated = userData.achievements.map(a =>
                                                a.id === achievement.id ? { ...a, type: e.target.value } : a
                                            );
                                            setUserData({ ...userData, achievements: updated });
                                        }}
                                        className="px-3 py-2 border rounded"
                                        disabled={!isEditing}
                                    >
                                        <option value="Award">Award</option>
                                        <option value="Publication">Publication</option>
                                        <option value="Patent">Patent</option>
                                        <option value="Recognition">Recognition</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input
                                        value={achievement.organization}
                                        onChange={(e) => {
                                            const updated = userData.achievements.map(a =>
                                                a.id === achievement.id ? { ...a, organization: e.target.value } : a
                                            );
                                            setUserData({ ...userData, achievements: updated });
                                        }}
                                        className="text-blue-600 px-3 py-2 border rounded"
                                        disabled={!isEditing}
                                        placeholder="Organization"
                                    />
                                    <input
                                        value={achievement.year}
                                        onChange={(e) => {
                                            const updated = userData.achievements.map(a =>
                                                a.id === achievement.id ? { ...a, year: e.target.value } : a
                                            );
                                            setUserData({ ...userData, achievements: updated });
                                        }}
                                        className="px-3 py-2 border rounded"
                                        disabled={!isEditing}
                                        placeholder="Year"
                                    />
                                </div>

                                <textarea
                                    value={achievement.description}
                                    onChange={(e) => {
                                        const updated = userData.achievements.map(a =>
                                            a.id === achievement.id ? { ...a, description: e.target.value } : a
                                        );
                                        setUserData({ ...userData, achievements: updated });
                                    }}
                                    className="w-full px-3 py-2 border rounded"
                                    disabled={!isEditing}
                                    placeholder="Description"
                                    rows={3}
                                />
                            </div>
                        ))}
                    </div>
                );

            case 'preferences':
                return (
                    <div className="space-y-8">
                        <SectionHeader
                            title="Desired Job Titles"
                            onAdd={addDesiredTitle}
                        />

                        <div className="flex flex-wrap gap-2 mb-8">
                            {userData.jobPreferences.desiredTitles.map((title) => (
                                <div key={title.id} className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
                                    <input
                                        value={title.title}
                                        onChange={(e) => {
                                            const updated = userData.jobPreferences.desiredTitles.map(t =>
                                                t.id === title.id ? { ...t, title: e.target.value } : t
                                            );
                                            setUserData({
                                                ...userData,
                                                jobPreferences: { ...userData.jobPreferences, desiredTitles: updated }
                                            });
                                        }}
                                        className="bg-transparent border-none focus:outline-none"
                                        disabled={!isEditing}
                                    />
                                    {isEditing && (
                                        <button
                                            onClick={() => deleteItem('jobPreferences.desiredTitles', title.id)}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            <X size={14} />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Career Level</label>
                                <select
                                    value={userData.jobPreferences.careerLevel}
                                    onChange={(e) => setUserData({
                                        ...userData,
                                        jobPreferences: { ...userData.jobPreferences, careerLevel: e.target.value }
                                    })}
                                    className="w-full px-4 py-2 border rounded-lg"
                                    disabled={!isEditing}
                                >
                                    <option>Individual Contributor</option>
                                    <option>Team Lead</option>
                                    <option>Manager</option>
                                    <option>Director</option>
                                    <option>VP</option>
                                    <option>C-Level</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Work Mode</label>
                                <select
                                    value={userData.jobPreferences.workMode}
                                    onChange={(e) => setUserData({
                                        ...userData,
                                        jobPreferences: { ...userData.jobPreferences, workMode: e.target.value }
                                    })}
                                    className="w-full px-4 py-2 border rounded-lg"
                                    disabled={!isEditing}
                                >
                                    <option>Fully Remote</option>
                                    <option>Hybrid</option>
                                    <option>Fully On-site</option>
                                    <option>Flexible</option>
                                </select>
                            </div>
                        </div>

                        <SectionHeader
                            title="Benefits Prioritization"
                            onAdd={addBenefit}
                        />

                        <div className="space-y-3">
                            {userData.jobPreferences.benefits.map((benefit) => (
                                <div key={benefit.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                                    <select
                                        value={benefit.priority}
                                        onChange={(e) => {
                                            const updated = userData.jobPreferences.benefits.map(b =>
                                                b.id === benefit.id ? { ...b, priority: parseInt(e.target.value) } : b
                                            );
                                            setUserData({
                                                ...userData,
                                                jobPreferences: { ...userData.jobPreferences, benefits: updated }
                                            });
                                        }}
                                        className="px-3 py-1 border rounded"
                                        disabled={!isEditing}
                                    >
                                        {[1,2,3,4,5].map(num => (
                                            <option key={num} value={num}>Priority {num}</option>
                                        ))}
                                    </select>
                                    <input
                                        value={benefit.name}
                                        onChange={(e) => {
                                            const updated = userData.jobPreferences.benefits.map(b =>
                                                b.id === benefit.id ? { ...b, name: e.target.value } : b
                                            );
                                            setUserData({
                                                ...userData,
                                                jobPreferences: { ...userData.jobPreferences, benefits: updated }
                                            });
                                        }}
                                        className="flex-1 px-3 py-1 border rounded"
                                        disabled={!isEditing}
                                        placeholder="Benefit Name"
                                    />
                                    {isEditing && (
                                        <button
                                            onClick={() => deleteItem('jobPreferences.benefits', benefit.id)}
                                            className="p-2 text-red-600 hover:bg-red-50 rounded"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'portfolio':
                return (
                    <div className="space-y-8">
                        <SectionHeader
                            title="Projects"
                            onAdd={addProject}
                        />

                        {userData.portfolio.projects.map((project) => (
                            <div key={project.id} className="bg-white border rounded-xl p-6 shadow-sm relative">
                                {isEditing && (
                                    <button
                                        onClick={() => deleteItem('portfolio.projects', project.id)}
                                        className="absolute top-4 right-4 p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input
                                        value={project.name}
                                        onChange={(e) => {
                                            const updated = userData.portfolio.projects.map(p =>
                                                p.id === project.id ? { ...p, name: e.target.value } : p
                                            );
                                            setUserData({
                                                ...userData,
                                                portfolio: { ...userData.portfolio, projects: updated }
                                            });
                                        }}
                                        className="text-xl font-bold text-gray-900 px-3 py-2 border rounded"
                                        disabled={!isEditing}
                                        placeholder="Project Name"
                                    />
                                    <select
                                        value={project.type}
                                        onChange={(e) => {
                                            const updated = userData.portfolio.projects.map(p =>
                                                p.id === project.id ? { ...p, type: e.target.value } : p
                                            );
                                            setUserData({
                                                ...userData,
                                                portfolio: { ...userData.portfolio, projects: updated }
                                            });
                                        }}
                                        className="px-3 py-2 border rounded"
                                        disabled={!isEditing}
                                    >
                                        <option value="Case Study">Case Study</option>
                                        <option value="Open Source">Open Source</option>
                                        <option value="Personal Project">Personal Project</option>
                                        <option value="Client Project">Client Project</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm text-gray-600 mb-1">URL</label>
                                    <input
                                        type="url"
                                        value={project.url}
                                        onChange={(e) => {
                                            const updated = userData.portfolio.projects.map(p =>
                                                p.id === project.id ? { ...p, url: e.target.value } : p
                                            );
                                            setUserData({
                                                ...userData,
                                                portfolio: { ...userData.portfolio, projects: updated }
                                            });
                                        }}
                                        className="w-full px-3 py-2 border rounded"
                                        disabled={!isEditing}
                                        placeholder="https://example.com/project"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-600 mb-1">Description</label>
                                    <textarea
                                        value={project.description}
                                        onChange={(e) => {
                                            const updated = userData.portfolio.projects.map(p =>
                                                p.id === project.id ? { ...p, description: e.target.value } : p
                                            );
                                            setUserData({
                                                ...userData,
                                                portfolio: { ...userData.portfolio, projects: updated }
                                            });
                                        }}
                                        className="w-full px-3 py-2 border rounded"
                                        disabled={!isEditing}
                                        placeholder="Project description..."
                                        rows={3}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case 'social':
                return (
                    <div className="space-y-8">
                        <SectionHeader
                            title="Social Media Profiles"
                            onAdd={addSocialMedia}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {userData.socialMedia.map((social) => (
                                <div key={social.id} className="bg-white border rounded-xl p-4 shadow-sm relative">
                                    {isEditing && (
                                        <button
                                            onClick={() => deleteItem('socialMedia', social.id)}
                                            className="absolute top-2 right-2 p-1 text-red-600 hover:bg-red-50 rounded-lg"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    )}

                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-gray-100 rounded-lg">
                                            {social.icon}
                                        </div>
                                        <div className="flex-1">
                                            <input
                                                value={social.platform}
                                                onChange={(e) => {
                                                    const updated = userData.socialMedia.map(s =>
                                                        s.id === social.id ? { ...s, platform: e.target.value } : s
                                                    );
                                                    setUserData({ ...userData, socialMedia: updated });
                                                }}
                                                className="w-full font-semibold text-gray-900 bg-transparent border-b focus:border-blue-500 focus:outline-none"
                                                disabled={!isEditing}
                                                placeholder="Platform Name"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm text-gray-600 mb-1">Profile URL</label>
                                        <input
                                            type="url"
                                            value={social.url}
                                            onChange={(e) => {
                                                const updated = userData.socialMedia.map(s =>
                                                    s.id === social.id ? { ...s, url: e.target.value } : s
                                                );
                                                setUserData({ ...userData, socialMedia: updated });
                                            }}
                                            className="w-full px-3 py-1 border rounded text-sm"
                                            disabled={!isEditing}
                                            placeholder="https://example.com/username"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'volunteer':
                return (
                    <div className="space-y-8">
                        <SectionHeader
                            title="Volunteer Experience"
                            onAdd={addVolunteerExperience}
                        />

                        {userData.volunteerExperience.map((volunteer) => (
                            <div key={volunteer.id} className="bg-white border rounded-xl p-6 shadow-sm relative">
                                {isEditing && (
                                    <button
                                        onClick={() => deleteItem('volunteerExperience', volunteer.id)}
                                        className="absolute top-4 right-4 p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input
                                        value={volunteer.organization}
                                        onChange={(e) => {
                                            const updated = userData.volunteerExperience.map(v =>
                                                v.id === volunteer.id ? { ...v, organization: e.target.value } : v
                                            );
                                            setUserData({ ...userData, volunteerExperience: updated });
                                        }}
                                        className="text-xl font-bold text-gray-900 px-3 py-2 border rounded"
                                        disabled={!isEditing}
                                        placeholder="Organization"
                                    />
                                    <input
                                        value={volunteer.role}
                                        onChange={(e) => {
                                            const updated = userData.volunteerExperience.map(v =>
                                                v.id === volunteer.id ? { ...v, role: e.target.value } : v
                                            );
                                            setUserData({ ...userData, volunteerExperience: updated });
                                        }}
                                        className="text-lg text-blue-600 px-3 py-2 border rounded"
                                        disabled={!isEditing}
                                        placeholder="Role/Position"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-1">Start Date</label>
                                        <input
                                            type="date"
                                            value={volunteer.startDate}
                                            onChange={(e) => {
                                                const updated = userData.volunteerExperience.map(v =>
                                                    v.id === volunteer.id ? { ...v, startDate: e.target.value } : v
                                                );
                                                setUserData({ ...userData, volunteerExperience: updated });
                                            }}
                                            className="w-full px-3 py-1 border rounded"
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-1">End Date</label>
                                        <input
                                            type="date"
                                            value={volunteer.endDate}
                                            onChange={(e) => {
                                                const updated = userData.volunteerExperience.map(v =>
                                                    v.id === volunteer.id ? { ...v, endDate: e.target.value } : v
                                                );
                                                setUserData({ ...userData, volunteerExperience: updated });
                                            }}
                                            className="w-full px-3 py-1 border rounded"
                                            disabled={!isEditing}
                                            placeholder="Present"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-600 mb-1">Contributions</label>
                                    <textarea
                                        value={volunteer.contribributions.join('\n')}
                                        onChange={(e) => {
                                            const updated = userData.volunteerExperience.map(v =>
                                                v.id === volunteer.id ? { ...v, contributions: e.target.value.split('\n') } : v
                                            );
                                            setUserData({ ...userData, volunteerExperience: updated });
                                        }}
                                        className="w-full px-3 py-2 border rounded"
                                        disabled={!isEditing}
                                        placeholder="Describe your contributions..."
                                        rows={3}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case 'memberships':
                return (
                    <div className="space-y-8">
                        <SectionHeader
                            title="Professional Memberships"
                            onAdd={addMembership}
                        />

                        {userData.memberships.map((membership) => (
                            <div key={membership.id} className="bg-white border rounded-xl p-6 shadow-sm relative">
                                {isEditing && (
                                    <button
                                        onClick={() => deleteItem('memberships', membership.id)}
                                        className="absolute top-4 right-4 p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input
                                        value={membership.organization}
                                        onChange={(e) => {
                                            const updated = userData.memberships.map(m =>
                                                m.id === membership.id ? { ...m, organization: e.target.value } : m
                                            );
                                            setUserData({ ...userData, memberships: updated });
                                        }}
                                        className="text-xl font-bold text-gray-900 px-3 py-2 border rounded"
                                        disabled={!isEditing}
                                        placeholder="Organization"
                                    />
                                    <input
                                        value={membership.memberId}
                                        onChange={(e) => {
                                            const updated = userData.memberships.map(m =>
                                                m.id === membership.id ? { ...m, memberId: e.target.value } : m
                                            );
                                            setUserData({ ...userData, memberships: updated });
                                        }}
                                        className="px-3 py-2 border rounded"
                                        disabled={!isEditing}
                                        placeholder="Member ID"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-1">Membership Level</label>
                                        <select
                                            value={membership.level}
                                            onChange={(e) => {
                                                const updated = userData.memberships.map(m =>
                                                    m.id === membership.id ? { ...m, level: e.target.value } : m
                                                );
                                                setUserData({ ...userData, memberships: updated });
                                            }}
                                            className="w-full px-3 py-1 border rounded"
                                            disabled={!isEditing}
                                        >
                                            <option value="Student">Student</option>
                                            <option value="Professional">Professional</option>
                                            <option value="Fellow">Fellow</option>
                                            <option value="Lifetime">Lifetime</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-1">Start Date</label>
                                        <input
                                            type="date"
                                            value={membership.startDate}
                                            onChange={(e) => {
                                                const updated = userData.memberships.map(m =>
                                                    m.id === membership.id ? { ...m, startDate: e.target.value } : m
                                                );
                                                setUserData({ ...userData, memberships: updated });
                                            }}
                                            className="w-full px-3 py-1 border rounded"
                                            disabled={!isEditing}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case 'hobbies':
                return (
                    <div className="space-y-8">
                        <SectionHeader
                            title="Hobbies & Interests"
                            onAdd={addHobby}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {userData.hobbies.map((hobby) => (
                                <div key={hobby.id} className="bg-white border rounded-xl p-4 shadow-sm relative">
                                    {isEditing && (
                                        <button
                                            onClick={() => deleteItem('hobbies', hobby.id)}
                                            className="absolute top-2 right-2 p-1 text-red-600 hover:bg-red-50 rounded-lg"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    )}

                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-purple-100 rounded-lg">
                                            <Heart size={20} className="text-purple-600" />
                                        </div>
                                        <div className="flex-1">
                                            <input
                                                value={hobby.name}
                                                onChange={(e) => {
                                                    const updated = userData.hobbies.map(h =>
                                                        h.id === hobby.id ? { ...h, name: e.target.value } : h
                                                    );
                                                    setUserData({ ...userData, hobbies: updated });
                                                }}
                                                className="w-full font-semibold text-gray-900 bg-transparent border-b focus:border-blue-500 focus:outline-none"
                                                disabled={!isEditing}
                                                placeholder="Hobby Name"
                                            />
                                            <select
                                                value={hobby.type}
                                                onChange={(e) => {
                                                    const updated = userData.hobbies.map(h =>
                                                        h.id === hobby.id ? { ...h, type: e.target.value } : h
                                                    );
                                                    setUserData({ ...userData, hobbies: updated });
                                                }}
                                                className="w-full mt-2 text-sm text-gray-600 bg-transparent"
                                                disabled={!isEditing}
                                            >
                                                <option value="Personal">Personal</option>
                                                <option value="Professional">Professional</option>
                                                <option value="Sports">Sports</option>
                                                <option value="Arts">Arts</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'resume':
                return (
                    <div className="space-y-6">
                        <div className="bg-white border rounded-xl p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-100 rounded-lg">
                                        <FileText size={24} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{userData.resume.fileName}</h3>
                                        <p className="text-gray-600">Last updated: {userData.resume.lastUpdated}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                        <Download size={18} />
                                        Download
                                    </button>
                                    <label className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition cursor-pointer">
                                        <Upload size={18} />
                                        Upload New
                                        <input
                                            type="file"
                                            className="hidden"
                                            accept=".pdf,.doc,.docx"
                                            onChange={(e) => {
                                                if (e.target.files[0]) {
                                                    alert(`Selected file: ${e.target.files[0].name}`);
                                                }
                                            }}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'settings':
                return (
                    <div className="space-y-6">
                        <div className="bg-white border rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy Settings</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-medium text-gray-900">Profile Visibility</h4>
                                        <p className="text-sm text-gray-600">Who can see your profile</p>
                                    </div>
                                    <select
                                        value={userData.settings.visibility}
                                        className="px-4 py-2 border rounded-lg"
                                        disabled={!isEditing}
                                    >
                                        <option value="Public">Public</option>
                                        <option value="Private">Private</option>
                                        <option value="Hidden">Hidden</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Job Seeker Profile</h1>
                    <p className="text-gray-600 mt-2">Complete your profile to get better job matches</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                            {/* Profile Image */}
                            <div className="relative mb-6">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                                    <img
                                        src={profileImage}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {isEditing && (
                                    <label className="absolute bottom-2 right-1/2 translate-x-1/2 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition">
                                        <Upload size={18} />
                                        <input
                                            type="file"
                                            className="hidden"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                        />
                                    </label>
                                )}
                            </div>

                            {/* User Info */}
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">{userData.personalInfo.fullName}</h2>
                                <p className="text-gray-600">{userData.personalInfo.preferredName}</p>
                                <div className="flex items-center justify-center gap-2 mt-2 text-gray-600">
                                    <Mail size={16} />
                                    <span>{userData.personalInfo.primaryEmail}</span>
                                </div>
                            </div>

                            {/* Profile Completeness */}
                            <div className="mb-6">
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-medium text-gray-700">Profile Completeness</span>
                                    <span className="text-sm font-bold text-blue-600">85%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                            </div>

                            {/* Tabs Navigation */}
                            <nav className="space-y-1">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                                            activeTab === tab.id
                                                ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                                                : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                    >
                                        {tab.icon}
                                        <span className="font-medium">{tab.label}</span>
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:w-3/4">
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            {/* Tab Header */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                        {tabs.find(t => t.id === activeTab)?.icon}
                                        {tabs.find(t => t.id === activeTab)?.label}
                                    </h2>
                                    <p className="text-gray-600 mt-1">
                                        {activeTab === 'personal' && 'Manage your personal information and contact details'}
                                        {activeTab === 'experience' && 'Add and manage your work experience'}
                                        {activeTab === 'education' && 'Educational background and qualifications'}
                                        {activeTab === 'skills' && 'Technical and soft skills'}
                                        {activeTab === 'certifications' && 'Professional certifications and licenses'}
                                        {activeTab === 'achievements' && 'Awards, publications, and accomplishments'}
                                        {activeTab === 'preferences' && 'Job preferences and career goals'}
                                        {activeTab === 'portfolio' && 'Online presence and work samples'}
                                        {activeTab === 'social' && 'Social media profiles'}
                                        {activeTab === 'resume' && 'Resume/CV management'}
                                        {activeTab === 'volunteer' && 'Volunteer experience'}
                                        {activeTab === 'memberships' && 'Professional memberships'}
                                        {activeTab === 'hobbies' && 'Hobbies and interests'}
                                        {activeTab === 'settings' && 'Privacy and notification settings'}
                                    </p>
                                </div>

                                <div className="flex gap-3">
                                    {isEditing ? (
                                        <>
                                            <button
                                                onClick={() => setIsEditing(false)}
                                                className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                                            >
                                                <X size={18} />
                                                Cancel
                                            </button>
                                            <button
                                                onClick={saveChanges}
                                                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                                            >
                                                <Save size={18} />
                                                Save Changes
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            onClick={() => setIsEditing(true)}
                                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                        >
                                            <Edit2 size={18} />
                                            Edit Profile
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Tab Content */}
                            <div className="mt-6">
                                {renderTabContent()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobSeekerProfile;