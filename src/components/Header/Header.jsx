import "./Header.scss";
import Menu from "../Menu/Menu";
function Header() {
  const pages = ["Home", "About", "Projects", "Blog"];

  return (
    <>
      <Menu menuItems={pages} handleClick={routeToPage} />
    </>
  );
}

function routeToPage(page) {
  console.log(page);
}

export default Header;
