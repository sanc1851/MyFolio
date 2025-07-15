import styles from './ProjectsStyles.module.css';
import edu_logo from '../../assets/edu_logo.png';
import chat from '../../assets/chat.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={chat}
          link="https://github.com/sanc1851/ChatApp"
          h3="ChatApp"
        />
        <ProjectCard
          src={edu_logo}
          link="https://github.com/sanc1851/College-Mate"
          h3="EduStack"
        />
        
      </div>
    </section>
  );
}

export default Projects;
