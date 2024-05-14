import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";

export const ClassDetails = () => {
  const { id } = useParams();
  const [classDetails, setClassDetails] = useState(null);

  // Fetches class details on component mount or ID change
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
    <div className="min-h-screen mx-auto px-4 py-8 bg-gradient-to-br from-purple-200 to-blue-300">
      {classDetails ? (
        <div className="bg-white bg-opacity-20 shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out hover:bg-opacity-50">
          <div className="px-6 py-4">
            <h2 className="text-xl font-bold mb-4 font-roboto">
              {classDetails.name}
            </h2>
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
        <Loader />
        // <p className="text-center">Loading classes details...</p>
      )}
    </div>
  );
};
