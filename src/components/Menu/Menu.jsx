import { NavLink } from "react-router-dom";
import styles from "./Menu.module.scss";

// items: array of { label, to, external? }
function Menu({ items, handleClick }) {
  return (
    <nav className={styles.menu}>
      {items.map((item, i) => {
        if (item.external) {
          return (
            <a
              href={item.to}
              key={i}
              className={styles.menuItem}
              onClick={() => handleClick(item)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>{item.label}</strong>
            </a>
          );
        }

        return (
          <NavLink
            to={item.to}
            key={i}
            className={styles.menuItem}
            onClick={() => handleClick(item)}
          >
            <strong>{item.label}</strong>
          </NavLink>
        );
      })}
    </nav>
  );
}
export default Menu;
