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

  return (
    <div className="container mx-auto px-4 py-8">
      {classDetails ? (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-xl font-bold mb-4">{classDetails.name}</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Class Room:</p>
                <p>{classDetails.classroom}</p>
              </div>
              <div>
                <p className="font-semibold">Teacher:</p>
                <p>{classDetails.teacher}</p>
              </div>
              <div className="col-span-2">
                <p className="font-semibold">Description:</p>
                <p>{classDetails.description}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">Loading classes details...</p>
      )}
    </div>
  );
};
