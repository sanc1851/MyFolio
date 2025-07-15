import styles from '../sections/Skills/SkillsStyles.module.css';

function SkillList({ src, skill }) {
  return (
    <div className={styles.skillItem}>
      <img src={src} alt={`${skill} logo`} className={styles.skillIcon} />
      <p>{skill}</p>
    </div>
  );
}

export default SkillList;
