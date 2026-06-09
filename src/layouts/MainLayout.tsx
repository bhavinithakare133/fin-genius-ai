import { useState } from "react";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({
  children,
}: MainLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] =
    useState(true);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {isSidebarOpen && <Sidebar />}

      <div
        style={{
          flex: 1,
        }}
      >
        <Navbar
          isMobile={false}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={
            setIsSidebarOpen
          }
        />

        <main
          style={{
            padding: "20px",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;