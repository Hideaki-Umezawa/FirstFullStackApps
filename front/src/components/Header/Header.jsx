import AnchorTemporaryDrawer from "./AnchorTemporaryDrawer";
import "./Header.css";
function Header() {
  return (
    <div>
      <header className="header">
        <h2 className="header-title">MemoriDays</h2>
        <div className="drawer-container">
          <AnchorTemporaryDrawer />
        </div>
      </header>
    </div>
  );
}

export default Header;
