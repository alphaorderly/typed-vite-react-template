import { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount((prevCount) => prevCount + 1);
    const decrement = () => setCount((prevCount) => prevCount - 1);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center space-y-4 bg-gray-100 p-4 text-center">
            <h1 className="mb-4 text-4xl font-bold text-blue-600">
                Welcome to My App
            </h1>
            <p className="text-lg text-gray-700">
                This is a simple React application.
            </p>

            <div className="flex items-center space-x-4 rounded-lg bg-white p-4 shadow-md">
                <button
                    onClick={decrement}
                    className="focus:ring-opacity-50 rounded-md bg-red-500 px-4 py-2 font-semibold text-white transition duration-150 ease-in-out hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:outline-none disabled:opacity-50"
                    disabled={count <= 0}
                >
                    -
                </button>
                <span className="w-12 text-center font-mono text-2xl font-bold text-gray-800">
                    {count}
                </span>
                <button
                    onClick={increment}
                    className="focus:ring-opacity-50 rounded-md bg-green-500 px-4 py-2 font-semibold text-white transition duration-150 ease-in-out hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:outline-none"
                >
                    +
                </button>
            </div>

            <button className="focus:ring-opacity-50 rounded-md bg-blue-500 px-6 py-2 font-semibold text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                Click Me
            </button>
        </div>
    );
};

export default App;
