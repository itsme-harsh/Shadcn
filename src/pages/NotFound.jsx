// src/pages/NotFound.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button'; // Adjust import according to your button component

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black text-center p-4">
            <div>
                <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200">404</h1>
                <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <Button className="border bg-gradient-to-r from-black to-black text-white hover:from-gray-800 hover:to-black py-2 px-4 rounded mt-6" onClick={() => navigate('/')}>
                    Go to Home
                </Button>
            </div>
        </div>
    );
};

export default NotFound;
