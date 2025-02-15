import React, { useState } from "react";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import "../styles/diseaseDetection.css";

const DiseaseDetection = () => {
  const [image, setImage] = useState(null);
  const [imageBlob, setImageBlob] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const blobURL = URL.createObjectURL(file);
      setLoading(true);
      setTimeout(() => {
        setImage(blobURL);
        setImageBlob(file);
        setLoading(false);
      }, 1500);
    }
  };

  const handleReplaceImage = () => {
    setImage(null);
    setImageBlob(null);
  };

  const handleGenerateReport = () => {
    if (!imageBlob) {
      alert("Please upload an image first.");
      return;
    }
    alert("RAG is processing the report...");
  };

  return (
    <motion.div 
      className="disease-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h1 className="title">Disease Detection</h1>
      {!image ? (
        <div className="upload-section">
          <label htmlFor="upload" className="upload-label">
            <Leaf size={40} className="icon" />
            <p>Click to Upload an Image</p>
          </label>
          <input type="file" id="upload" accept="image/*" onChange={handleImageUpload} />
        </div>
      ) : (
        <div className="image-preview">
          {loading ? (
            <div className="loading-bar">
              <div className="progress"></div>
            </div>
          ) : (
            <>
              <img src={image} alt="Uploaded" className="uploaded-image" />
              <div className="button-group">
                <button onClick={handleReplaceImage} className="replace-btn">
                  Replace Image
                </button>
                <button onClick={() => window.history.back()} className="back-btn">
                  Go Back
                </button>
                <button onClick={handleGenerateReport} className="report-btn">
                  Generate Report using RAG
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default DiseaseDetection;
