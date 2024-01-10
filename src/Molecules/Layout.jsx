import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen font-inter">
      <Navbar />
      <div className="flex overflow-hidden">
        <Sidebar />
        <MainContent>{children}</MainContent>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
