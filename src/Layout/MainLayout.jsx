import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/shared/navbar/NavBer";
import Footer from "../components/shared/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;