import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const StudentDetails = () => {
  const { id } = useParams();
  const [studentDetails, setStudentDetails] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/students/${id}`
        );
        setStudentDetails(response.data);
      } catch (error) {
        console.error("Error fetching class details:", error);
      }
    };

    fetchStudent();
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-8">
      {studentDetails ? (
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-4">{studentDetails.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700">Roll Number:</p>
              <p className="font-bold">{studentDetails.rollnumber}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-700">Email:</p>
              <p className="text-sm break-words">{studentDetails.email}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-700">Address:</p>
              <p className="text-sm">{studentDetails.address}</p>
            </div>
            <div>
              <p className="text-gray-700">Age:</p>
              <p className="font-bold">{studentDetails.age}</p>
            </div>
            <div>
              <p className="text-gray-700">Gender:</p>
              <p className="font-bold">{studentDetails.gender}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">Loading student details...</p>
      )}
    </div>
  );
};
