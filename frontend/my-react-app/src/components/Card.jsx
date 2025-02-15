const Card = ({ title, description, icon: Icon }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "16px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        transition: "box-shadow 0.3s ease-in-out",
      }}
      onMouseEnter={(e) => (e.target.style.boxShadow = "0px 6px 10px rgba(0, 0, 0, 0.15)")}
      onMouseLeave={(e) => (e.target.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)")}
    >
      {Icon && <Icon size={40} style={{ color: "#2F855A" }} />} {/* Green-700 */}
      <div>
        <h2 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#1F2937" }}>
          {title}
        </h2>
        <p style={{ fontSize: "0.875rem", color: "#4B5563" }}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
