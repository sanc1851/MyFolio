import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/sanc_new.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Sanchita Singh"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Sanchita
          <br />
          Singh
        </h1>
        <h2>Software Development Engineer(SDE)</h2>
        <span className={styles.social}>
          <a href="https://github.com/sanc1851" target="_blank">
            <img className={styles.social} src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/sanchita-singh-188453259/" target="_blank">
            <img className={styles.social} src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          <p className={styles.description}>
  <p className={styles.description}>
  Aspiring SDE skilled in DSA and MERN stack. Passionate about building real-world apps,
   solving problems, and learning to enhance development and system design.
</p>

</p>

        </p>
        <a href={CV} target="_blank" rel="noopener noreferrer">
        <button className={styles.hover}>Resume</button>
</a>
      </div>
    </section>
  );
}

export default Hero;