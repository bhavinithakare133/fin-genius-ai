import MainLayout from "../../layouts/MainLayout";

const Goals = () => {
  return (
    <MainLayout>
      <h1>Financial Goals</h1>

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h3>Goa Vacation</h3>

        <p>₹20,000 / ₹50,000</p>

        <progress
          value={20000}
          max={50000}
          style={{ width: "100%" }}
        />
      </div>
    </MainLayout>
  );
};

export default Goals;