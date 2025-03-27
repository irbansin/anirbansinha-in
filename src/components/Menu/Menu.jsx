import styles from "./Menu.module.scss";

function Menu({ menuItems, handleClick }) {
  return (
    <div className={styles.menu}>
      {menuItems.map((item, i) => {
        return (
          <div key={i} className={styles.menuItem}>
            {item}
          </div>
        );
      })}
    </div>
  );
}
export default Menu;
