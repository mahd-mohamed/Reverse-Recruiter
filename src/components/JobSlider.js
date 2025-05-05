import React, { useState, useEffect } from 'react';
import '../styles/JobSlider.css';

const mockJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Cairo, Egypt",
    match: 92,
    description: "Build modern web interfaces with React.",
    salary: "$2000/month"
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Amazon",
    location: "Berlin, Germany",
    match: 88,
    description: "Work with Node.js and cloud services.",
    salary: "$2500/month"
  },
  {
    id: 3,
    title: "AI Research Intern",
    company: "OpenAI",
    location: "Remote",
    match: 95,
    description: "Assist in LLM research & implementation.",
    salary: "$3000/month"
  }
];

const JobSlider = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // بدل mockJobs دي بـ API call حقيقي بعدين
    setJobs(mockJobs);
  }, []);

  return (
    <div className="job-slider">
      <h2>Recommended Jobs</h2>
      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p className="company">{job.company} - {job.location}</p>
            <p className="desc">{job.description}</p>
            <p className="match">Match: {job.match}%</p>
            <p className="salary">{job.salary}</p>
            <button>Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSlider;
