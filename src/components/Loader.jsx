import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="smooth-spin rounded-full h-16 w-16 border-4 border-gray-600 border-t-transparent"></div>
    </div>
  );
};

export default Loader;
