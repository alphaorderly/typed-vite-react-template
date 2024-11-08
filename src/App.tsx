const App = () => {
    return (
        <div className="m-4 rounded-lg border bg-gray-200 p-4 text-center text-xl font-bold shadow-md">
            This is Typescript React Template
            <div>includes...</div>
            <ul className="list-inside list-disc text-left">
                <li className="my-1">Tailwind CSS</li>
                <li className="my-1">ESLint</li>
                <li className="my-1">Prettier</li>
                <li className="my-1">Commitlint</li>
                <li className="my-1">Husky</li>
                <li className="my-1">Vitest</li>
                <li className="my-1">LintStaged</li>
            </ul>
            <div>Also set root alias</div>
        </div>
    );
};

export default App;
