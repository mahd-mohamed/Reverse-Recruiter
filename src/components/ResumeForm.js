import React, { useState } from 'react';
import '../styles/ResumeForm.css';

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    address: '',
    phoneNumber: '',
    disability: '',
    veteranStatus: '',
    yearsOfExperience: '',
    gender: '',
    title: '',
    age: '',
    race: '',
    educationLevel: '',
    salaryRequired: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Send formData to Python backend
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">Submit Your Resume</h2>

      <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
      <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />

      <select name="disability" onChange={handleChange} required>
        <option value="">Do you have a disability?</option>
        <option value="No">No</option>
        <option value="Yes">Yes</option>
      </select>

      <select name="veteranStatus" onChange={handleChange} required>
        <option value="">Are you a veteran?</option>
        <option value="No">No</option>
        <option value="Yes">Yes</option>
      </select>

      <input
        type="number"
        name="yearsOfExperience"
        placeholder="Years of Experience"
        min="0"
        onChange={handleChange}
        required
      />

      <select name="gender" onChange={handleChange} required>
        <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <input type="text" name="title" placeholder="Job Title" onChange={handleChange} required />

      <input type="number" name="age" placeholder="Age" min="18" onChange={handleChange} required />

      <select name="race" onChange={handleChange} required>
        <option value="">Race / Ethnicity</option>
        <option value="White">White</option>
        <option value="Black or African American">Black or African American</option>
        <option value="Asian">Asian</option>
        <option value="Hispanic or Latino">Hispanic or Latino</option>
        <option value="Native American or Alaska Native">Native American or Alaska Native</option>
        <option value="Other">Other</option>
      </select>

      <select name="educationLevel" onChange={handleChange} required>
        <option value="">Highest Level of Education</option>
        <option value="High School">High School</option>
        <option value="Associate Degree">Associate Degree</option>
        <option value="Bachelor's Degree">Bachelor's Degree</option>
        <option value="Master's Degree">Master's Degree</option>
        <option value="PhD or Doctorate">PhD or Doctorate</option>
      </select>

      <input
        type="number"
        name="salaryRequired"
        placeholder="Expected Salary ($ per year)"
        onChange={handleChange}
        required
      />

      <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ResumeForm;