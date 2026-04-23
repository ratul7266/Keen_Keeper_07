import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/shared/navbar/NavBer";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;