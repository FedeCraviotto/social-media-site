import "./navbar.scss";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/HouseOutlined";
import DarkModeSunIcon from "@mui/icons-material/Brightness6Outlined";
import DarkModeMoonIcon from "@mui/icons-material/Brightness4Outlined";
import AppIcon from "@mui/icons-material/AppsOutlined";
import NotificationIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MailIcon from "@mui/icons-material/MailOutlined";
import UserIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import sampleImage from "../../assets/images/users/images/guitarrist-playing.jpg";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

function Navbar() {
  const { toggleMode, darkMode } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">
          <span>Home</span>
        </Link>
        <HomeIcon />
        {darkMode ? (
          <DarkModeSunIcon onClick={toggleMode} />
        ) : (
          <DarkModeMoonIcon onClick={toggleMode} />
        )}
        <AppIcon />
        <div className="search">
          <SearchIcon />
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className="right">
        <UserIcon />
        <MailIcon />
        <NotificationIcon />
        <div className="user">
          <img src={sampleImage} alt="Sample Guitarrist" />
          <span>Fede Craviotto</span>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
