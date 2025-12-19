import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const AI_MESSAGES = [
    "Analyzing skill proficiencies...",
    "Cross-referencing job requirements...",
    "Calculating match percentages...",
    "Suggesting skill improvements...",
    "Filtering low-relevance postings..."
];


export default function Landing() {
    const [currentMessage, setCurrentMessage] = useState(AI_MESSAGES[0]);

    // New useEffect to handle the message rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessage(prevIndex => {
                const nextIndex = (AI_MESSAGES.indexOf(prevIndex) + 1) % AI_MESSAGES.length;
                return AI_MESSAGES[nextIndex];
            });
        }, 2500); // Change message every 2.5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        // 1. Full screen container with a deep, professional gradient (similar to Bulk Apply background).
        <div className="min-h-screen w-screen relative overflow-hidden bg-[image:var(--bg-gr)] text-white">

            <Navbar/>

            {/* **Hero Section Content (Split Layout)** */}
            <main className="max-w-7xl mx-auto py-20 px-6 md:grid md:grid-cols-2 md:gap-16 items-center">

                {/* Left Side: Text and CTA (Main Focus) */}
                <div className="md:col-span-1 space-y-8 animate-slideInLeft">

                    {/* Primary Title */}
                    <h1 className="text-6xl font-extrabold leading-tight tracking-tighter">
                        <span className="block text-(--text-main)">Find Your Ideal Job</span>
                        <span className="block bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                            With AI Precision.
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl text-(--text-muted) max-w-lg">
                        AI-powered platform that analyzes your resume and matches you
                        with the best job opportunities across multiple boards.
                    </p>

                    {/* Call-to-Action Buttons */}
                    <div className="flex gap-4">
                        <a
                            href="/register"
                            className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500
                                text-white rounded-xl shadow-2xl shadow-purple-900/50 transition-transform hover:scale-[1.02]"
                        >
                            Get Started
                        </a>
                        <a
                            href="/login"
                            className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-600 border-2 border-gray-600 text-gray-300 rounded-xl hover:border-gray-400 transition flex items-center gap-2"
                        >

                            Login
                        </a>
                    </div>

                </div>

                {/* Right Side: Image/Illustration (Visual Focal Point) */}
                <div className="md:col-span-1 mt-12 md:mt-0 flex justify-center animate-fadeIn">
                    {/* Placeholder for the AI/Job Search Visualization (like the one from Bulk Apply or Hireme) */}
                    <div className="w-full max-w-lg">
                        {/* You would replace this text with your actual illustration or an image tag */}

                        <div className="w-full max-w-lg">
                            {/* Outer container for the mockup - Dark, rounded, and uses a slight glow effect */}
                            <div className="p-8 bg-gray-800 rounded-3xl border border-blue-500/30 shadow-2xl shadow-blue-900/70 h-80 relative overflow-hidden">

                                {/* Step 1: Input (Top-left) */}
                                <div className="flex flex-col absolute top-4 left-4 p-2 animate-scan-tl">
                                <div className="absolute top-4 left-4 p-2 bg-purple-600 rounded-full shadow-lg ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM5.4 6a1 1 0 011-1h6.2a1 1 0 011 1v.76A7.001 7.001 0 0010 20a7.001 7.001 0 00-6.6-13.24V6z" />
                                    </svg>
                                </div>
                                <p className="absolute top-14 left-4 text-sm text-gray-300 animate-scan">Resume Uploaded</p>
                                </div>

                                {/* Step 3: Output (Bottom-right) */}
                                <div className=" flex flex-col-reverse absolute bottom-4 right-4 p-2 animate-scan-br">

                                <div className="absolute bottom-4 right-4 p-2 bg-green-500 rounded-full shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="absolute bottom-14 right-4 text-sm text-gray-300 text-right">35 Matches Found</p>
                                </div>

                                {/* Step 2: Processing (Center with Text Animation) */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">

                                    {/* The main AI Processing visual (a rotating sphere/spinner) */}
                                    <div className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>

                                    {/* The dynamic text field (The core idea from your suggestion!) */}
                                    <div className="text-center">
                                        <p className="text-xl font-semibold text-cyan-400">
                                            AI Core Analyzing Skills...
                                        </p>
                                        <p className="text-sm text-gray-500 mt-1 animate-pulse">
                                            * {currentMessage}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            {/* Optional: Add a subtle animated background glow or sphere for premium feel */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[150px] pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>


            <div className="overflow-x-hidden text-(--text-main)">

                {/* HOW IT WORKS */}
                <section className="py-24 px-8 max-w-[80vw] mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        How OrbitSphere Works
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                title: "Resume Understanding",
                                desc: "Your resume is processed using semantic similarity models to understand skills beyond keywords."
                            },
                            {
                                title: "AI Job Matching",
                                desc: "Predictive models match your profile with relevant jobs dynamically."
                            },
                            {
                                title: "Adaptive Suggestions",
                                desc: "Recommendations evolve based on user activity and interactions."
                            }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
                            >
                                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                <p className="text-(--text-muted) text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FEATURES (NON-REPETITIVE) */}
                <section className="py-20 px-4 overflow-x-hidden  bg-black/5">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        What We Deliver
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        {[
                            "Personalized job search experience based on profile analysis",
                            "Candidate dashboard to track applications and recommendations",
                            "Secure authentication and protected user data",
                            "AI-driven system designed for scalability and future expansion"
                        ].map((text, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-4 bg-white/10 border border-white/10 rounded-xl p-6"
                            >
                                <div className="w-3 h-3 mt-2 rounded-full bg-cyan-400"></div>
                                <p className="text-(--text-muted)">{text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FUTURE READY */}
                <section className="py-20 px-4 overflow-x-hidden text-center">
                    <h2 className="text-3xl font-bold mb-4">Built for the Future</h2>
                    <p className="text-(--text-muted) max-w-3xl mx-auto">
                        OrbitSphere is architected to support recruiter workflows,
                        interview integrations, and global-scale recruitment in future phases.
                    </p>
                </section>
            </div>
        </div>
    );
}