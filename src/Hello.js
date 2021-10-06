import React from "react";

function Hiyam({ color, name, isTrue }) {
  return (
    <div
      style={{
        color,
      }}
    >
      {isTrue && <b>*</b>}
      {/* <b>{isTrue ? "스페셜하다" : "안스페셜하다"}</b> */}
      안녕하세요 {name}
    </div>
  );
}

Hiyam.defaultProps = {
  name: "벌써 어렵다",
};

export default Hiyam;
