import MainLayout from "../../layouts/MainLayout";
import { useState } from "react";

const AIAdvisor = () => {
  const [question, setQuestion] =
    useState("");

  return (
    <MainLayout>
      <h1>AI Financial Advisor</h1>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <textarea
          rows={4}
          placeholder="Ask your financial question..."
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
          style={{
            width: "100%",
            padding: "10px",
          }}
        />

        <button
          style={{
            marginTop: "10px",
            padding:
              "10px 20px",
          }}
        >
          Ask AI
        </button>
      </div>

      <div
        style={{
          background: "#fff",
          marginTop: "20px",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        AI Response will appear here.
      </div>
    </MainLayout>
  );
};

export default AIAdvisor;