import React, { useState } from 'react';
import {
    User, Mail, Phone, MapPin, Briefcase, GraduationCap,
    Award, FileText, Globe, Settings, Plus, Trash2,
    Edit2, Save, X, Upload, Linkedin, Github, Twitter,
    Calendar, DollarSign, Target, Star, CheckCircle
} from 'lucide-react';
import  '../styles/jobseeker.css';
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
                { language: "English", proficiency: "Native", reading: 5, writing: 5, speaking: 5 },
                { language: "French", proficiency: "Intermediate", reading: 4, writing: 3, speaking: 4 },
                { language: "Spanish", proficiency: "Basic", reading: 2, writing: 1, speaking: 2 }
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
                { name: "React", category: "Frameworks", proficiency: 5, years: 4, lastUsed: "2023-12" },
                { name: "Node.js", category: "Backend", proficiency: 4, years: 5, lastUsed: "2023-12" },
                { name: "Python", category: "Languages", proficiency: 4, years: 6, lastUsed: "2023-11" },
                { name: "AWS", category: "Cloud", proficiency: 4, years: 3, lastUsed: "2023-12" },
                { name: "MongoDB", category: "Databases", proficiency: 4, years: 4, lastUsed: "2023-12" }
            ],
            softSkills: ["Leadership", "Communication", "Problem Solving", "Team Collaboration"],
            methodologies: ["Agile", "Scrum", "DevOps"]
        },

        jobPreferences: {
            desiredTitles: ["Senior Software Engineer", "Tech Lead", "Solutions Architect"],
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
            employmentStatus: "Employed (Actively looking)"
        },

        portfolio: {
            website: "https://alexchen.dev",
            github: "https://github.com/alexchen",
            linkedin: "https://linkedin.com/in/alexchen",
            behance: null,
            projects: [
                {
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
            { platform: "LinkedIn", url: "https://linkedin.com/in/alexchen", icon: <Linkedin size={16} /> },
            { platform: "GitHub", url: "https://github.com/alexchen", icon: <Github size={16} /> },
            { platform: "Twitter", url: "https://twitter.com/alex_chen", icon: <Twitter size={16} /> }
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
        }
    });

    const tabs = [
        { id: 'personal', label: 'Personal Info', icon: <User size={18} /> },
        { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
        { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
        { id: 'skills', label: 'Skills', icon: <Star size={18} /> },
        { id: 'certifications', label: 'Certifications', icon: <Award size={18} /> },
        { id: 'achievements', label: 'Achievements', icon: <CheckCircle size={18} /> },
        { id: 'preferences', label: 'Job Preferences', icon: <Target size={18} /> },
        { id: 'portfolio', label: 'Portfolio', icon: <Globe size={18} /> },
        { id: 'social', label: 'Social Media', icon: <Twitter size={18} /> },
        { id: 'resume', label: 'Resume', icon: <FileText size={18} /> },
        { id: 'settings', label: 'Settings', icon: <Settings size={18} /> }
    ];

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

    const addExperience = () => {
        const newExp = {
            id: userData.experience.length + 1,
            jobTitle: "",
            company: "",
            industry: "",
            employmentType: "Full-time Permanent",
            startDate: "",
            endDate: "",
            location: "",
            responsibilities: []
        };
        setUserData({
            ...userData,
            experience: [...userData.experience, newExp]
        });
    };

    const deleteExperience = (id) => {
        setUserData({
            ...userData,
            experience: userData.experience.filter(exp => exp.id !== id)
        });
    };

    const addSocialMedia = () => {
        const newSocial = {
            platform: "",
            url: ""
        };
        setUserData({
            ...userData,
            socialMedia: [...userData.socialMedia, newSocial]
        });
    };

    const deleteSocialMedia = (index) => {
        const updated = [...userData.socialMedia];
        updated.splice(index, 1);
        setUserData({ ...userData, socialMedia: updated });
    };

    const saveChanges = () => {
        setIsEditing(false);
        // In real app, you would send data to backend here
        alert('Profile updated successfully!');
    };

    const renderTabContent = () => {
        switch(activeTab) {
            case 'personal':
                return (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    value={userData.personalInfo.fullName}
                                    onChange={(e) => setUserData({
                                        ...userData,
                                        personalInfo: { ...userData.personalInfo, fullName: e.target.value }
                                    })}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    disabled={!isEditing}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Name</label>
                                <input
                                    type="text"
                                    value={userData.personalInfo.preferredName}
                                    onChange={(e) => setUserData({
                                        ...userData,
                                        personalInfo: { ...userData.personalInfo, preferredName: e.target.value }
                                    })}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    disabled={!isEditing}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                                <input
                                    type="date"
                                    value={userData.personalInfo.dateOfBirth}
                                    onChange={(e) => setUserData({
                                        ...userData,
                                        personalInfo: { ...userData.personalInfo, dateOfBirth: e.target.value }
                                    })}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    disabled={!isEditing}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                                <select
                                    value={userData.personalInfo.gender}
                                    onChange={(e) => setUserData({
                                        ...userData,
                                        personalInfo: { ...userData.personalInfo, gender: e.target.value }
                                    })}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    disabled={!isEditing}
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Non-binary">Non-binary</option>
                                    <option value="Prefer not to say">Prefer not to say</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800">Contact Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Primary Email</label>
                                    <div className="flex items-center gap-2">
                                        <Mail size={18} className="text-gray-500" />
                                        <input
                                            type="email"
                                            value={userData.personalInfo.primaryEmail}
                                            className="w-full px-4 py-2 border rounded-lg"
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                                    <div className="flex items-center gap-2">
                                        <Phone size={18} className="text-gray-500" />
                                        <input
                                            type="tel"
                                            value={userData.personalInfo.mobileNumber}
                                            onChange={(e) => setUserData({
                                                ...userData,
                                                personalInfo: { ...userData.personalInfo, mobileNumber: e.target.value }
                                            })}
                                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            disabled={!isEditing}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Current Address</label>
                                <div className="flex items-center gap-2">
                                    <MapPin size={18} className="text-gray-500" />
                                    <input
                                        type="text"
                                        value={userData.personalInfo.currentAddress}
                                        onChange={(e) => setUserData({
                                            ...userData,
                                            personalInfo: { ...userData.personalInfo, currentAddress: e.target.value }
                                        })}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        disabled={!isEditing}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800">Languages</h3>
                            {userData.personalInfo.languages.map((lang, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <span className="font-medium">{lang.language}</span>
                                        <span className="ml-2 text-sm text-gray-600">({lang.proficiency})</span>
                                    </div>
                                    <div className="flex gap-4 text-sm text-gray-600">
                                        <span>Reading: {lang.reading}/5</span>
                                        <span>Writing: {lang.writing}/5</span>
                                        <span>Speaking: {lang.speaking}/5</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'experience':
                return (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-800">Work Experience</h2>
                            {isEditing && (
                                <button
                                    onClick={addExperience}
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                >
                                    <Plus size={18} />
                                    Add Experience
                                </button>
                            )}
                        </div>

                        {userData.experience.map((exp) => (
                            <div key={exp.id} className="bg-white border rounded-xl p-6 shadow-sm">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{exp.jobTitle}</h3>
                                        <p className="text-lg text-blue-600">{exp.company}</p>
                                        <div className="flex items-center gap-4 mt-2 text-gray-600">
                                            <Calendar size={16} />
                                            <span>{exp.startDate} - {exp.endDate}</span>
                                            <MapPin size={16} />
                                            <span>{exp.location}</span>
                                            <Briefcase size={16} />
                                            <span>{exp.employmentType}</span>
                                        </div>
                                        {exp.salary && (
                                            <div className="flex items-center gap-2 mt-2 text-gray-700">
                                                <DollarSign size={16} />
                                                <span>{exp.salary.currency} {exp.salary.base.toLocaleString()}/year</span>
                                                {exp.salary.bonus > 0 && (
                                                    <span className="text-green-600">+ {exp.salary.bonus.toLocaleString()} bonus</span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    {isEditing && (
                                        <div className="flex gap-2">
                                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                                                <Edit2 size={18} />
                                            </button>
                                            <button
                                                onClick={() => deleteExperience(exp.id)}
                                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-4">
                                    <h4 className="font-semibold text-gray-800 mb-2">Key Responsibilities:</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        {exp.responsibilities.map((resp, idx) => (
                                            <li key={idx}>{resp}</li>
                                        ))}
                                    </ul>
                                </div>

                                {exp.projects && exp.projects.length > 0 && (
                                    <div className="mt-6">
                                        <h4 className="font-semibold text-gray-800 mb-3">Project Highlights:</h4>
                                        {exp.projects.map((project, idx) => (
                                            <div key={idx} className="bg-gray-50 rounded-lg p-4 mt-2">
                                                <h5 className="font-medium text-gray-900">{project.name}</h5>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {project.technologies.map((tech, techIdx) => (
                                                        <span key={techIdx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                              {tech}
                            </span>
                                                    ))}
                                                </div>
                                                <p className="mt-2 text-gray-600">{project.outcome}</p>
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
                    <div className="space-y-6">
                        {userData.education.map((edu) => (
                            <div key={edu.id} className="bg-white border rounded-xl p-6 shadow-sm">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{edu.degree} in {edu.field}</h3>
                                        <p className="text-lg text-blue-600">{edu.institution}</p>
                                        <div className="flex items-center gap-4 mt-2 text-gray-600">
                                            <Calendar size={16} />
                                            <span>{edu.startDate} - {edu.endDate}</span>
                                            <MapPin size={16} />
                                            <span>{edu.location}</span>
                                            {edu.grade && (
                                                <span className="font-semibold">Grade: {edu.grade}</span>
                                            )}
                                        </div>
                                        {edu.honors && (
                                            <div className="mt-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                          <Award size={14} className="mr-1" />
                            {edu.honors}
                        </span>
                                            </div>
                                        )}
                                    </div>
                                    {isEditing && (
                                        <div className="flex gap-2">
                                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                                                <Edit2 size={18} />
                                            </button>
                                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {edu.thesis && (
                                    <div className="mt-4">
                                        <h4 className="font-semibold text-gray-800">Thesis:</h4>
                                        <p className="text-gray-700">{edu.thesis}</p>
                                    </div>
                                )}

                                {edu.coursework && edu.coursework.length > 0 && (
                                    <div className="mt-4">
                                        <h4 className="font-semibold text-gray-800 mb-2">Key Coursework:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.coursework.map((course, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                          {course}
                        </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                );

            case 'skills':
                return (
                    <div className="space-y-6">
                        <div className="bg-white border rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Skills</h3>
                            <div className="space-y-4">
                                {userData.skills.technical.map((skill, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                                        <div>
                                            <div className="flex items-center gap-3">
                                                <span className="font-medium text-gray-900">{skill.name}</span>
                                                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          {skill.category}
                        </span>
                                            </div>
                                            <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                                                <span>{skill.years} years experience</span>
                                                <span>Last used: {skill.lastUsed}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={16}
                                                        className={i < skill.proficiency ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white border rounded-xl p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Soft Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {userData.skills.softSkills.map((skill, idx) => (
                                        <span key={idx} className="px-4 py-2 bg-green-100 text-green-800 rounded-lg">
                      {skill}
                    </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white border rounded-xl p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Methodologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {userData.skills.methodologies.map((method, idx) => (
                                        <span key={idx} className="px-4 py-2 bg-purple-100 text-purple-800 rounded-lg">
                      {method}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'certifications':
                return (
                    <div className="space-y-6">
                        {userData.certifications.map((cert) => (
                            <div key={cert.id} className="bg-white border rounded-xl p-6 shadow-sm">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
                                            {cert.verified && (
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <CheckCircle size={12} className="mr-1" />
                          Verified
                        </span>
                                            )}
                                        </div>
                                        <p className="text-lg text-blue-600">{cert.authority}</p>
                                        <div className="flex items-center gap-4 mt-2 text-gray-600">
                                            <Calendar size={16} />
                                            <span>Issued: {cert.issueDate}</span>
                                            {cert.expiryDate && (
                                                <>
                                                    <span>•</span>
                                                    <span>Expires: {cert.expiryDate}</span>
                                                </>
                                            )}
                                        </div>
                                        {cert.certificateId && (
                                            <p className="mt-2 text-sm text-gray-600">ID: {cert.certificateId}</p>
                                        )}
                                    </div>
                                    {isEditing && (
                                        <div className="flex gap-2">
                                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                                                <Edit2 size={18} />
                                            </button>
                                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    )}
                                </div>
                                {cert.credentialUrl && (
                                    <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 mt-4 text-blue-600 hover:text-blue-800"
                                    >
                                        <Globe size={16} />
                                        View Credential
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                );

            case 'achievements':
                return (
                    <div className="space-y-6">
                        {userData.achievements.map((achievement) => (
                            <div key={achievement.id} className="bg-white border rounded-xl p-6 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-100 rounded-lg">
                                        <Award size={24} className="text-blue-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900">{achievement.name}</h3>
                                                <p className="text-blue-600">{achievement.organization}</p>
                                                <p className="text-gray-600 mt-2">{achievement.description}</p>
                                            </div>
                                            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                        {achievement.year}
                      </span>
                                        </div>
                                        <div className="mt-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {achievement.type}
                      </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case 'preferences':
                return (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white border rounded-xl p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Career Goals</h3>
                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Desired Titles</label>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {userData.jobPreferences.desiredTitles.map((title, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                          {title}
                        </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Target Industry</label>
                                        <p className="mt-1 text-gray-900">{userData.jobPreferences.targetIndustry}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Career Level</label>
                                        <p className="mt-1 text-gray-900">{userData.jobPreferences.careerLevel}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border rounded-xl p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Work Preferences</h3>
                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Work Mode</label>
                                        <p className="mt-1 text-gray-900">{userData.jobPreferences.workMode}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Work Schedule</label>
                                        <p className="mt-1 text-gray-900">{userData.jobPreferences.workSchedule}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Travel Willingness</label>
                                        <p className="mt-1 text-gray-900">{userData.jobPreferences.travelWillingness}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Compensation Expectations</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Minimum Salary</label>
                                    <div className="flex items-center gap-2 mt-2">
                                        <DollarSign size={20} className="text-gray-500" />
                                        <span className="text-2xl font-bold text-gray-900">
                      ${userData.jobPreferences.minSalary.toLocaleString()}
                    </span>
                                        <span className="text-gray-600">/year</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Expected Range</label>
                                    <div className="mt-2">
                                        <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold text-gray-900">
                        ${userData.jobPreferences.expectedRange.low.toLocaleString()}
                      </span>
                                            <span className="text-gray-500">-</span>
                                            <span className="text-lg font-semibold text-gray-900">
                        ${userData.jobPreferences.expectedRange.high.toLocaleString()}
                      </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Notice Period</label>
                                    <p className="mt-2 text-lg font-semibold text-gray-900">{userData.jobPreferences.noticePeriod}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'portfolio':
                return (
                    <div className="space-y-6">
                        <div className="bg-white border rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Presence</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Personal Website</label>
                                    <a
                                        href={userData.portfolio.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                                    >
                                        <Globe size={16} />
                                        {userData.portfolio.website}
                                    </a>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">GitHub</label>
                                    <a
                                        href={userData.portfolio.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                                    >
                                        <Github size={16} />
                                        {userData.portfolio.github}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {userData.portfolio.projects.length > 0 && (
                            <div className="bg-white border rounded-xl p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Featured Projects</h3>
                                <div className="space-y-4">
                                    {userData.portfolio.projects.map((project, idx) => (
                                        <div key={idx} className="p-4 border rounded-lg hover:bg-gray-50">
                                            <h4 className="font-semibold text-gray-900">{project.name}</h4>
                                            <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 mt-2 text-blue-600 hover:text-blue-800 text-sm"
                                            >
                                                <Globe size={14} />
                                                View Project
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {userData.portfolio.videoIntroduction && (
                            <div className="bg-white border rounded-xl p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Video Introduction</h3>
                                <a
                                    href={userData.portfolio.videoIntroduction}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                    </svg>
                                    Watch Video Introduction
                                </a>
                            </div>
                        )}
                    </div>
                );

            case 'social':
                return (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-800">Social Media Profiles</h2>
                            {isEditing && (
                                <button
                                    onClick={addSocialMedia}
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                >
                                    <Plus size={18} />
                                    Add Social Media
                                </button>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {userData.socialMedia.map((social, index) => (
                                <div key={index} className="bg-white border rounded-xl p-4 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-gray-100 rounded-lg">
                                                {social.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">{social.platform}</h3>
                                                <a
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm text-blue-600 hover:text-blue-800 truncate block max-w-[200px]"
                                                >
                                                    {social.url}
                                                </a>
                                            </div>
                                        </div>
                                        {isEditing && (
                                            <button
                                                onClick={() => deleteSocialMedia(index)}
                                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        )}
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
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-100 rounded-lg">
                                        <FileText size={24} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{userData.resume.fileName}</h3>
                                        <p className="text-gray-600">Last updated: {userData.resume.lastUpdated}</p>
                                        <p className="text-sm text-gray-500">Size: {userData.resume.fileSize}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                        Download
                                    </button>
                                    <label className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition cursor-pointer">
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
                                        Upload New
                                    </label>
                                </div>
                            </div>

                            <div className="mt-6 border-t pt-6">
                                <h4 className="font-semibold text-gray-800 mb-3">Resume Parsing Information</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <div className="text-sm text-gray-600">Skills Detected</div>
                                        <div className="font-semibold text-gray-900">24</div>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <div className="text-sm text-gray-600">Experience Years</div>
                                        <div className="font-semibold text-gray-900">7</div>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <div className="text-sm text-gray-600">Last Scan</div>
                                        <div className="font-semibold text-gray-900">Today</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'settings':
                return (
                    <div className="space-y-6">
                        <div className="bg-white border rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Profile Visibility</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-medium text-gray-900">Visibility Mode</h4>
                                        <p className="text-sm text-gray-600">Control who can see your profile</p>
                                    </div>
                                    <select
                                        value={userData.settings.visibility}
                                        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                        disabled={!isEditing}
                                    >
                                        <option value="Public">Public (Visible to all employers)</option>
                                        <option value="Private">Private (Visible only when you apply)</option>
                                        <option value="Hidden">Hidden (Not searchable)</option>
                                    </select>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-medium text-gray-900">Hide Current Employer</h4>
                                        <p className="text-sm text-gray-600">Prevent current employer from seeing your profile</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Job Alerts</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Frequency</label>
                                    <select
                                        value={userData.settings.jobAlerts.frequency}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                        disabled={!isEditing}
                                    >
                                        <option value="Real-time">Real-time</option>
                                        <option value="Daily Digest">Daily Digest</option>
                                        <option value="Weekly Digest">Weekly Digest</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Channels</label>
                                    <div className="space-y-2">
                                        {['Email', 'SMS', 'Push Notification', 'In-app notification'].map((channel) => (
                                            <label key={channel} className="flex items-center gap-3">
                                                <input
                                                    type="checkbox"
                                                    checked={userData.settings.jobAlerts.channels.includes(channel)}
                                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                    disabled={!isEditing}
                                                />
                                                <span className="text-gray-700">{channel}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Data Sharing Preferences</h3>
                            <div className="space-y-3">
                                {Object.entries(userData.settings.dataSharing).map(([key, value]) => (
                                    <div key={key} className="flex items-center justify-between">
                                        <span className="text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={value}
                                                className="sr-only peer"
                                                disabled={!isEditing}
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                ))}
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
                {/* Header */}
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
                                <div className="flex items-center justify-center gap-2 mt-1 text-gray-600">
                                    <Phone size={16} />
                                    <span>{userData.personalInfo.mobileNumber}</span>
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

                        {/* Quick Stats */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="font-semibold text-gray-800 mb-4">Quick Stats</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Experience</span>
                                    <span className="font-semibold">7 years</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Applications</span>
                                    <span className="font-semibold">12</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Interviews</span>
                                    <span className="font-semibold">5</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Profile Views</span>
                                    <span className="font-semibold">127</span>
                                </div>
                            </div>
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

                {/* Footer Note */}
                <div className="mt-8 text-center text-gray-500 text-sm">
                    <p>Your profile is visible to employers when you apply for jobs. Keep it updated for better matches.</p>
                </div>
            </div>
        </div>
    );
};

export default JobSeekerProfile;