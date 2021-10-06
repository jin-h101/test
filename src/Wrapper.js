import React from "react";

function Wrapper({ children }) {
  const styleOne = {
    border: "2px solid black",
    padding: 16,
  };
  return <div style={styleOne}>{children}</div>;
}

export default Wrapper;
