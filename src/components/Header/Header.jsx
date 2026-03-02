import "./Header.scss";
import Menu from "../Menu/Menu";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", to: "/home" },
    { label: "Resume", to: "/resume" },
    // { label: "Portfolio", to: "/portfolio" },
    // Projects removed
    {
      label: "Blog",
      to: "https://anirbansinha.notion.site/a0bcc45fa11c47fb99ab7d24dadecd49?v=5519d501ffd74921b9903e65dad4691b",
      external: true,
    },
  ];

  const handleClick = (item) => {
    if (item.external) {
      // full page redirect for external links
      window.location.href = item.to;
    } else {
      navigate(item.to);
    }
  };

  return (
    <header className="site-header">
      <Menu items={menuItems} handleClick={handleClick} />
    </header>
  );
}

export default Header;
