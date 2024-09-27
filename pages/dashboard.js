import Link from 'next/link';
import styles from '../styles/dashboard.module.css'; // Import the module as 'styles'

export default function Dashboard() {
  return (
    <div className={styles['dashboard-container']}>
      <div className={styles['dashboard-header']}>
        <h1>ProcDNA Employee Portal</h1>
        <div className={styles['profile-icon']}>HS</div> {/* Example Profile icon */}
      </div>

      <div className={styles['dashboard-cards']}>
        <Link href="/employee-profiles">
          <div className={styles['dashboard-card']}>Employee Profiles</div>
        </Link>
        <Link href="/referral-portal">
          <div className={styles['dashboard-card']}>Referrals</div>
        </Link>
        <Link href="/time-entries">
          <div className={styles['dashboard-card']}>Time Entries</div>
        </Link>
        <Link href="/alexandria">
          <div className={styles['dashboard-card']}>Alexandria</div>
        </Link>
        <Link href="/greyt-hr">
          <div className={styles['dashboard-card']}>Greyt HR</div>
        </Link>
        <Link href="/peoplebox">
          <div className={styles['dashboard-card']}>PeopleBox</div>
        </Link>
      </div>
    </div>
  );
}
  