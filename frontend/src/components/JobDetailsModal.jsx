import React from "react";

const JobDetailsModal = ({ job, onClose }) => {
  if (!job) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-black">
        <h2 className="text-2xl font-bold mb-2">{job.companyName}</h2>
        <p><strong>Job Title:</strong> {job.jobTitle}</p>
        <p><strong>Application Date:</strong> {new Date(job.applicationDate).toLocaleDateString()}</p>
        <p><strong>Status:</strong> {job.status}</p>
        <div className="mt-4 text-right">
          <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700">Close</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsModal;
