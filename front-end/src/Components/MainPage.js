import React from "react";
import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-200 to-blue-300">
      <h1 className="text-4xl font-bold mb-8 font-roboto">
        School Application
      </h1>
      <div className="flex space-x-6">
        <Link to="/allClasses">
          <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700">
            All Classes
          </button>
        </Link>
        <Link to="/allStudents">
          <button className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-700">
            All Students
          </button>
        </Link>
      </div>
    </div>
  );
};
