import { Outlet } from "react-router-dom";
import "./layout.scss";
import "../../common.scss";
import Navbar from "../Navbar/Navbar";
import LeftBar from "../Leftbar/LeftBar";
import RightBar from "../Rightbar/RightBar";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

function Layout() {
  

  const { darkMode } = useContext(DarkModeContext);

  return (
    
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div className="layout">
          <LeftBar />
          <div className="outlet">
            <Outlet /> {/*Parte central dinamica. Seteado en children*/}
          </div>
          <RightBar />
        </div>
      </div>
      
  );
}
export default Layout;
