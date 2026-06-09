import MainLayout from "../../layouts/MainLayout";

const Reports = () => {
  return (
    <MainLayout>
      <h1>Financial Reports</h1>

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h3>Monthly Summary</h3>

        <p>Total Income : ₹60,000</p>

        <p>Total Expenses : ₹35,000</p>

        <p>Total Savings : ₹25,000</p>
      </div>
    </MainLayout>
  );
};

export default Reports;