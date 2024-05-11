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
    <div>
      <h1 className="text-2xl font-bold mb-4">Classes</h1>
      {classes.length > 0 && (
        <div className="grid grid-cols-2 gap-4">
          {classes.map((classItem) => (
            <div key={classItem.id} className="border p-4">
              <h2 className="text-lg font-bold mb-2">{classItem.name}</h2>
              <ul>
                {classItem.studentIDs.map((student) => (
                  <li key={student.id}>
                    <Link to={`/students/${student}`}>{student}</Link>
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
