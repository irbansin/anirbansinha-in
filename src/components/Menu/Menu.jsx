import styles from "./Menu.module.scss";

function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.menuItem}>Home</div>
      <div className={styles.menuItem}>About Me</div>
      <div className={styles.menuItem}>Projects</div>
      <div className={styles.menuItem}>Blog</div>
    </div>
  );
}
export default Menu;
