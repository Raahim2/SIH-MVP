"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (username === 'user' && password === '123') {
      // ** CHANGE HERE: Redirect to /profile **
      router.push('/profile');
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  // ... rest of the component is the same as before
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <div className="flex flex-col items-center">
          <Image 
            src="/emblem.png"
            alt="Government of India Emblem"
            width={60}
            height={60}
          />
          <h1 className="mt-4 text-2xl font-bold text-center text-gray-800">
            Login to Your Account
          </h1>
          <p className="text-gray-600">PM Internship Recommendation Engine</p>
        </div>

        {error && (
          <div className="p-3 text-sm text-red-700 bg-red-100 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label 
              htmlFor="username" 
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter 'user'"
            />
          </div>
          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter '123'"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <Link href="/signup" legacyBehavior>
            <a className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
}