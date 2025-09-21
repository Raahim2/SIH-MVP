import { Sidebar } from '../(components)/Sidebar';

const appliedInternships = [
    {
        id: 1,
        title: "Data Science Intern",
        ministry: "Ministry of Electronics & IT",
        status: "Under Review",
        appliedDate: "2 weeks ago"
    },
    {
        id: 2,
        title: "Web Development Intern (React)",
        ministry: "Ministry of External Affairs",
        status: "Applied",
        appliedDate: "3 days ago"
    },
    {
        id: 3,
        title: "Public Policy Research Intern",
        ministry: "NITI Aayog",
        status: "Application Viewed",
        appliedDate: "1 month ago"
    }
];

export default function AppliedPage() {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Under Review': return 'bg-yellow-100 text-yellow-800';
            case 'Application Viewed': return 'bg-blue-100 text-blue-800';
            case 'Applied':
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        // 1. Add a flex container that takes the full screen height
        <div className="flex h-screen">
            <Sidebar />

            {/* 2. Create a main content area that is scrollable and takes remaining space */}
            <main className="flex-1 overflow-y-auto p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900">My Applications</h1>
                    <p className="mt-2 text-gray-600">Track the status of all your internship applications here.</p>
                    
                    <div className="mt-8 space-y-4">
                        {appliedInternships.map(internship => (
                            <div key={internship.id} className="bg-white border border-gray-200 rounded-lg p-6 flex justify-between items-center">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800">{internship.title}</h2>
                                    <p className="text-gray-600">{internship.ministry}</p>
                                    <p className="text-sm text-gray-500 mt-1">Applied {internship.appliedDate}</p>
                                </div>
                                <div>
                                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(internship.status)}`}>
                                        {internship.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* 3. Place the Sidebar as a sibling to the main content */}
        </div>
    );
}