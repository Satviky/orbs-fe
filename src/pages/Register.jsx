// src/pages/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { apiPost } from "../api/api";


export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const nav = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        try {
            // const res = await fetch(`${API}/candidate/register`, {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({ name, email, password }),
            // });
            const data = await apiPost("/candidate/register",{
                name,
                email,
                password
            });
            if (res.ok) {
                setMsg("Registered — Redirecting...");
                setTimeout(() => nav("/login"), 900);
            } else {
                setMsg(data.error || JSON.stringify(data));
            }
        } catch (err) {
            setMsg("Network error");
        }
    };

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-[image:var(--bg-gr)] p-6">
            <form
                onSubmit={submit}
                className="w-full max-w-md bg-[#1a1a1a]/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/10 animate-fadeIn"
            >
                <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                    Create Your Account
                </h2>

                <label className="block text-sm text-gray-300 mb-1">Name</label>
                <input
                    className="w-full p-3 rounded bg-[#111] border border-gray-700 text-white mb-4 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label className="block text-sm text-gray-300 mb-1">Email</label>
                <input
                    className="w-full p-3 rounded bg-[#111] border border-gray-700 text-white mb-4 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label className="block text-sm text-gray-300 mb-1">Password</label>
                <input
                    type="password"
                    className="w-full p-3 rounded bg-[#111] border border-gray-700 text-white mb-6 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button className="w-full py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all">
                    Register
                </button>

                {msg && (
                    <p className="mt-4 text-sm text-pink-300 text-center font-medium tracking-wide">
                        {msg}
                    </p>
                )}

                <p className="mt-6 text-center text-gray-400 text-sm">
                    Already have an account?{" "}
                    <a
                        href="/login"
                        className="text-purple-400 hover:text-purple-300 underline"
                    >
                        Login
                    </a>
                </p>
            </form>
        </div>
    );
}
