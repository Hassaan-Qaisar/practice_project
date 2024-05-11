import React from "react";
import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">School Application</h1>
      <div className="flex space-x-4">
        <Link to="/classes">
          <button className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-700">
            All Classes
          </button>
        </Link>
        <Link to="/students">
          <button className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-700">
            All Students
          </button>
        </Link>
      </div>
    </div>

    // <div className="flex flex-col items-center justify-center h-screen">
    //   <h1 className="text-4xl mb-8">School Application</h1>
    //   <div className="flex flex-col items-center gap-4">
    //     <h2 className="text-2xl">All Classes</h2>
    //     <Link to="/classes" className="text-blue-500 underline">
    //       {" "}
    //       <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
    //         View Classes
    //       </button>{" "}
    //     </Link>
    //   </div>
    //   <div className="flex flex-col items-center gap-4 mt-8">
    //     <h2 className="text-2xl">All Students</h2>
    //     <Link to="/students" className="text-blue-500 underline">
    //       {" "}
    //       <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
    //         View Students
    //       </button>{" "}
    //     </Link>
    //   </div>
    // </div>
  );
};
