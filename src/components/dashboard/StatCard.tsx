interface StatCardProps {
  title: string;
  value: string;
}

const StatCard = ({ title, value }: StatCardProps) => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        minHeight: "120px",
      }}
    >
      <h3
        style={{
          color: "#64748B",
          marginBottom: "12px",
        }}
      >
        {title}
      </h3>

      <h2>{value}</h2>
    </div>
  );
};

export default StatCard;