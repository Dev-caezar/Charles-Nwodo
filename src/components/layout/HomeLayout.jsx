import React from "react";
import { Footer, Header } from "../static";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="flex-1">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
