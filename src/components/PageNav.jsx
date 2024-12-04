import { NavLink } from "react-router-dom";
import style from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <NavLink to={"/"}>Homepage</NavLink>
        </li>
        <li>
          <NavLink to={"/products"}>Products</NavLink>
        </li>
        <li>
          <NavLink to={"/pricing"}>Pricing</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
