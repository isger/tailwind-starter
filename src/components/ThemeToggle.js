import React, { useState } from 'react';

export const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className='flex flex-col justify-center'>
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="bg-gray-800 text-white rounded text-md mx-1 w-32 h-12">
                {darkMode ? <h1>Dark Mode</h1> : <h1>Light Mode</h1>}
            </button>
        </div>
    );
};