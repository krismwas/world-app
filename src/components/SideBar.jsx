import style from "./Sidebar.module.css";
import Logo from "./Logo.jsx";
import AppNav from "./AppNav.jsx";
import { Outlet } from "react-router-dom";

function SideBar() {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className="styles.footer">
        <p className={style.copyright}>
          &copy; Copyright {new Date().getFullYear()}The world app inc
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
