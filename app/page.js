import Image from 'next/image';
import Link from 'next/link';

// You can replace these with actual SVG components or icons from a library like heroicons
const UserIcon = () => (
  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const LightbulbIcon = () => (
  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.707.707M12 21v-1" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            
            <span className="text-xl font-bold text-gray-900">PM Internship Engine</span>
          </div>
          <div className="space-x-4">
            <Link href="/login" legacyBehavior>
              <a className="text-gray-600 hover:text-indigo-600 font-medium">Login</a>
            </Link>
            <Link href="/signup" legacyBehavior>
              <a className="bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-700 transition-colors">
                Sign Up
              </a>
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              <span className="block">Empowering Tomorrow's Leaders</span>
              <span className="block text-indigo-600 mt-2">Your Journey in Nation-Building Starts Here</span>
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-gray-600">
              The Prime Minister's Internship Recommendation Engine connects aspiring students with meaningful internship opportunities across various Government of India ministries.
            </p>
            <div className="mt-10 flex justify-center gap-4">
                <Link href="/signup" legacyBehavior>
                  <a className="px-8 py-3 text-lg font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 shadow-lg transform hover:scale-105 transition-transform">
                    Find an Internship
                  </a>
                </Link>
                <Link href="/login" legacyBehavior>
                  <a className="px-8 py-3 text-lg font-medium text-indigo-600 bg-white border border-gray-200 rounded-md hover:bg-gray-100 shadow-lg transform hover:scale-105 transition-transform">
                    Login
                  </a>
                </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                A Smarter Way to Find Your Calling
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Our intelligent platform simplifies the path to a rewarding government internship.
              </p>
            </div>
            <div className="grid gap-10 md:grid-cols-3">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-indigo-600 rounded-full">
                  <UserIcon />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">1. Create Your Profile</h3>
                <p className="mt-2 text-base text-gray-600">Sign up and build your profile, highlighting your skills, academic achievements, and areas of interest.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-indigo-600 rounded-full">
                  <LightbulbIcon />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">2. Get AI Recommendations</h3>
                <p className="mt-2 text-base text-gray-600">Our AI-powered engine matches your profile with the most suitable internship openings in government departments.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-indigo-600 rounded-full">
                  <CheckIcon />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">3. Apply and Serve</h3>
                <p className="mt-2 text-base text-gray-600">Apply for recommended internships with a single click and take the first step towards contributing to India's future.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Sections */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            {/* For Students */}
            <div>
              <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">For Students</h2>
              <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900">Unlock Your Potential</p>
              <p className="mt-4 text-lg text-gray-600">Gain invaluable experience, develop new skills, and make a real impact on the nation's progress.</p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✔</span><span>Access to exclusive internships in diverse government sectors.</span></li>
                <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✔</span><span>AI-driven matching to find roles that fit your skills and aspirations.</span></li>
                <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✔</span><span>A certificate of completion from the Government of India.</span></li>
              </ul>
            </div>
            {/* For Ministries */}
            <div>
              <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">For Ministries</h2>
              <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900">Discover Bright Minds</p>
              <p className="mt-4 text-lg text-gray-600">Streamline your intern recruitment process and find motivated, skilled students ready to contribute to your projects.</p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✔</span><span>Tap into a pre-vetted pool of talented students from across India.</span></li>
                <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✔</span><span>Utilize smart filters to find candidates with specific skill sets.</span></li>
                <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✔</span><span>Efficiently manage applications and communication through one portal.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Trusted by Students and Ministries</h2>
            <p className="mt-4 text-lg text-gray-500">Hear what our users have to say about their experience.</p>
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <blockquote className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-700 italic">"This platform connected me with an internship at the Ministry of Finance that perfectly matched my skills. It was a life-changing experience!"</p>
                <footer className="mt-4 font-semibold text-gray-800">- Anjali Sharma, Economics Student</footer>
              </blockquote>
              <blockquote className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-700 italic">"We found some of our most dedicated and innovative interns through this engine. The process was seamless and incredibly efficient."</p>
                <footer className="mt-4 font-semibold text-gray-800">- Director, Ministry of External Affairs</footer>
              </blockquote>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="bg-white">
          <div className="container mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              <span className="block">Ready to Make a Difference?</span>
              <span className="block text-indigo-600 mt-2">Join the Platform Today.</span>
            </h2>
            <div className="mt-8">
              <Link href="/signup" legacyBehavior>
                <a className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 shadow-xl">
                  Sign Up Now
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto py-10 px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              
              <div>
                <p className="font-bold text-lg">PM Internship Recommendation Engine</p>
                <p className="text-gray-400">An Initiative by the Government of India</p>
              </div>
            </div>
            <div className="text-gray-400">
              <p>&copy; {new Date().getFullYear()} Government of India. All rights reserved.</p>
              <div className="mt-2 space-x-6">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
                <a href="#" className="hover:text-white">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}