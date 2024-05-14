import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Loader } from "./Loader";

export const ClassList = () => {
  const [classes, setClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetches classes data on component mount
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/classes");
        setClasses(response.data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchClasses();
  }, []);

  return (
    <div className="min-h-screen mx-auto px-4 py-8 bg-gradient-to-br from-purple-200 to-blue-300">
      {isLoading ? (
        <Loader />
      ) : classes.length === 0 ? (
        <p className="text-center">No classes data available</p>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-500 font-roboto">
            All Classes
          </h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            {classes.map((classItem) => (
              <div
                key={classItem.id}
                className="bg-white bg-opacity-20 shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out hover:bg-opacity-50"
              >
                <div className="px-6 py-4">
                  <h2 className="text-xl font-bold mb-2">{classItem.name}</h2>
                  <ol className="list-decimal">
                    {classItem.students.map((student) => (
                      <li key={student.id}>
                        <Link
                          to={`/students/${student.id}`}
                          className="text-blue-500 hover:underline"
                        >
                          {student.name}
                        </Link>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
