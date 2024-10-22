// src/components/ui/Button.js
import React from 'react';

export const Button = ({ onClick, children, className }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-md transition-colors duration-300 
            text-white bg-blue-600 hover:bg-blue-700 
            dark:bg-blue-500 dark:hover:bg-blue-600 
            ${className}`}
        >
            {children}
        </button>
    );
};
