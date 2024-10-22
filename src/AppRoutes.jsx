// src/routes.js
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Import your Home component
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Loader from './components/Loader';

const AppRoutes = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay (for demonstration purposes)
        const loadData = async () => {
            // You can fetch data or perform any setup here
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a 1-second loading time
            setLoading(false);
        };

        loadData();
    }, []);

    if (loading) {
        return <Loader />; // Show loader while loading
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
