import React from "react";
import { DarkModeToggle, Footer, Header } from "../static";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="flex-1">
      <Header />
      <Outlet />
      <DarkModeToggle />
      <Footer />
    </div>
  );
};

export default HomeLayout;
