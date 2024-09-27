import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/referral-portal-admin.module.css'; // Admin-specific CSS module

const referredEmployeesData = [
  {
    id: 1,
    employeeName: 'Hardik',
    candidateName: 'Neha',
    referralStatus: 'Pending',
    manager: 'Rajan',
    interviewStages: { stage1: 'Pending', stage2: 'Pending', stage3: 'Pending' },
    domain: 'Technology',
    contact: { phone: '9876543210', email: 'neha@gmail.com' },
    comments: 'Follow up next week.'
  },
  {
    id: 2,
    employeeName: 'Mayank',
    candidateName: 'Ravi',
    referralStatus: 'In Progress',
    manager: 'Kiran',
    interviewStages: { stage1: 'Completed', stage2: 'Pending', stage3: 'Pending' },
    domain: 'Management',
    contact: { phone: '8765432109', email: 'ravi@gmail.com' },
    comments: 'Needs another round of discussion.'
  },
  {
    id: 3,
    employeeName: 'Amit',
    candidateName: 'Shreya',
    referralStatus: 'Completed',
    manager: 'Rajan',
    interviewStages: { stage1: 'Completed', stage2: 'Completed', stage3: 'Completed' },
    domain: 'Technology',
    contact: { phone: '9876543222', email: 'shreya@gmail.com' },
    comments: 'Excellent candidate, offer extended.'
  },
  {
    id: 4,
    employeeName: 'Ravi',
    candidateName: 'Arjun',
    referralStatus: 'Pending',
    manager: 'Sara',
    interviewStages: { stage1: 'Pending', stage2: 'Pending', stage3: 'Pending' },
    domain: 'Management',
    contact: { phone: '9123456789', email: 'arjun@gmail.com' },
    comments: 'Pending manager feedback.'
  },
  {
    id: 5,
    employeeName: 'Neha',
    candidateName: 'Sanjay',
    referralStatus: 'In Progress',
    manager: 'Amit',
    interviewStages: { stage1: 'Completed', stage2: 'Pending', stage3: 'Pending' },
    domain: 'Technology',
    contact: { phone: '9987654321', email: 'sanjay@gmail.com' },
    comments: 'Good fit for the role, need technical round.'
  }
];

const managerOptions = {
  Technology: ['Rajan', 'Amit'],
  Management: ['Kiran', 'Sara'],
  // Add more domain-specific managers if needed
};

export default function ReferralPortalAdmin() {
  const [data, setData] = useState(referredEmployeesData);

  const handleInputChange = (e, id, field) => {
    const { value } = e.target;
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setData(updatedData);
  };

  const handleInterviewStageChange = (e, id, stage) => {
    const { value } = e.target;
    const updatedData = data.map((item) =>
      item.id === id
        ? {
            ...item,
            interviewStages: { ...item.interviewStages, [stage]: value },
          }
        : item
    );
    setData(updatedData);
  };

  const handleCommentChange = (e, id) => {
    const { value } = e.target;
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, comments: value } : item
    );
    setData(updatedData);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <h1>Admin Portal</h1>
        <ul>
          <li><Link href="/referral-portal">Referral Portal</Link></li>
          <li className={styles.active}>Admin Portal</li> {/* Highlight the active page */}
        </ul>
      </nav>

      <h2>Referred Employees</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Candidate Name</th>
            <th>Referral Status</th>
            <th>Manager</th>
            <th>Interview Stages</th>
            <th>Domain</th>
            <th>Contact Details</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.employeeName}</td>
              <td>{employee.candidateName}</td>
              <td>
                <select
                  value={employee.referralStatus}
                  onChange={(e) => handleInputChange(e, employee.id, 'referralStatus')}
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
              <td>
                <select
                  value={employee.manager}
                  onChange={(e) => handleInputChange(e, employee.id, 'manager')}
                >
                  {managerOptions[employee.domain].map((manager) => (
                    <option key={manager} value={manager}>
                      {manager}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <div>
                  <label>Exploratory Discussion: </label>
                  <select
                    value={employee.interviewStages.stage1}
                    onChange={(e) => handleInterviewStageChange(e, employee.id, 'stage1')}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div>
                  <label>Case Discussion: </label>
                  <select
                    value={employee.interviewStages.stage2}
                    onChange={(e) => handleInterviewStageChange(e, employee.id, 'stage2')}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div>
                  <label>Fit Round: </label>
                  <select
                    value={employee.interviewStages.stage3}
                    onChange={(e) => handleInterviewStageChange(e, employee.id, 'stage3')}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </td>
              <td>{employee.domain}</td>
              <td>
                Phone: {employee.contact.phone}
                <br />
                Email: {employee.contact.email}
              </td>
              <td>
                <textarea
                  value={employee.comments}
                  onChange={(e) => handleCommentChange(e, employee.id)}
                  placeholder="Enter comments here"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
