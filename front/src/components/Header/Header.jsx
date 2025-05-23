import { Button } from "@mui/material";
import Login from "../Login/Login";
import AnchorTemporaryDrawer from "./AnchorTemporaryDrawer";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRecordClick = () => {
    navigate("/");
  };

  return (
    <div>
      <header className="header">
        <h2 className="header-title">MemoriDays</h2>
        <Button onClick={handleLoginClick}>ログイン</Button>
        <Button onClick={handleRecordClick}>一覧画面</Button>

        <div className="drawer-container">
          <AnchorTemporaryDrawer />
        </div>
      </header>
    </div>
  );
}

export default Header;
