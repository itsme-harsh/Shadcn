// src/components/Layout.js
import React from 'react';
import Navbar from '../components/navbar'; // Import your Navbar component

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto p-4">
                {children}
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
