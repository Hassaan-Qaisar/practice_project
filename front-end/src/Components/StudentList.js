import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Loader } from "./Loader";

export const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetches students data on component mount
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/students");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="min-h-screen mx-auto px-4 py-8 bg-gradient-to-br from-purple-200 to-blue-300">
      {isLoading ? (
        <Loader />
      ) : students.length === 0 ? (
        <p className="text-center">No students data available</p>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-6 text-center text-green-500 font-roboto">
            All Students
          </h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {students.map((studentItem) => (
              <div
                key={studentItem.id}
                className="bg-white bg-opacity-20 shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out hover:bg-opacity-50"
              >
                <div className="px-6 py-4">
                  <h2 className="text-xl font-bold mb-2">{studentItem.name}</h2>
                  <ul className="list-disc">
                    {studentItem.class.map((item) => (
                      <li key={item.id}>
                        <Link
                          to={`/classes/${item.id}`}
                          className="text-blue-500 hover:underline"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
