import { Outlet } from "react-router-dom";
import "./layout.scss";
import "../../common.scss";
import Navbar from "../Navbar/Navbar";
import LeftBar from "../Leftbar/LeftBar";
import RightBar from "../Rightbar/RightBar";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function Layout() {
  const queryClient = new QueryClient();

  const { darkMode } = useContext(DarkModeContext);

  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
export default Layout;
