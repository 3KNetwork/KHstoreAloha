import React from "react";
import Confetti from "react-confetti";

export default () => {
  return (
    <div style={{ position: "relative" }}>
      <Confetti
        style={{
          zIndex: -1000,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "0.4",
        }}
        numberOfPieces={30}
      />
    </div>
  );
};
