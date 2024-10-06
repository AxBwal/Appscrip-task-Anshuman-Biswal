const SkeletonProduct = () => {
    return (
      <div style={{ padding: "20px", width: "200px" }}>
        <div
          style={{
            backgroundColor: "#f0f0f0",
            height: "200px",
            marginBottom: "10px",
            animation: "pulse 1.5s infinite",
          }}
        />
        <div
          style={{
            backgroundColor: "#f0f0f0",
            height: "20px",
            width: "70%",
            marginBottom: "8px",
            animation: "pulse 1.5s infinite",
          }}
        />
        <div
          style={{
            backgroundColor: "#f0f0f0",
            height: "20px",
            width: "40%",
            animation: "pulse 1.5s infinite",
          }}
        />
      </div>
    );
  };
export default SkeletonProduct  