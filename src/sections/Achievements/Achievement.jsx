import styles from './AchievementsStyles.module.css';
import leetcodeLogo from '../../assets/leetcode.png';
import gfgLogo from '../../assets/gfg.png';
import cnLogo from '../../assets/cn.jpg';

function Achievements() {
  return (
    <section id="achievements" className={styles.container}>
      <h1 className="sectionTitle">Achievements</h1>
      <div className={styles.grid}>
        <a href="https://leetcode.com/u/Sanc1851/" target="_blank" rel="noopener noreferrer">
          <img src={leetcodeLogo} alt="LeetCode" />
          <p>LeetCode</p>
        </a>
        <a href="https://www.geeksforgeeks.org/user/sinsanc62te/" target="_blank" rel="noopener noreferrer">
          <img src={gfgLogo} alt="GeeksforGeeks" />
          <p>GFG</p>
        </a>
        <a href="https://www.naukri.com/code360/profile/SancAsAlways" target="_blank" rel="noopener noreferrer">
          <img src={cnLogo} alt="Coding Ninjas" />
          <p>Coding Ninjas</p>
        </a>
      </div>
    </section>
  );
}

export default Achievements;
