import "./Header.scss";
import Menu from "../Menu/Menu";
function Header() {
  const pages = ["Home", "About Me", "Projects", "Blog"];

  return (
    <>
      <Menu menuItems={pages} />
    </>
  );
}

export default Header;
