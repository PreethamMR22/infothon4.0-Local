import Card from "../components/Card";
import { BarChart } from "lucide-react";

const SeverityAnalysis = () => {
  return (
    <div
      style={{
        padding: "20px", // p-5
      }}
    >
      <h1
        style={{
          fontSize: "1.5rem", // text-2xl
          fontWeight: "600", // font-semibold
          marginBottom: "16px", // mb-4
        }}
      >
        Severity Analysis
      </h1>
      <Card
        title="Analyze Severity"
        description="Check the severity of detected diseases."
        icon={BarChart}
      />
    </div>
  );
};

export default SeverityAnalysis;
