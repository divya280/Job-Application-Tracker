import React from "react";

const JobCard = ({ job, onEdit, onDelete }) => {
  return (
    <div className="bg-black text-white rounded-lg shadow-md p-6 flex flex-col md:flex-row justify-between items-start md:items-center mb-4 transition-all hover:scale-[1.01] border border-gray-700">
      {/* Left Section */}
      <div className="flex flex-col space-y-2">
        <h2 className="text-xl font-bold">{job.companyName}</h2>
        <p className="text-gray-300">{job.jobTitle}</p>
        <p className="text-gray-400 text-sm">
          Applied: {new Date(job.applicationDate).toLocaleDateString()}
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-end space-y-3 mt-4 md:mt-0">
        <span
          className={`px-3 py-1 rounded-md text-sm font-medium ${
            job.status === "Applied"
              ? "bg-blue-600"
              : job.status === "Interview"
              ? "bg-yellow-500"
              : job.status === "Offer"
              ? "bg-green-600"
              : "bg-red-600"
          }`}
        >
          {job.status}
        </span>

        <div className="flex space-x-3">
          <button
            onClick={() => onEdit(job)}
            className="bg-black border border-gray-400 text-white px-4 py-1 rounded-md hover:bg-gray-800 transition"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(job._id)}
            className="bg-transparent border border-red-500 text-red-500 px-4 py-1 rounded-md hover:bg-red-600 hover:text-white transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
