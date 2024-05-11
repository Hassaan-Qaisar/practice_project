import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const ClassList = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/classes");
        setClasses(response.data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };

    fetchClasses();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Classes</h1>
      {classes.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((classItem) => (
            <div
              key={classItem.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
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
      ) : (
        <p className="text-center" >Loading class details...</p>
      )}
    </div>
  );
};
