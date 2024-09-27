// import { useState } from 'react';
// import styles from '../styles/employeeProfile.module.css'; // Ensure this path is correct

// export default function EmployeeProfile() {
//   const [aboutMe, setAboutMe] = useState('');
//   const [resume, setResume] = useState(null);
//   const [name, setName] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [domain, setDomain] = useState('Analytics');
//   const [dateOfJoining, setDateOfJoining] = useState('');
//   const [toolsExpertise, setToolsExpertise] = useState('');
//   const [reportingManager, setReportingManager] = useState('');

//   const handleResumeUpload = (e) => {
//     setResume(e.target.files[0]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle the form submission logic
//   };

//   return (
//     <div className={styles.container}>
//       <header className={styles.header}>
//         <h1>Employee Profiles</h1>
//         <div className={styles.profileNav}>
//           <button className={styles.navButton}>My Profile</button>
//           <button className={styles.navButton}>Profiles</button>
//           <div className={styles.profileIcon}>HS</div>
//         </div>
//       </header>

//       <div className={styles.profileContent}>
//         <div className={styles.leftColumn}>
//           <div className={styles.uploadSection}>
//             <h2>Upload</h2>
//             <div className={styles.uploadButton}>
//               <input 
//                 type="file" 
//                 id="resume-upload" 
//                 onChange={handleResumeUpload} 
//                 style={{ display: 'none' }} 
//               />
//               <label htmlFor="resume-upload" className={styles.uploadLabel}>
//                 Upload Resume
//               </label>
//             </div>
//             <div className={styles.aboutMeSection}>
//               <h3>About Me:</h3>
//               <textarea 
//                 value={aboutMe}
//                 onChange={(e) => setAboutMe(e.target.value)}
//                 placeholder="Tell us about yourself..."
//                 className={styles.aboutMeTextarea}
//               />
//             </div>
//           </div>
//         </div>

//         <div className={styles.rightColumn}>
//           <form onSubmit={handleSubmit}>
//             <label>Name:</label>
//             <input 
//               type="text" 
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className={styles.inputField}
//             />

//             <label>Designation:</label>
//             <input 
//               type="text" 
//               value={designation}
//               onChange={(e) => setDesignation(e.target.value)}
//               className={styles.inputField}
//             />

//             <label>Domain:</label>
//             <input 
//               type="text" 
//               value={domain}
//               onChange={(e) => setDomain(e.target.value)}
//               className={styles.inputField}
//             />

//             <label>Date of Joining:</label>
//             <input 
//               type="date" 
//               value={dateOfJoining}
//               onChange={(e) => setDateOfJoining(e.target.value)}
//               className={styles.inputField}
//             />

//             <label>Tools Expertise:</label>
//             <input 
//               type="text" 
//               value={toolsExpertise}
//               onChange={(e) => setToolsExpertise(e.target.value)}
//               className={styles.inputField}
//             />

//             <label>Reporting Manager:</label>
//             <input 
//               type="text" 
//               value={reportingManager}
//               onChange={(e) => setReportingManager(e.target.value)}
//               className={styles.inputField}
//             />

//             <button type="submit" className={styles.updateButton}>UPDATE</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import styles from '../styles/employeeProfile.module.css'; // Ensure this path is correct

export default function EmployeeProfile() {
  const [aboutMe, setAboutMe] = useState('');
  const [resume, setResume] = useState(null);
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [domain, setDomain] = useState('Analytics');
  const [dateOfJoining, setDateOfJoining] = useState('');
  const [toolsExpertise, setToolsExpertise] = useState('');
  const [reportingManager, setReportingManager] = useState('');

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Employee Profiles</h1>
        <div className={styles.profileNav}>
          <button className={styles.navButton}>My Profile</button>
          <button className={styles.navButton}>Profiles</button>
          <div className={styles.profileIcon}>HS</div>
        </div>
      </header>

      <div className={styles.profileContent}>
        <div className={styles.leftColumn}>
          <div className={styles.uploadSection}>
            <h2>Upload Profile Picture</h2>
            <div className={styles.profilePicturePlaceholder}>
              <label htmlFor="profile-picture-upload" className={styles.profilePictureLabel}>
                Upload Picture
              </label>
              <input 
                type="file" 
                id="profile-picture-upload" 
                style={{ display: 'none' }} 
              />
            </div>
            <div className={styles.aboutMeSection}>
              <h3>About Me:</h3>
              <textarea 
                value={aboutMe}
                onChange={(e) => setAboutMe(e.target.value)}
                placeholder="Tell us about yourself..."
                className={styles.aboutMeTextarea}
              />
            </div>
            <div className={styles.uploadResumeSection}>
              <h3>Upload Resume:</h3>
              <input 
                type="file" 
                id="resume-upload" 
                onChange={handleResumeUpload} 
                style={{ display: 'none' }} 
              />
              <label htmlFor="resume-upload" className={styles.uploadLabel}>
                Upload Resume
              </label>
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.inputField}
            />

            <label>Designation:</label>
            <input 
              type="text" 
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className={styles.inputField}
            />

            <label>Domain:</label>
            <input 
              type="text" 
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className={styles.inputField}
            />

            <label>Date of Joining:</label>
            <input 
              type="date" 
              value={dateOfJoining}
              onChange={(e) => setDateOfJoining(e.target.value)}
              className={styles.inputField}
            />

            <label>Tools Expertise:</label>
            <input 
              type="text" 
              value={toolsExpertise}
              onChange={(e) => setToolsExpertise(e.target.value)}
              className={styles.inputField}
            />

            <label>Reporting Manager:</label>
            <input 
              type="text" 
              value={reportingManager}
              onChange={(e) => setReportingManager(e.target.value)}
              className={styles.inputField}
            />

            <button type="submit" className={styles.updateButton}>UPDATE</button>
          </form>
        </div>
      </div>
    </div>
  );
}
