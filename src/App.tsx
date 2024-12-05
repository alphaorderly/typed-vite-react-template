const App = () => {
    const libraries = [
        'Tailwind CSS',
        'ESLint',
        'Prettier',
        'Commitlint',
        'Husky',
        'Vitest',
        'Testing Library',
        'LintStaged',
        'Ky',
        'React Router',
        'Jotai',
        'Dayjs',
        'TanStack Query',
        'TanStack Form',
        'Zod',
        'TanStack Virtual',
        'Tailwind Merge',
        'Clsx',
        'Lucide Icons',
        'MSW',
    ];

    return (
        <div className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
            <div className="flex h-4/5 w-full max-w-2xl flex-col rounded-2xl bg-white p-8 shadow-xl">
                {/* Header Section */}
                <div className="relative mb-12">
                    <div className="absolute -left-4 -top-4 size-32 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 blur-xl"></div>
                    <h1 className="relative mb-3 text-center font-square text-4xl font-extrabold text-gray-900">
                        TypeScript React Template
                    </h1>
                    <p className="relative text-center text-lg text-gray-600">
                        A modern starting point for your React projects
                    </p>
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
                        {libraries.map((library, index) => (
                            <div
                                key={index}
                                className="group relative rounded-xl bg-gray-50 p-4 transition-all hover:bg-gray-100 hover:shadow-md"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex size-8 items-center justify-center rounded-lg bg-white font-medium text-gray-700 shadow-sm">
                                        {index + 1}
                                    </div>
                                    <span className="font-medium text-gray-700">
                                        {library}
                                    </span>
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
