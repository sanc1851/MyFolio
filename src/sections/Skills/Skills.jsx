import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';

import htmlLogo from '../../assets/html.png';
import cssLogo from '../../assets/css.jpg';
import jsLogo from '../../assets/javascript.png';
import nodeLogo from '../../assets/node.jpg';

import reactLogo from '../../assets/react.png';
import tailwindLogo from '../../assets/tailwind.png';
import expressLogo from '../../assets/express.png';
import sqlLogo from '../../assets/sql.png';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      <div className={styles.skillList}>
        <SkillList src={htmlLogo} alt="HTML" />
        <SkillList src={cssLogo} alt="CSS" />
        <SkillList src={jsLogo} alt="JavaScript" />
        <SkillList src={nodeLogo} alt="Node.js" />
      </div>

      <hr />

      <div className={styles.skillList}>
        <SkillList src={reactLogo} alt="React" />
        <SkillList src={tailwindLogo} alt="Tailwind CSS" />
        <SkillList src={expressLogo} alt="Express" />
        <SkillList src={sqlLogo} alt="SQL" />
      </div>
    </section>
  );
}

export default Skills;
