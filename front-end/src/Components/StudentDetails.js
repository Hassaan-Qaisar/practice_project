import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";

export const StudentDetails = () => {
  const { id } = useParams();
  const [studentDetails, setStudentDetails] = useState(null);

  // Fetches student details on component mount or ID change
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
    <div className="min-h-screen mx-auto px-4 py-8 bg-gradient-to-br from-purple-200 to-blue-300">
      {studentDetails ? (
        <div className="bg-white bg-opacity-20 shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out hover:bg-opacity-50">
          <div className="px-6 py-4">
            <h2 className="text-xl font-bold mb-4 font-roboto">
              {studentDetails.name}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Roll Number:</p>
                <p>{studentDetails.rollnumber}</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p>{studentDetails.email}</p>
              </div>
              <div>
                <p className="font-semibold">Address:</p>
                <p>{studentDetails.address}</p>
              </div>
              <div>
                <p className="font-semibold">Age:</p>
                <p>{studentDetails.age}</p>
              </div>
              <div>
                <p className="font-semibold">Gender:</p>
                <p>{studentDetails.gender}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
        // <p className="text-center">Loading student details...</p>
      )}
    </div>
  );
};
