import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/students");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Students</h1>
      {students.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {students.map((studentItem) => (
            <div
              key={studentItem.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
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
      ) : (
        <p className="text-center">Loading students details...</p>
      )}
    </div>
  );
};
