import { NavLink } from "react-router-dom";
import styles from "./Menu.module.scss";

function Menu({ menuItems, handleClick }) {
  return (
    <div className={styles.menu}>
      {menuItems.map((item, i) => {
        return (
          <NavLink
            to={item}
            key={i}
            className={styles.menuItem}
            onClick={() => handleClick(item)}
          >
            {item}
          </NavLink>
        );
      })}
    </div>
  );
}
export default Menu;
