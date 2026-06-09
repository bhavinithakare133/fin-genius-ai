import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "250px",
        background: "#1E293B",
        color: "white",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "white",
        }}
      >
        FinGenius AI
      </h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Link style={linkStyle} to="/dashboard">
          Dashboard
        </Link>

        <Link style={linkStyle} to="/expenses">
          Expenses
        </Link>

        <Link style={linkStyle} to="/goals">
          Goals
        </Link>

        <Link style={linkStyle} to="/budget">
          Budget
        </Link>

        <Link style={linkStyle} to="/advisor">
          AI Advisor
        </Link>

        <Link style={linkStyle} to="/reports">
          Reports
        </Link>
      </nav>
    </div>
  );
};

const linkStyle = {
  color: "#E2E8F0",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "500",
  padding: "12px",
  borderRadius: "8px",
};

export default Sidebar;