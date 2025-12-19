import { Mail, Clock, MapPin, User, Briefcase, Bell, Zap, TrendingUp, ChevronDown } from 'lucide-react';

import ThemeToggle from './Themetoggle';


const Navbar = () => {

    const navItems = [
        { name: "Features", href: '/candidatedash', icon: Briefcase },
        { name: "Job Matches", href: '/jobs', icon: Zap },
        { name: "Skills Analysis", href: '/profile', icon: TrendingUp },
        { name: "Contact Us", href: '/contact', icon: Mail },
    ];

    return (
        <div className="p-6 bg-[image:var(--bg-nav)] border-b border-white/10 backdrop-blur-sm sticky top-0 z-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Logo/Name */}
                <span className="text-2xl font-bold tracking-wider bg-gradient-to-r from-pink-400 to-indigo-500 bg-clip-text text-transparent">
                    OrbitSphere
                </span>

                {/* Navigation Links */}
                <nav className="hidden sm:flex space-x-6">
                    {navItems.map((item) => (
                        <a key={item.name} href={item.href} className="flex items-center text-sm text-[var(--accent)] font-medium hover:text-purple-400 transition-colors">
                            <item.icon className="w-4 h-4 mr-1" />
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Sign In / Sign Up Buttons (similar to Bulk Apply) */}

                <div className='flex gap-4'>

                <div className="group relative isolate flex w-60 h-11 items-center rounded-full overflow-hidden bg-[var(--lsbg)] shadow-lg border border-white/10">
                    
                    <svg
                        className="absolute left-0 top-0 h-full w-[55%] text-[var(--lssc)] -z-10 transition-all duration-500 ease-in-out group-hover:w-[45%] has-[:first-child:hover]:w-[75%]"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        fill="currentColor"
                    >
                        <path d="M 0,0 H 80 C 100,25 70,75 90,100 H 0 Z" />
                    </svg>

                    <a href="/login"
                        className="flex-1 text-center font-bold text-white text-xs uppercase tracking-widest z-10 transition-all hover:scale-110">
                        Login
                    </a>


                    <a href="/register"
                        className="flex-1 text-center font-bold text-white text-xs uppercase tracking-widest z-10 transition-all hover:scale-110">
                        Sign Up
                    </a>
                </div>
                <ThemeToggle/>
                </div>

            </div>

        </div>
    )
}

export default Navbar
