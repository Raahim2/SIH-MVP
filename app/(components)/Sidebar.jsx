"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// --- ICONS ---
const ProfileIcon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
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

// --- NEW LOGOUT ICON ---
const LogoutIcon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
    </svg>
);


// --- NAVIGATION ITEMS ---
const navItems = [
  { name: 'Profile', href: '/profile', icon: ProfileIcon, notification: true },
  { name: 'Discover', href: '/discover', icon: DiscoverIcon, notification: false },
  { name: 'Applied', href: '/applied', icon: AppliedIcon, notification: false },
];


export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-24 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col items-center py-6">
      {/* Main navigation takes up available space */}
      <nav className="flex-1 flex flex-col items-center space-y-2">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link key={item.name} href={item.href} legacyBehavior>
              <a
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
              </a>
            </Link>
          );
        })}
      </nav>

      {/* --- NEW LOGOUT SECTION --- */}
      {/* This div is pushed to the bottom because the <nav> element above it has `flex-1` */}
      <div>
        <Link href="/" legacyBehavior>
          <a
            className="flex flex-col items-center justify-center w-20 h-20 text-gray-500 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors duration-200"
            title="Logout"
          >
            <LogoutIcon className="w-7 h-7 mb-1 text-gray-400 group-hover:text-red-500" />
            <span className="text-xs font-medium">Logout</span>
          </a>
        </Link>
      </div>
    </aside>
  );
}