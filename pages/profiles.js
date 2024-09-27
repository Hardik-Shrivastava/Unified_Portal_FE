// pages/profiles.js

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/profiles.module.css'; // Assuming you will create a new CSS file

const Profiles = () => {
  const [filters, setFilters] = useState({
    domain: '',
    designation: '',
    skills: '',
    project: '',
    tools: ''
  });

  const dummyData = [
    {
      id: 1,
      domain: 'Analytics',
      designation: 'Data Analyst',
      skills: 'SQL, Python',
      project: 'Sales Dashboard',
      tools: 'Tableau, Excel'
    },
    {
      id: 2,
      domain: 'Development',
      designation: 'Software Engineer',
      skills: 'JavaScript, React',
      project: 'E-commerce Site',
      tools: 'Git, Docker'
    },
    // Add more dummy data as needed
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Profiles</h1>
        <Link href="/employee-profiles">
          <button className={styles.backButton}>Back</button>
        </Link>
      </div>
      
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Filter by Domain"
          value={filters.domain}
          onChange={(e) => setFilters({ ...filters, domain: e.target.value })}
        />
        <input
          type="text"
          placeholder="Filter by Designation"
          value={filters.designation}
          onChange={(e) => setFilters({ ...filters, designation: e.target.value })}
        />
        <input
          type="text"
          placeholder="Filter by Skills"
          value={filters.skills}
          onChange={(e) => setFilters({ ...filters, skills: e.target.value })}
        />
        <input
          type="text"
          placeholder="Filter by Project"
          value={filters.project}
          onChange={(e) => setFilters({ ...filters, project: e.target.value })}
        />
        <input
          type="text"
          placeholder="Filter by Tools"
          value={filters.tools}
          onChange={(e) => setFilters({ ...filters, tools: e.target.value })}
        />
      </div>

      <div className={styles.profilesList}>
        {dummyData.map(profile => (
          <div key={profile.id} className={styles.profileCard}>
            <h3>{profile.designation}</h3>
            <p><strong>Domain:</strong> {profile.domain}</p>
            <p><strong>Skills:</strong> {profile.skills}</p>
            <p><strong>Project:</strong> {profile.project}</p>
            <p><strong>Tools:</strong> {profile.tools}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profiles;
