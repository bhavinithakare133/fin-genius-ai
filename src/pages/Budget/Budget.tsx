import MainLayout from "../../layouts/MainLayout";

const Budget = () => {
  return (
    <MainLayout>
      <h1>Monthly Budget</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div className="card">
          <h3>Income</h3>
          <p>₹60,000</p>
        </div>

        <div className="card">
          <h3>Needs</h3>
          <p>₹30,000</p>
        </div>

        <div className="card">
          <h3>Wants</h3>
          <p>₹18,000</p>
        </div>

        <div className="card">
          <h3>Savings</h3>
          <p>₹12,000</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Budget;