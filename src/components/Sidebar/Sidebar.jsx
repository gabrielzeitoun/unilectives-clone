import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <>
      <nav className={styles.navbar}>
        <img
          src="https://unilectives.devsoc.app/_next/static/media/uni-lectives.33bdcd1e.svg"
          alt="app logo"
          id={styles.logo}
        />
        <div className={styles.iconContainer}>
          <div className={styles.upperIcons}>
          </div>
          <div className={styles.lowerIcons}></div>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
