

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, Mail, Github, Linkedin, Chrome } from 'lucide-react';

import Navbar from "../components/Navbar";
import { apiPost } from "../api/api";

// Social Login Icons (Lucide is used for a modern, clean look)
const GoogleIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 7.328-11.303 7.328-6.572 0-11.903-5.331-11.903-11.903s5.331-11.903 11.903-11.903c3.123 0 5.91 1.194 8.077 3.03l5.656-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.34-0.138-2.65-0.389-3.917z" />
        <path fill="#FF3D00" d="M6.306 14.691L11.75 20.085l3.525-3.351A13.342 13.342 0 0 1 24 10.999c5.181 0 9.773 3.513 11.303 7.328l5.656-5.657C36.936 6.053 31.849 4 24 4 16.92 4 10.372 6.558 4.717 10.15z" />
        <path fill="#4CAF50" d="M24 44c5.264 0 9.845-1.921 13.435-5.602l-5.656-5.657C30.934 35.815 28.028 37.328 24 37.328c-6.572 0-11.903-5.331-11.903-11.903H6.467C10.12 37.073 16.687 42 24 42c5.264 0 9.845-1.921 13.435-5.602z" />
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-0.34 1.89-1.071 3.73-2.122 5.378h1.164C36.936 31.95 38.083 28.16 38.083 24c0-1.34-0.138-2.65-0.389-3.917z" />
    </svg>
);

const LinkedIn = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0077B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
)


export default function Fortry() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const nav = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        setMsg(""); // Clear previous message
        try {
            const data = await apiPost("/candidate/login", {
                email,
                password,
            });
            // const data = await res.json();
            if (data.id) {
                localStorage.setItem(
                    "candidate",
                    JSON.stringify({ id: data.id, name: data.name })
                );
                nav("/candidatedash");
            } else {
                setMsg(data.error || "Invalid email or password");
            }
        } catch (err) {
            setMsg("Network error. Please try again.");
        }
    };

    const SocialButton = ({ Icon, text, color }) => (
        <button className={`w-1/3 py-2 border-2 border-${color}-600 text-${color}-400 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors`}>
            <Icon className="w-5 h-5" />
        </button>
    );

    return (
        <>
            <Navbar />
            <div className="relative min-h-screen w-full flex items-center justify-center bg-[image:var(--bg-gr)] overflow-hidden font-sans">

                {/* UNIQUE ELEMENT 1: The Background Orbs (Orbitals) */}
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

                {/* THE MAIN CARD */}
                <div className="relative z-10 w-full max-w-md p-8 bg-white/5 backdrop-blur-2xl rounded-[2rem] border border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">

                    {/* Header Section */}
                    <div className="text-center space-y-2 mb-10">
                        <h2 className="text-3xl font-black tracking-tight text-white italic">
                            ORBIT<span className="text-pink-500">SPHERE</span>
                        </h2>
                        <p className="text-gray-400 text-sm font-medium">
                            Ready to find your next trajectory?
                        </p>
                    </div>

                    <form onSubmit={submit} className="space-y-5">
                        <div className="group relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-pink-400 transition-colors" />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full p-4 pl-12 rounded-2xl bg-black/40 border border-white/5 text-white focus:outline-none focus:border-pink-500/50 focus:ring-4 focus:ring-pink-500/10 transition-all placeholder:text-gray-600"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="group relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full p-4 pl-12 rounded-2xl bg-black/40 border border-white/5 text-white focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-gray-600"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-gradient-to-r from-pink-500 to-indigo-600 text-white rounded-2xl font-bold shadow-xl hover:shadow-pink-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Footer Links */}
                    <div className="mt-8 flex flex-col items-center gap-4">
                        <div className="flex gap-6">
                            <a href="/register" className="text-sm text-gray-400 hover:text-white transition">New here? <span className="text-pink-400 font-bold">Join the Orbit</span></a>
                        </div>

                        {/* Social Circle Buttons */}
                        <div className="flex gap-4 pt-4 border-t border-white/5 w-full justify-center">
                            <button className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-red-500/20 hover:border-red-500/50 transition-all group">
                                <Chrome className="w-5 h-5 text-gray-400 group-hover:text-red-400" />
                            </button>
                            <button className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-blue-600/20 hover:border-blue-600/50 transition-all group">
                                <LinkedIn className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                            </button>
                            <button className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:border-white/50 transition-all group">
                                <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}