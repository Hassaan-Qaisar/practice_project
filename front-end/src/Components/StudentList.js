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
    <div>
      <h1 className="text-2xl font-bold mb-4">Students</h1>
      {students.length > 0 && (
        <div className="grid grid-cols-2 gap-4">
          {students.map((studentItem) => (
            <div key={studentItem.id} className="border p-4">
              <h2 className="text-lg font-bold mb-2">{studentItem.name}</h2>
              <ul>
                {studentItem.classIDs.map((itemClass) => (
                  <li key={itemClass.id}>
                    <Link to={`/classes/${itemClass}`}>{itemClass}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
