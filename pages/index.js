import styles from '../styles/Home.module.css';
import { Toolbar } from '../components/toolbar';

export default function Home() {
  return (
    <div className="page-container">
      <Toolbar />

      <div className={styles.main}>
        <h1>Next.JS News App</h1>

        <h3>View the profile Page for Profile Rendering.</h3>
        <h3>OR</h3>
        <h3>Just Read Some News on Feed Page (Under Construction).</h3>
      </div>
    </div>
  );
}
