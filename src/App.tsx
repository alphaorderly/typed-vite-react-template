import {
    Box,
    Paintbrush,
    AlertCircle,
    Dog,
    TestTube,
    TestTube2,
    Send,
    Router,
    Atom,
    Calendar,
    Database,
    FormInput,
    Shield,
    ScrollText,
    Combine,
    Component,
    Boxes,
    BoxIcon,
    GitCommit,
} from 'lucide-react';

const App = () => {
    const libraries = [
        { name: 'Tailwind CSS', icon: <Paintbrush size={18} /> },
        { name: 'ESLint', icon: <AlertCircle size={18} /> },
        { name: 'Prettier', icon: <Component size={18} /> },
        { name: 'Commitlint', icon: <GitCommit size={18} /> },
        { name: 'Husky', icon: <Dog size={18} /> },
        { name: 'Vitest', icon: <TestTube size={18} /> },
        { name: 'Testing Library', icon: <TestTube2 size={18} /> },
        { name: 'LintStaged', icon: <Shield size={18} /> },
        { name: 'Ky', icon: <Send size={18} /> },
        { name: 'React Router', icon: <Router size={18} /> },
        { name: 'Jotai', icon: <Atom size={18} /> },
        { name: 'Dayjs', icon: <Calendar size={18} /> },
        { name: 'TanStack Query', icon: <Database size={18} /> },
        { name: 'TanStack Form', icon: <FormInput size={18} /> },
        { name: 'Zod', icon: <Shield size={18} /> },
        { name: 'TanStack Virtual', icon: <ScrollText size={18} /> },
        { name: 'Tailwind Merge', icon: <Combine size={18} /> },
        { name: 'Clsx', icon: <Boxes size={18} /> },
        { name: 'Lucide Icons', icon: <BoxIcon size={18} /> },
        { name: 'MSW', icon: <TestTube size={18} /> },
    ];

    return (
        <div className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
            <div className="flex h-4/5 w-full max-w-2xl flex-col rounded-2xl bg-white p-8 shadow-xl">
                {/* Header Section */}
                <div className="relative mb-12">
                    <div className="absolute -left-4 -top-4 size-32 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 blur-xl"></div>
                    <div className="relative flex flex-col items-center">
                        <Box className="mb-4 size-12 text-blue-600" />
                        <h1 className="mb-3 text-center font-square text-4xl font-extrabold text-gray-900">
                            Typed Vite React Template
                        </h1>
                        <p className="text-center text-lg text-gray-600">
                            A modern starting point for your React projects
                        </p>
                    </div>
                </div>

                {/* Libraries Section */}
                <div className="flex-1 space-y-3 overflow-scroll">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-800">
                            Included Libraries
                        </h2>
                        <span className="rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
                            {libraries.length} tools
                        </span>
                    </div>

                    <div className="grid gap-3">
                        {libraries.map((lib, index) => (
                            <div
                                key={index}
                                className="group relative rounded-xl bg-gray-50 p-4 transition-all hover:bg-gray-100 hover:shadow-md"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex size-8 items-center justify-center rounded-lg bg-white font-medium text-gray-700 shadow-sm">
                                        {lib.icon}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium text-gray-700">
                                            {lib.name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 text-center text-sm text-gray-500">
                    Customize this template by adding your preferred libraries
                </div>
            </div>
        </div>
    );
};

export default App;
