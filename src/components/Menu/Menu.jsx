import styles from "./Menu.module.scss";

function Menu({ menuItems, handleClick }) {
  return (
    <div className={styles.menu}>
      {menuItems.map((item, i) => {
        return (
          <div
            key={i}
            className={styles.menuItem}
            onClick={() => handleClick(item)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
export default Menu;
