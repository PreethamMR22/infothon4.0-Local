import Card from "../components/Card";
import { Leaf } from "lucide-react";

const DiseaseDetection = () => {
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
        Disease Detection
      </h1>
      <Card
        title="Upload Image"
        description="Upload a leaf image to detect diseases."
        icon={Leaf}
      />
    </div>
  );
};

export default DiseaseDetection;
