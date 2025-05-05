import React from 'react';
import ResumeForm from '../components/ResumeForm';
import JobSlider from '../components/JobSlider';
// import GmailSection from '../components/GmailSection';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <ResumeForm />
        <JobSlider />
        {/* <GmailSection /> */}
      </div>
    </div>
  );
};

export default Dashboard;
