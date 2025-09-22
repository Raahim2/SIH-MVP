"use client"; // This is a client component

import Link from 'next/link';
import Image from 'next/image';

export default function SignupPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here.
    // For this dummy page, we can just log a message.
    alert("This is a dummy sign-up form. No action will be taken.");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-12">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <div className="flex flex-col items-center">
          <img 
            src="https://www.logopeople.in/wp-content/uploads/2013/01/government-of-india.jpg" // Make sure emblem.png is in your public folder
            alt="Government of India Emblem"
            width={60}
            height={60}
          />
          <h1 className="mt-4 text-2xl font-bold text-center text-gray-800">
            Create a New Account
          </h1>
          <p className="text-gray-600">PM Internship Recommendation Engine</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label 
              htmlFor="fullName" 
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              required
              className="mt-1 block w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              className="mt-1 block w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
              required
              className="mt-1 block w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Account
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{' '}
        <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
          Login
        </Link>
        </p>
      </div>
    </div>
  );
}