import { AlertTriangle, Bell, Briefcase, ChevronDown, Loader2, Mail, MapPin, TrendingUp } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import SkillCard from '../../components/Skillcard';


import { apiGet } from '../../api/api';


export default function CandidateDashboard() {

    const [profileData, setProfileData] = useState(null);
    const [isProfileLoading, setIsProfileLoading] = useState(true);
    const [error, setError] = useState(null);

    // Mock data required by the dashboard UI sections.
    const mockUser = {
        name: "Mira Anand",
        title: "Senior AI Engineer",
        location: "Bengaluru, IN",
        email: "m.anand@orbitsphere.com",
        // Removed 'memberSince' as requested
        skills: [
            { title: "Python Proficiency", score: 85, color: "green" },
            { title: "Deep Learning", score: 68, color: "yellow" },
            { title: "Cloud Computing", score: 92, color: "blue" },
            { title: "Interview Invites", score: 50, color: "pink" },
            { title: "Resume Views", score: 75, color: "purple" },
        ],
        matchData: [
            { job: "Sr. Frontend Dev @ TechCorp", match: 92, color: "green" },
            { job: "AI Research Intern @ Datatech", match: 85, color: "yellow" },
            { job: "Software Architect @ WebSolutions", match: 74, color: "red" },
        ],
        notifications: [
            { title: "Profile Strength", detail: "Complete the 'Projects' section for a 20% match boost!" },
            { title: "Upcoming Event", detail: "Virtual Career Fair on 15 Dec. Register now." },
        ]
    };
    
    // Function to fetch the profile data
    const fetchProfile = useCallback(async (candidateId) => {
    setError(null);
    setIsProfileLoading(true);

    try {
        const data = await apiGet(`/candidate/profile/${candidateId}`);

        setProfileData({
            ...mockUser,
            ...data,
            skills: (data.skills || []).map((skill, index) => ({
                title: skill,
                score: Math.min(95, 70 + index * 5),
                color: ["green", "yellow", "blue", "pink", "purple"][index % 5],
            })),
        });

    } catch (err) {
        console.error(err);
        setError(err.message || "Failed to load profile");
        setProfileData(mockUser); // temporary fallback
    } finally {
        setIsProfileLoading(false);
    }
}, []);

    
    useEffect(() => {
    const stored = localStorage.getItem("candidate");
    if (!stored) {
        setError("Candidate not logged in");
        setIsProfileLoading(false);
        return;
    }

    const { id } = JSON.parse(stored);
    if (!id) {
        setError("Invalid candidate session");
        setIsProfileLoading(false);
        return;
    }

    fetchProfile(id);
}, [fetchProfile]);



    
    // Use the fetched data if available, otherwise use mock/default state
    const user = profileData || mockUser;


    return (
        <div className="min-h-screen bg-[image:var(--bg-gr)] font-sans">
            
            {/* Navbar component (re-enabled for local environment) */}
            <Navbar /> 

            {/* Error Message Display */}
            {error && (
                <div className="bg-red-900 p-3 text-sm text-red-300 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 mr-2" /> {error}
                </div>
            )}
            
            {/* Loading Indicator */}
            {isProfileLoading && (
                 <div className="bg-gray-800 p-3 text-sm text-blue-400 flex items-center justify-center">
                    <Loader2 className="w-4 h-4 animate-spin mr-2" /> Loading Profile Data...
                </div>
            )}


            {/* Main Content Layout */}
            <main className="p-4 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-6">

                    {/* Left Column (Profile and Jobs) */}
                    <div className="w-full lg:w-1/4 space-y-6">

                        {/* User Profile Card */}
                        <div className="bg-[image:var(--pro-card)] p-6 rounded-xl shadow-2xl border-t-4 border-blue-500 transition-all hover:shadow-blue-500/30">
                            <div className="flex items-center mb-4">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mr-4 text-white uppercase shadow-lg">
                                    {user.name[0]}{user.name.split(' ')[1]?.[0] || 'A'}
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-blue-600">{user.name}</h2>
                                    {/* <p className="text-sm text-gray-400">{user.title}</p> */}
                                </div>
                            </div>
                            <div className="space-y-2 text-sm text-gray-400 border-t border-(--accent-muted) pt-4 mt-4">
                                <p className="flex items-center text-(--text-muted)"><MapPin className="w-4 h-4 mr-2 text-pink-400" />{user.location}</p>
                                <p className="flex items-center text-(--text-muted)"><Mail className="w-4 h-4 mr-2 text-pink-400" />{user.email}</p>
                            </div>
                            <a href='/profile'
                                
                                className="mt-6 w-full text-center py-2 text-sm rounded-lg bg-pink-600 hover:bg-pink-700 transition-colors font-semibold block shadow-md hover:shadow-lg block"
                            >
                                View / Edit Profile
                            </a>
                        </div>

                        {/* AI Job Recommendation */}
                        <div className="bg-[image:var(--pro-card)] p-6 rounded-xl shadow-xl">
                            <h3 className="text-lg font-bold border-b border-(--accent-muted) pb-2 mb-4 text-blue-600 flex items-center">
                                <TrendingUp className="w-5 h-5 mr-2" /> AI Job Recommendations
                            </h3>
                            <ul className="space-y-3 text-sm text-(--accent)">
                                
                                This widget will be working soon.
                                <li className="text-center pt-2">
                                    <a href="/jobs" className="text-sm text-blue-400 hover:text-blue-300 flex items-center justify-center">
                                        See All Recommendations <ChevronDown className="w-4 h-4 inline ml-1" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column (Metrics and Dynamic Content) */}
                    <div className="w-full lg:w-3/4 space-y-6">

                        {/* Key Skills/Stats Metrics */}
                        <div className="bg-[image:var(--dash-card)] p-4 rounded-xl shadow-xl">
                            <h3 className="text-xl font-bold mb-4 text-(--accent) border-b border-(--accent) pb-2">Skill and Engagement Metrics</h3>
                            <div className="flex justify-start flex-wrap gap-4">
                                {user.skills?.map((skill, index) => (
                                    <SkillCard key={index} title={skill.title} score={skill.score} color={skill.color} />
                                ))}
                            </div>
                        </div>

                        {/* Content Sections (Application Status & Notifications) */}
                        <div className="flex flex-col md:flex-row gap-6">

                            {/* Application Status Tracker */}
                            <div className="bg-[image:var(--dash-card)] p-6 rounded-xl shadow-xl w-full md:w-2/3">
                                <h3 className="text-lg font-bold border-b border-(--accent) pb-2 mb-4 text-(--accent) flex items-center">
                                    <Briefcase className="w-5 h-5 mr-2" /> Application Status Tracker
                                </h3>
                                <div className="space-y-3 text-sm text-(--text-muted)">
                                    {/* <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                                        <p>Junior Data Scientist - Google</p>
                                        <span className="text-yellow-400 font-medium bg-yellow-400/20 px-2 py-0.5 rounded-full text-xs">Applied</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                                        <p>AI/ML Engineer - Microsoft</p>
                                        <span className="text-green-400 font-medium bg-green-400/20 px-2 py-0.5 rounded-full text-xs">Interview Scheduled</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                                        <p>Platform Architect - Stripe</p>
                                        <span className="text-red-400 font-medium bg-red-400/20 px-2 py-0.5 rounded-full text-xs">Rejected</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p>Fullstack Developer - HubSpot</p>
                                        <span className="text-blue-400 font-medium bg-blue-400/20 px-2 py-0.5 rounded-full text-xs">Under Review</span>
                                    </div> */}
                                    This feature is under development
                                </div>
                            </div>

                            {/* Important Notifications- */}
                            <div className="bg-[image:var(--dash-card)] p-6 rounded-xl shadow-xl w-full md:w-1/3">
                                <h3 className="text-lg font-bold border-b border-(--accent) pb-2 mb-4 text-(--accent) flex items-center">
                                    <Bell className="w-5 h-5 mr-2" /> Notifications
                                </h3>
                                <ul className="space-y-4">
                                    {user.notifications?.map((notif, index) => (
                                        <li key={index} className="text-sm border-l-4 border-(--accent-muted) pl-3">
                                            <p className="font-semibold text-(--text-main)">{notif.title}</p>
                                            <p className="text-xs text-(--text-muted)">{notif.detail}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
