// import { useState } from 'react';
// import Link from 'next/link';
// import styles from '../styles/referral-portal.module.css'; // Import the CSS module

// const rolesData = [
//   { id: 1, role: 'Engagement Lead', reqYOE: '5yrs+', skillsReq: 'Databricks, management', domain: 'Technology' },
// ];

// const referredCandidatesData = [
//   { id: 1, name: 'Hardik', role: 'TL', referralStatus: 'Pending', manager: 'Rajan', hitName: 'Ravinder', comments: '' },
// ];

// export default function ReferralPortal({ isAdmin }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     currentCompany: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle the referral application logic here
//     console.log('Referral submitted:', formData);
//   };

//   return (
//     <div className={styles.container}>
//       <nav className={styles.navbar}>
//         <h1>Referral Portal</h1>
//         <ul>
//           <li><Link href="/dashboard">Dashboard</Link></li>
//           <li><Link href="/worklife">WorkLife</Link></li>
//           <li><Link href="/employee-profiles">Employee Profiles</Link></li>
//           <li><Link href="/time-entries">Time Entries</Link></li>
//           {isAdmin && <li><Link href="/admin">Admin Panel</Link></li>}
//         </ul>
//       </nav>

//       <div className={styles.referralForm}>
//         <h2>Apply for Referral</h2>
//         <form onSubmit={handleSubmit}>
//           <label>Job Description:</label>
//           <textarea placeholder="Enter job description" required></textarea>
//           <label>Skills Required:</label>
//           <textarea placeholder="Enter skills required" required></textarea>

//           <h3>Candidate Details:</h3>
//           <label>Name:</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//           <label>Phone No:</label>
//           <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
//           <label>Email ID:</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//           <label>Current Company/Designation:</label>
//           <input type="text" name="currentCompany" value={formData.currentCompany} onChange={handleChange} required />
//           <button type="submit">Apply</button>
//         </form>
//       </div>

//       <h2>Roles</h2>
//       <table className={styles.rolesTable}>
//         <thead>
//           <tr>
//             <th>Roles</th>
//             <th>Req YOE</th>
//             <th>Skills Req</th>
//             <th>Domain</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rolesData.map(role => (
//             <tr key={role.id}>
//               <td>{role.role}</td>
//               <td>{role.reqYOE}</td>
//               <td>{role.skillsReq}</td>
//               <td>{role.domain}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h2>Referred Candidates</h2>
//       <table className={styles.candidatesTable}>
//         <thead>
//           <tr>
//             <th>Candidate Name</th>
//             <th>Role</th>
//             <th>Referral Status</th>
//             <th>Manager</th>
//             <th>HIT Name</th>
//             <th>Comments</th>
//           </tr>
//         </thead>
//         <tbody>
//           {referredCandidatesData.map(candidate => (
//             <tr key={candidate.id}>
//               <td>{candidate.name}</td>
//               <td>{candidate.role}</td>
//               <td>{candidate.referralStatus}</td>
//               <td>{candidate.manager}</td>
//               <td>{candidate.hitName}</td>
//               <td>{candidate.comments}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------

// import { useState } from 'react';
// import Link from 'next/link';
// import styles from '../styles/referral-portal-new.module.css'; // Import the CSS module

// const rolesData = [
//   {
//     id: 1,
//     role: 'Engagement Lead',
//     reqYOE: '5yrs+',
//     skillsReq: 'Databricks, management',
//     domain: 'Technology',
//   },
// ];

// const referredCandidatesData = [
//   {
//     id: 1,
//     name: 'Hardik',
//     role: 'TL',
//     referralStatus: 'Pending',
//     manager: 'Rajan',
//     hitName: 'Ravinder',
//     comments: '',
//     interviewStatus: {
//       stage1: 'Scheduled',
//       stage2: 'Pending',
//       stage3: 'Not started',
//     },
//   },
// ];

// export default function ReferralPortal({ isAdmin }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     currentCompany: '',
//     cv: null,
//   });

//   const [showModal, setShowModal] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       cv: e.target.files[0],
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle the referral application logic here
//     console.log('Referral submitted:', formData);
//   };

//   return (
//     <div className={styles.container}>
//       <nav className={styles.navbar}>
//         <h1>Referral Portal</h1>
//         <ul>
//           <li><Link href="/dashboard">Dashboard</Link></li>
//           <li><Link href="/worklife">WorkLife</Link></li>
//           <li><Link href="/employee-profiles">Employee Profiles</Link></li>
//           <li><Link href="/time-entries">Time Entries</Link></li>
//           {isAdmin && <li><Link href="/admin">Admin Panel</Link></li>}
//         </ul>
//       </nav>

//       <h2>Roles</h2>
//       <table className={styles.rolesTable}>
//         <thead>
//           <tr>
//             <th>Roles</th>
//             <th>Req YOE</th>
//             <th>Skills Req</th>
//             <th>Domain</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rolesData.map(role => (
//             <tr key={role.id}>
//               <td>{role.role}</td>
//               <td>{role.reqYOE}</td>
//               <td>{role.skillsReq}</td>
//               <td>{role.domain}</td>
//               <td>
//                 <button onClick={() => setShowModal(true)}>+</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h2>Referred Candidates</h2>
//       <table className={styles.candidatesTable}>
//         <thead>
//           <tr>
//             <th>Candidate Name</th>
//             <th>Role</th>
//             <th>Referral Status</th>
//             <th>Manager</th>
//             <th>HIT Name</th>
//             <th>Comments</th>
//             <th>Interview Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {referredCandidatesData.map(candidate => (
//             <tr key={candidate.id}>
//               <td>{candidate.name}</td>
//               <td>{candidate.role}</td>
//               <td>{candidate.referralStatus}</td>
//               <td>{candidate.manager}</td>
//               <td>{candidate.hitName}</td>
//               <td>{candidate.comments}</td>
//               <td>
//                 {`Stage 1: ${candidate.interviewStatus.stage1}, Stage 2: ${candidate.interviewStatus.stage2}, Stage 3: ${candidate.interviewStatus.stage3}`}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal for Applying for Referral */}
//       {showModal && (
//         <div className={styles.modal}>
//           <div className={styles.modalContent}>
//             <h2>Apply for Referral</h2>
//             <form onSubmit={handleSubmit}>
//               <label>Job Description:</label>
//               <textarea placeholder="Job description here..." required readOnly></textarea>
//               <label>Skills Required:</label>
//               <textarea placeholder="Skills required here..." required readOnly></textarea>

//               <h3>Candidate Details:</h3>
//               <label>Name:</label>
//               <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//               <label>Phone No:</label>
//               <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
//               <label>Email ID:</label>
//               <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//               <label>Current Company/Designation:</label>
//               <input type="text" name="currentCompany" value={formData.currentCompany} onChange={handleChange} required />
//               <label>Upload CV:</label>
//               <input type="file" onChange={handleFileChange} required />
              
//               <div className={styles.modalButtons}>
//                 <button type="submit">Apply</button>
//                 <button type="button" onClick={() => setShowModal(false)}>Back</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


//not-good--------------------------------------------------------------------------------

// import { useState } from 'react';
// import Link from 'next/link';
// import styles from '../styles/referral-portal.module.css'; // Import the CSS module

// const rolesData = [
//   {
//     id: 1,
//     role: 'Engagement Lead',
//     reqYOE: '5yrs+',
//     skillsReq: 'Databricks, management',
//     domain: 'Technology',
//   },
//   {
//     id: 2,
//     role: 'Software Engineer',
//     reqYOE: '3yrs+',
//     skillsReq: 'React, Node.js',
//     domain: 'Technology',
//   },
//   {
//     id: 3,
//     role: 'Data Scientist',
//     reqYOE: '4yrs+',
//     skillsReq: 'Python, Machine Learning',
//     domain: 'Analytics',
//   },
// ];

// const referredCandidatesData = [
//   {
//     id: 1,
//     name: 'Hardik',
//     role: 'TL',
//     referralStatus: 'Pending',
//     manager: 'Rajan',
//     hitName: 'Ravinder',
//     comments: '',
//     interviewStatus: {
//       stage1: 'Scheduled',
//       stage2: 'Pending',
//       stage3: 'Not started',
//     },
//   },
//   {
//     id: 2,
//     name: 'Mayank',
//     role: 'Developer',
//     referralStatus: 'Accepted',
//     manager: 'Anjali',
//     hitName: 'Pradeep',
//     comments: 'Good fit for the role',
//     interviewStatus: {
//       stage1: 'Completed',
//       stage2: 'Scheduled',
//       stage3: 'Not started',
//     },
//   },
//   {
//     id: 3,
//     name: 'Amit',
//     role: 'Analyst',
//     referralStatus: 'Pending',
//     manager: 'Ravi',
//     hitName: 'Geeta',
//     comments: '',
//     interviewStatus: {
//       stage1: 'Not started',
//       stage2: 'Not started',
//       stage3: 'Not started',
//     },
//   },
// ];

// export default function ReferralPortal({ isAdmin }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     currentCompany: '',
//     cv: null,
//   });

//   const [showModal, setShowModal] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       cv: e.target.files[0],
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle the referral application logic here
//     console.log('Referral submitted:', formData);
//   };

//   return (
//     <div className={styles.container}>
//       <nav className={styles.navbar}>
//         <h1>Referral Portal</h1>
//         <ul>
//           <li><Link href="/dashboard">Dashboard</Link></li>
//           <li><Link href="/worklife">WorkLife</Link></li>
//           <li><Link href="/employee-profiles">Employee Profiles</Link></li>
//           <li><Link href="/time-entries">Time Entries</Link></li>
//           {isAdmin && <li><Link href="/admin">Admin Panel</Link></li>}
//         </ul>
//       </nav>

//       <h2>Roles</h2>
//       <table className={styles.rolesTable}>
//         <thead>
//           <tr>
//             <th>Roles</th>
//             <th>Req YOE</th>
//             <th>Skills Req</th>
//             <th>Domain</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rolesData.map(role => (
//             <tr key={role.id}>
//               <td>{role.role}</td>
//               <td>{role.reqYOE}</td>
//               <td>{role.skillsReq}</td>
//               <td>{role.domain}</td>
//               <td>
//                 <button onClick={() => setShowModal(true)}>+</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h2>Referred Candidates</h2>
//       <table className={styles.candidatesTable}>
//         <thead>
//           <tr>
//             <th>Candidate Name</th>
//             <th>Role</th>
//             <th>Referral Status</th>
//             <th>Manager</th>
//             <th>HIT Name</th>
//             <th>Comments</th>
//             <th>Interview Stage</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {referredCandidatesData.map(candidate => (
//             <React.Fragment key={candidate.id}>
//               <tr>
//                 <td>{candidate.name}</td>
//                 <td>{candidate.role}</td>
//                 <td>{candidate.referralStatus}</td>
//                 <td>{candidate.manager}</td>
//                 <td>{candidate.hitName}</td>
//                 <td>{candidate.comments}</td>
//                 <td>Stage 1</td>
//                 <td>{candidate.interviewStatus.stage1}</td>
//               </tr>
//               <tr>
//                 <td colSpan={6}></td>
//                 <td>Stage 2</td>
//                 <td>{candidate.interviewStatus.stage2}</td>
//               </tr>
//               <tr>
//                 <td colSpan={6}></td>
//                 <td>Stage 3</td>
//                 <td>{candidate.interviewStatus.stage3}</td>
//               </tr>
//             </React.Fragment>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal for Applying for Referral */}
//       {showModal && (
//         <div className={styles.modal}>
//           <div className={styles.modalContent}>
//             <h2>Apply for Referral</h2>
//             <form onSubmit={handleSubmit}>
//               <label>Job Description:</label>
//               <textarea placeholder="Job description here..." required readOnly></textarea>
//               <label>Skills Required:</label>
//               <textarea placeholder="Skills required here..." required readOnly></textarea>

//               <h3>Candidate Details:</h3>
//               <label>Name:</label>
//               <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//               <label>Phone No:</label>
//               <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
//               <label>Email ID:</label>
//               <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//               <label>Current Company/Designation:</label>
//               <input type="text" name="currentCompany" value={formData.currentCompany} onChange={handleChange} required />
//               <label>Upload CV:</label>
//               <input type="file" onChange={handleFileChange} required />
              
//               <div className={styles.modalButtons}>
//                 <button type="submit">Apply</button>
//                 <button type="button" onClick={() => setShowModal(false)}>Back</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

//-------------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import Link from 'next/link';
// import styles from '../styles/referral-portal-5.module.css'; // Import the CSS module

// const rolesData = [
//   { id: 1, role: 'Engagement Lead', reqYOE: '5yrs+', skillsReq: 'Databricks, management', domain: 'Technology' },
//   { id: 2, role: 'Software Engineer', reqYOE: '2yrs+', skillsReq: 'JavaScript, React', domain: 'Development' },
//   { id: 3, role: 'Product Manager', reqYOE: '3yrs+', skillsReq: 'Management, Agile', domain: 'Management' },
// ];

// const referredCandidatesData = [
//   { id: 1, name: 'Hardik', role: 'TL', referralStatus: 'Pending', manager: 'Rajan', hitName: 'Ravinder', comments: '', interviewStages: ['Stage 1 - Pending', 'Stage 2 - Pending', 'Stage 3 - Pending'] },
//   { id: 2, name: 'Neha', role: 'Developer', referralStatus: 'In Progress', manager: 'Amit', hitName: 'John', comments: '', interviewStages: ['Stage 1 - Completed', 'Stage 2 - Pending', 'Stage 3 - Pending'] },
//   { id: 3, name: 'Ravi', role: 'Manager', referralStatus: 'Pending', manager: 'Kiran', hitName: 'Sara', comments: '', interviewStages: ['Stage 1 - Pending', 'Stage 2 - Pending', 'Stage 3 - Pending'] },
// ];

// export default function ReferralPortal({ isAdmin }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     currentCompany: '',
//   });

//   const [showPopup, setShowPopup] = useState(false); // State for popup visibility
//   const [selectedRole, setSelectedRole] = useState(null); // State to store selected job role for the popup

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Referral submitted:', formData);
//     setShowPopup(false); // Close the popup after submission
//   };

//   const openPopup = (role) => {
//     setSelectedRole(role);
//     setShowPopup(true);
//   };

//   return (
//     <div className={styles.container}>
//       <nav className={styles.navbar}>
//         <h1>Referral Portal</h1>
//         <ul>
//           <li><Link href="/dashboard">Dashboard</Link></li>
//           <li><Link href="/worklife">WorkLife</Link></li>
//           <li><Link href="/employee-profiles">Employee Profiles</Link></li>
//           <li><Link href="/time-entries">Time Entries</Link></li>
//           {isAdmin && <li><Link href="/admin">Admin Panel</Link></li>}
//         </ul>
//       </nav>

//       <div className={styles.referralForm}>
//         <h2>Roles</h2>
//         <table className={styles.rolesTable}>
//           <thead>
//             <tr>
//               <th>Roles</th>
//               <th>Req YOE</th>
//               <th>Skills Req</th>
//               <th>Domain</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rolesData.map(role => (
//               <tr key={role.id}>
//                 <td>{role.role}</td>
//                 <td>{role.reqYOE}</td>
//                 <td>{role.skillsReq}</td>
//                 <td>{role.domain}</td>
//                 <td>
//                   <button className={styles.addButton} onClick={() => openPopup(role)}>+</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <h2>Referred Candidates</h2>
//       <table className={styles.candidatesTable}>
//         <thead>
//           <tr>
//             <th>Candidate Name</th>
//             <th>Role</th>
//             <th>Referral Status</th>
//             <th>Manager</th>
//             <th>HIT Name</th>
//             <th>Comments</th>
//             <th>Interview Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {referredCandidatesData.map(candidate => (
//             <tr key={candidate.id}>
//               <td>{candidate.name}</td>
//               <td>{candidate.role}</td>
//               <td>{candidate.referralStatus}</td>
//               <td>{candidate.manager}</td>
//               <td>{candidate.hitName}</td>
//               <td>{candidate.comments}</td>
//               <td>
//                 {candidate.interviewStages.map((stage, index) => (
//                   <div key={index}>{stage}</div>
//                 ))}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Popup for the referral application */}
//       {showPopup && (
//         <div className={styles.popup}>
//           <div className={styles.popupContent}>
//             <span className={styles.close} onClick={() => setShowPopup(false)}>&times;</span>
//             <h2>Apply for Referral: {selectedRole?.role}</h2>
//             <form onSubmit={handleSubmit}>
//               <label>Job Description:</label>
//               <textarea placeholder="Enter job description" required>{selectedRole?.skillsReq}</textarea>
//               <label>Skills Required:</label>
//               <textarea placeholder="Enter skills required" required>{selectedRole?.skillsReq}</textarea>

//               <h3>Candidate Details:</h3>
//               <label>Name:</label>
//               <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//               <label>Phone No:</label>
//               <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
//               <label>Email ID:</label>
//               <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//               <label>Current Company/Designation:</label>
//               <input type="text" name="currentCompany" value={formData.currentCompany} onChange={handleChange} required />
//               <label>Upload CV:</label>
//               <input type="file" accept=".pdf,.doc,.docx" />
//               <div className={styles.popupButtons}>
//                 <button type="submit">Apply</button>
//                 <button type="button" onClick={() => setShowPopup(false)}>Back</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

//---------------------------------------------------------------------------------------------

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/referral-portal-5.module.css'; // Import the CSS module

const rolesData = [
    { id: 1, role: 'Engagement Lead', reqYOE: '5yrs+', skillsReq: 'Databricks, Management', domain: 'Technology' },
    { id: 2, role: 'Software Engineer', reqYOE: '2yrs+', skillsReq: 'JavaScript, React', domain: 'Development' },
    { id: 3, role: 'Product Manager', reqYOE: '3yrs+', skillsReq: 'Management, Agile', domain: 'Management' },
    { id: 4, role: 'Data Analyst', reqYOE: '1yr+', skillsReq: 'SQL, Python', domain: 'Analytics' },
    { id: 5, role: 'DevOps Engineer', reqYOE: '4yrs+', skillsReq: 'AWS, CI/CD', domain: 'Infrastructure' },
  ];
  
  const referredCandidatesData = [
    { id: 1, name: 'Hardik', role: 'TL', referralStatus: 'Pending', manager: 'Rajan', hitName: 'Ravinder', comments: '', interviewStages: ['Exploratory Discussion - Pending', 'Case Discussion - Pending', 'Fit Round - Pending'] },
    { id: 2, name: 'Neha', role: 'Developer', referralStatus: 'In Progress', manager: 'Amit', hitName: 'John', comments: '', interviewStages: ['Exploratory Discussion - Completed', 'Case Discussion - Pending', 'Fit Round - Pending'] },
    { id: 3, name: 'Ravi', role: 'Manager', referralStatus: 'Pending', manager: 'Kiran', hitName: 'Sara', comments: '', interviewStages: ['Exploratory Discussion - Pending', 'Case Discussion - Pending', 'Fit Round - Pending'] },
    { id: 4, name: 'Sonal', role: 'Data Analyst', referralStatus: 'Completed', manager: 'Anjali', hitName: 'James', comments: '', interviewStages: ['Exploratory Discussion - Completed', 'Case Discussion - Completed', 'Fit Round - Completed'] },
    { id: 5, name: 'Vikram', role: 'DevOps Engineer', referralStatus: 'In Progress', manager: 'Nisha', hitName: 'Kate', comments: '', interviewStages: ['Exploratory Discussion - Completed', 'Case Discussion - Pending', 'Fit Round - Pending'] },
  ];
  

export default function ReferralPortal({ isAdmin }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    currentCompany: '',
  });

  const [showPopup, setShowPopup] = useState(false); // State for popup visibility
  const [selectedRole, setSelectedRole] = useState(null); // State to store selected job role for the popup

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Referral submitted:', formData);
    setShowPopup(false); // Close the popup after submission
  };

  const openPopup = (role) => {
    setSelectedRole(role);
    setShowPopup(true);
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
        <h2>Roles</h2>
        <div className={styles.scrollableTable}>
          <table className={styles.rolesTable}>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Roles</th>
                <th>Req YOE</th>
                <th>Skills Req</th>
                <th>Domain</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rolesData.map((role, index) => (
                <tr key={role.id}>
                  <td>{index + 1}</td>
                  <td>{role.role}</td>
                  <td>{role.reqYOE}</td>
                  <td>{role.skillsReq}</td>
                  <td>{role.domain}</td>
                  <td>
                    <button className={styles.addButton} onClick={() => openPopup(role)}>+</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h2>Referred Candidates</h2>
      <div className={styles.scrollableTable}>
        <table className={styles.candidatesTable}>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Candidate Name</th>
              <th>Role</th>
              <th>Referral Status</th>
              <th>Manager</th>
              <th>HIT Name</th>
              <th>Comments</th>
              <th>Interview Status</th>
            </tr>
          </thead>
          <tbody>
            {referredCandidatesData.map((candidate, index) => (
              <tr key={candidate.id}>
                <td>{index + 1}</td>
                <td>{candidate.name}</td>
                <td>{candidate.role}</td>
                <td>{candidate.referralStatus}</td>
                <td>{candidate.manager}</td>
                <td>{candidate.hitName}</td>
                <td>{candidate.comments}</td>
                <td>
                  {candidate.interviewStages.map((stage, stageIndex) => (
                    <div key={stageIndex}>{stage}</div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup for the referral application */}
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <span className={styles.close} onClick={() => setShowPopup(false)}>&times;</span>
            <h2>Apply for Referral: {selectedRole?.role}</h2>
            <form onSubmit={handleSubmit}>
              <label>Job Description:</label>
              <textarea placeholder="Enter job description" required>{selectedRole?.skillsReq}</textarea>
              <label>Skills Required:</label>
              <textarea placeholder="Enter skills required" required>{selectedRole?.skillsReq}</textarea>

              <h3>Candidate Details:</h3>
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              <label>Phone No:</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
              <label>Email ID:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              <label>Current Company/Designation:</label>
              <input type="text" name="currentCompany" value={formData.currentCompany} onChange={handleChange} required />
              <label>Upload CV:</label>
              <input type="file" accept=".pdf,.doc,.docx" />
              <div className={styles.popupButtons}>
                <button type="submit">Apply</button>
                <button type="button" onClick={() => setShowPopup(false)}>Back</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
