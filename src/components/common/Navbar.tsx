interface NavbarProps {
  isMobile: boolean;
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

const Navbar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: NavbarProps) => {
  return (
    <div
      style={{
        height: "70px",
        borderBottom: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        background: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <button
          onClick={() =>
            setIsSidebarOpen(!isSidebarOpen)
          }
          style={{
            border: "none",
            background: "transparent",
            fontSize: "28px",
            cursor: "pointer",
          }}
        >
          ☰
        </button>

        <h2>Dashboard</h2>
      </div>

      <div>👤 Bhavini</div>
    </div>
  );
};

export default Navbar;