import Link from "next/link";
import navStyle from "../styles/Nav.module.css";
const Nav = () => {
  return (
    <nav className={navStyle.nav}>
      <ul>
        <li>
          <Link href="/">Users</Link>
        </li>
        <li>
          <Link href="/todos">Todos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
