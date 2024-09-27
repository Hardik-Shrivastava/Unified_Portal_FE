import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/referral-portal.module.css'; // Import the CSS module

const rolesData = [
  { id: 1, role: 'Engagement Lead', reqYOE: '5yrs+', skillsReq: 'Databricks, management', domain: 'Technology' },
];

const referredCandidatesData = [
  { id: 1, name: 'Hardik', role: 'TL', referralStatus: 'Pending', manager: 'Rajan', hitName: 'Ravinder', comments: '' },
];

export default function ReferralPortal({ isAdmin }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    currentCompany: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the referral application logic here
    console.log('Referral submitted:', formData);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <h1>Referral Portal</h1>
        <ul>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/worklife">WorkLife</Link></li>
          <li><Link href="/employee-profiles">Employee Profiles</Link></li>
          <li><Link href="/time-entries">Time Entries</Link></li>
          {isAdmin && <li><Link href="/admin">Admin Panel</Link></li>}
        </ul>
      </nav>

      <div className={styles.referralForm}>
        <h2>Apply for Referral</h2>
        <form onSubmit={handleSubmit}>
          <label>Job Description:</label>
          <textarea placeholder="Enter job description" required></textarea>
          <label>Skills Required:</label>
          <textarea placeholder="Enter skills required" required></textarea>

          <h3>Candidate Details:</h3>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <label>Phone No:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          <label>Email ID:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Current Company/Designation:</label>
          <input type="text" name="currentCompany" value={formData.currentCompany} onChange={handleChange} required />
          <button type="submit">Apply</button>
        </form>
      </div>

      <h2>Roles</h2>
      <table className={styles.rolesTable}>
        <thead>
          <tr>
            <th>Roles</th>
            <th>Req YOE</th>
            <th>Skills Req</th>
            <th>Domain</th>
          </tr>
        </thead>
        <tbody>
          {rolesData.map(role => (
            <tr key={role.id}>
              <td>{role.role}</td>
              <td>{role.reqYOE}</td>
              <td>{role.skillsReq}</td>
              <td>{role.domain}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Referred Candidates</h2>
      <table className={styles.candidatesTable}>
        <thead>
          <tr>
            <th>Candidate Name</th>
            <th>Role</th>
            <th>Referral Status</th>
            <th>Manager</th>
            <th>HIT Name</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {referredCandidatesData.map(candidate => (
            <tr key={candidate.id}>
              <td>{candidate.name}</td>
              <td>{candidate.role}</td>
              <td>{candidate.referralStatus}</td>
              <td>{candidate.manager}</td>
              <td>{candidate.hitName}</td>
              <td>{candidate.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
