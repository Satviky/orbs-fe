

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, Mail, Github, Linkedin } from 'lucide-react';

// import Navbar from "../components/Navbar";
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

const LinkedIn = (props) =>(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0077B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
)


export default function Login() {
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
        {/* <Navbar/> */}
        <div className="h-screen w-screen flex items-center justify-center bg-[image:var(--bg-gr)] p-6 overflow-hidden">
            <div className="w-full max-w-md flex bg-[#1a1a1a]/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 animate-fadeIn min-h-[450px]">
                
                <div className="w-full p-8 lg:p-12 space-y-6 text-(--text-main) bg-[image:var(--lcard)] rounded-2xl">
                    <h2 className="text-4xl font-bold mb-6 text-center">
                        Login
                    </h2>

                    <form onSubmit={submit} className="space-y-4">
                        {/* Email Input (Replaced Username for modern web login) */}
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full p-3 pl-10 rounded-xl bg-[#d1d5dc] border border-gray-500 text-(--form-text) focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-(--text-muted)"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full p-3 pl-10 rounded-xl bg-[#d1d5dc] border border-gray-500 text-(--form-text) focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-(--text-muted)"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* Forgot Password */}
                        <div className="flex justify-end text-sm">
                            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                                Forgot Password?
                            </a>
                        </div>

                        {/* Login Button (Pink/Purple Gradient) */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-[image:var(--lr-btn)] text-(--accent) rounded-xl font-semibold shadow-lg hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-[1.01]"
                        >
                            <strong>Login</strong>
                        </button>

                        {/* Error Message */}
                        {msg && (
                            <p className="text-sm text-red-400 text-center font-medium tracking-wide">
                                {msg}
                            </p>
                        )}
                    </form>

                    {/* Social Login Section */}
                    <div className="pt-4 space-y-4">
                        <div className="relative flex items-center">
                            <div className="flex-grow border-t border-gray-700"></div>
                            <span className="flex-shrink mx-4 text-gray-400 text-sm">
                                Or Login with social platforms
                            </span>
                            <div className="flex-grow border-t border-gray-700"></div>
                        </div>

                        <div className="flex gap-4 justify-center text-(--text-main)">
                            {/* Google */}
                            <SocialButton Icon={GoogleIcon} text="Google" color="red" />
                            {/* GitHub */}
                            <SocialButton Icon={Github} text="GitHub" color="white" />
                            {/* LinkedIn */}
                            <SocialButton Icon={LinkedIn} text="LinkedIn" color="blue" />
                        </div>
                    </div>
                </div>
                
            </div>

            

        </div>

        
        </>
    );
}