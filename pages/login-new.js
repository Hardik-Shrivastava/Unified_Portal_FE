import { useState } from 'react';
import { useRouter } from 'next/router';
import '../styles/login-new.module.css'; // Ensure to import your CSS here

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded users, replace with actual auth
    if (
      (name === 'hardik.shrivastava@procdna.com' && password === '1234') ||
      (name === 'mayank.dube@procdna.com' && password === '1234')
    ) {
      router.push('/dashboard'); // Navigate to dashboard on successful login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>ProcDNA Unified Employee Portal</h1>
      </div>
      <div className="login-right">
        <h2>Welcome</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
