import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard</h1>
      <p>Select a section to manage your work:</p>

      <nav>
        <ul>
          <li><Link href="/worklife">WorkLife</Link></li>
          <li><Link href="/employee-profiles">Employee Profiles</Link></li>
          <li><Link href="/referral-portal">Referral Portal</Link></li>
          <li><Link href="/time-entries">Time Entries</Link></li>
        </ul>
      </nav>
    </div>
  );
}
