import { useState } from 'react';
import { useRouter } from 'next/router';  // Import useRouter to handle navigation
import styles from '../styles/login.module.css';  // Import the CSS module

export default function Login() {
  // Local state to capture form data
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  // For displaying login errors
  const router = useRouter();

  // Hardcoded users
  const users = {
    'hardik.shrivastava@procdna.com': { password: '1234', is_admin: false },
    'mayank.dube@procdna.com': { password: '1234', is_admin: true },
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered user exists
    if (users[name]) {
      // Check if the password matches
      if (users[name].password === password) {
        console.log(`Login successful for ${name}`);

        // Redirect based on user type
        if (users[name].is_admin) {
          router.push('/admin'); // Redirect to admin page for admin users
        } else {
          router.push('/dashboard'); // Redirect to dashboard for non-admin users
        }
      } else {
        setError('Invalid password. Please try again.');
      }
    } else {
      setError('User not found. Please check the email.');
    }
  };

  return (
    <div className={styles['login-container']}>
      <h1 className={styles.heading}>ProcDNA Unified Employee Portal</h1>
      <form onSubmit={handleSubmit} className={styles['login-form']}>
        <label htmlFor="name">Name</label>
        <input 
          type="email" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className={styles['input-field']} // Ensure this matches your CSS
          required 
        />
        
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className={styles['input-field']} // Ensure this matches your CSS
          required 
        />
        
        <button type="submit" className={styles.button}>Login</button>
        
        {/* Show error if there is an invalid login attempt */}
        {error && <p className={styles['error-message']}>{error}</p>}
      </form>
    </div>
  );
}
