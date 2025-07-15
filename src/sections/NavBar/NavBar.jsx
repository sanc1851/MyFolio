import styles from './NavBar.module.css';

function NavBar() {
  return (
    
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyFolio</div> {}
      <div className={styles.navButtons}>
        <a href="#hero"><button className={styles.navBtn}>Home</button></a>
        <a href="#projects"><button className={styles.navBtn}>Projects</button></a>
         <a href="#skills"><button className={styles.navBtn}>Skills</button></a>
        <a href="#achievements"><button className={styles.navBtn}>Achievements</button></a>
        <a href="#contact"><button className={styles.navBtn}>Contact</button></a>
      </div>
    </nav>
   
  );
}

export default NavBar;
