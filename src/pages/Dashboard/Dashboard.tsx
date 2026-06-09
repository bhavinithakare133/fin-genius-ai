import MainLayout from "../../layouts/MainLayout";
import StatCard from "../../components/dashboard/StatCard";
import ExpenseChart from "../../components/dashboard/ExpenseChart";

const Dashboard = () => {
  return (
    <MainLayout>
      <h1>Financial Dashboard</h1>

      {/* Stat Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" ,
         gap: "20px",
          marginTop: "20px",
        }}
      >
        <StatCard title="Total Balance" value="₹1,25,000" />
        <StatCard title="Income" value="₹60,000" />
        <StatCard title="Expenses" value="₹35,000" />
        <StatCard title="Savings" value="₹25,000" />
      </div>

      {/* Expense Chart */}
      <div style={{ marginTop: "40px" }}>
        <h2>Expense Breakdown</h2>

        <ExpenseChart />
      </div>
    </MainLayout>
  );
};

export default Dashboard;