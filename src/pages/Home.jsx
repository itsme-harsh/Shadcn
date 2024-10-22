// src/pages/Home.js
import React from 'react';
import Layout from './Layout'; // Import Layout


const Home = () => {
    
    return (
        <Layout>
            <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8 p-4">
                {/* Text Section */}
                <div className="text-section lg:w-1/2">
                    <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                        Welcome to Our Homepage
                    </h1>
                    <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                        Here you can find the latest updates and news. Stay tuned for more exciting content
                        and updates from our team!
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <button className="bg-gradient-to-r 
                        from-black to-black 
                        hover:from-gray-800 
                        hover:to-black 
                        dark:from-gray-400
                        dark:to-gray-800
                        dark:hover:from-gray-800
                        dark:hover:to-gray-400 
                        text-white py-2 px-6 mt-4 rounded-lg">
                            Read more
                        </button>

                    </div>
                </div>
                {/* Text Section */}
                {/* Image Section */}
                <div className="image-section mb-8 mt-4 lg:w-1/3 lg:mb-0">
                    <img src={`/home.png`} alt="Sample" className="w-full h-auto rounded-lg" />
                </div>
                {/* Image Section */}
            </div>

        </Layout>
    );
};

export default Home;
