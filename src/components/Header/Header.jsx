import "./Header.scss";
import Menu from "../Menu/Menu";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", to: "/home" },
    { label: "Resume", to: "/resume" },
    // { label: "Build Resume", to: "/build-resume" },
    { label: "Portfolio", to: "/portfolio" },
    // { label: "Terms of Service", to: "/terms-of-service" },
    // { label: "Support", to: "/support" },
    // { label: "Privacy Policy", to: "/privacy-policy" },
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
