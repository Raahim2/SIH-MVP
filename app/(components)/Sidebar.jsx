"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// --- ICONS (No changes here) ---
const ProfileIcon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);

const EngineIcon = ({ className }) => (
 <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
 <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.573L16.5 21.75l-.398-1.177a3.375 3.375 0 00-2.456-2.456L12.75 18l1.177-.398a3.375 3.375 0 002.456-2.456L16.5 14.25l.398 1.177a3.375 3.375 0 002.456 2.456L20.25 18l-1.177.398a3.375 3.375 0 00-2.456 2.456z" />
 </svg>
);

const DiscoverIcon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
);

const AppliedIcon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.07a2.25 2.25 0 01-2.25 2.25H5.996a2.25 2.25 0 01-2.25-2.25v-4.07a2.25 2.25 0 01.99-1.93L5.5 10.5M20.25 14.15V10.5m0 3.65v-3.65m0 0l-2.25-2.25-2.25 2.25m-6.75 0l2.25-2.25 2.25 2.25M12 10.5v3.65" />
    </svg>
);

const LogoutIcon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
    </svg>
);


// --- NAVIGATION ITEMS (No changes here) ---
const navItems = [
    { name: 'Profile', href: '/profile', icon: ProfileIcon, notification: false },
    { name: 'AI Engine', href: '/recommend', icon: EngineIcon, notification: true },
    { name: 'Discover', href: '/discover', icon: DiscoverIcon, notification: false },
    { name: 'Applied', href: '/applied', icon: AppliedIcon, notification: false },
];


export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-24 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col items-center py-6">
            <nav className="flex-1 flex flex-col items-center space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname.startsWith(item.href);
                    return (
                        // **MODIFICATION HERE: Removed legacyBehavior and <a> tag**
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`relative flex flex-col items-center justify-center w-20 h-20 rounded-lg transition-colors duration-200 ${
                                isActive
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-500 hover:bg-gray-100'
                            }`}
                        >
                            <item.icon className={`w-7 h-7 mb-1 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                            <span className="text-xs font-medium">{item.name}</span>
                            {item.notification && (
                                <span className="absolute top-3 right-3 block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            <div>
                {/* **MODIFICATION HERE for the Logout button** */}
                <Link
                    href="/"
                    title="Logout"
                    className="flex flex-col items-center justify-center w-20 h-20 text-gray-500 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors duration-200"
                >
                    <LogoutIcon className="w-7 h-7 mb-1 text-gray-400 group-hover:text-red-500" />
                    <span className="text-xs font-medium">Logout</span>
                </Link>
            </div>
        </aside>
    );
}