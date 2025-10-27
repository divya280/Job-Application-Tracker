import React, { useState, useEffect } from "react";

const JobForm = ({ job, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    jobTitle: "",
    applicationDate: "",
    status: "Applied",
  });

  useEffect(() => {
    if (job) setFormData(job);
  }, [job]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md text-black">
        <h2 className="text-2xl font-bold mb-4">{job ? "Edit Job" : "Add Job"}</h2>
        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" className="w-full p-2 border rounded mb-2" required />
        <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Job Title" className="w-full p-2 border rounded mb-2" required />
        <input type="date" name="applicationDate" value={formData.applicationDate} onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
        <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded mb-4">
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
        <div className="flex justify-end space-x-2">
          <button type="button" onClick={onCancel} className="px-4 py-2 border rounded">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Save</button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
