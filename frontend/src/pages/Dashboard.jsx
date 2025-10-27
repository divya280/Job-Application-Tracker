import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import JobForm from "../components/JobForm";
import JobDetailsModal from "../components/JobDetailsModal";
import { getJobs, createJob, updateJob, deleteJob } from "../api/jobApi";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  // 🔄 Fetch jobs from backend when component mounts
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getJobs(); // getJobs sends the token automatically
        setJobs(data);
      } catch (err) {
        console.error("Failed to fetch jobs:", err.response?.data || err.message);
      }
    };

    fetchJobs();
  }, []);

  const handleEdit = (job) => {
    setEditingJob(job);
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteJob(id);
      setJobs((prev) => prev.filter((job) => job._id !== id));
    } catch (err) {
      console.error("Failed to delete job:", err.response?.data || err.message);
    }
  };

  const handleSave = async (jobData) => {
    try {
      if (editingJob) {
        const updatedJob = await updateJob(editingJob._id, jobData);
        setJobs((prev) =>
          prev.map((job) => (job._id === editingJob._id ? updatedJob : job))
        );
      } else {
        const newJob = await createJob(jobData);
        setJobs((prev) => [...prev, newJob]);
      }
    } catch (err) {
      console.error("Failed to save job:", err.response?.data || err.message);
    } finally {
      setIsFormOpen(false);
      setEditingJob(null);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <button
        className="bg-blue-500 px-4 py-2 rounded mb-4"
        onClick={() => setIsFormOpen(true)}
      >
        Add Job Application
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard
            key={job._id}
            job={job}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {isFormOpen && (
        <JobForm
          job={editingJob}
          onSave={handleSave}
          onCancel={() => {
            setIsFormOpen(false);
            setEditingJob(null);
          }}
        />
      )}

      {selectedJob && (
        <JobDetailsModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
};

export default Dashboard;
