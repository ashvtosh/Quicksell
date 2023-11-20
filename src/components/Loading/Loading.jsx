import React from "react";
import { PulseLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PulseLoader color="#4fa94d" size={15} margin={5} loading={true} />
      <h2
        style={{
          color: "#4fa94d",
          fontWeight: "bold",
          marginTop: "20px",
          letterSpacing: "2px",
        }}
      >
        Loading...
      </h2>
    </div>
  );
};

export default Loading;

