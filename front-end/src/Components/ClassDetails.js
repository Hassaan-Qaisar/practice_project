import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const ClassDetails = () => {
  const { id } = useParams();
  const [classDetails, setClassDetails] = useState(null);

  useEffect(() => {
    const fetchClass = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/classes/${id}`
        );
        setClassDetails(response.data);
      } catch (error) {
        console.error("Error fetching class details:", error);
      }
    };

    fetchClass();
  }, [id]);

  console.log(classDetails)

  return (
    <div className="container mx-auto px-4 py-8">
      {classDetails ? (
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-4">{classDetails.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700">Class Room:</p>
              <p className="font-bold">{classDetails.classroom}</p>
            </div>
            <div>
              <p className="text-gray-700">Teacher:</p>
              <p className="font-bold">{classDetails.teacher}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-700">Description:</p>
              <p className="text-sm">{classDetails.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">Loading class details...</p>
      )}
    </div>
  );
};
