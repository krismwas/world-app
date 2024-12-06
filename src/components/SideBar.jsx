import style from "./Sidebar.module.css";
import Logo from "./Logo.jsx";
import AppNav from "./AppNav.jsx";

function SideBar() {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNav />

      <p>List of cities</p>

      <footer className="styles.footer">
        <p className={style.copyright}>
          &copy; Copyright {new Date().getFullYear()}The world app inc
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
