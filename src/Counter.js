//useReducer 사용!!!
import React, { useReducer, useRef } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      throw new Error("no!!!!");
  }
}

function Counter() {
 const [n,dispatch]=useReducer(reducer,0);
   
  const increase = () => {
   dispatch({
     type:"INCREMENT"
   })
  };
  const decrease = () => {
    dispatch({
      type:"DECREMENT"
    })
  };

  // 위와 동일(함수형태)
  //   const increase = () => {
  //     setNumber((prevNumber) => prevNumber + 1);
  //   };
  //   const decrease = () => {
  //     setNumber((prevNumber) => prevNumber - 1);
  //   };
  return (
    <div>
      <h1>{n}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
}

export default Counter;

//useState 사용!!!
// import React, { useState } from "react";

// function Counter() {
//   const [n, changeNumber] = useState(0); //[현재상태,상태를 바꾸는 함수], useState=함수형 업데이트

//     const increase = () => {
//       changeNumber(n + 1);
//     };
//     const decrease = () => {
//       changeNumber(n - 1);
//     };

// // 위와 동일(함수형태)
// //   const increase = () => {
// //     setNumber((prevNumber) => prevNumber + 1);
// //   };
// //   const decrease = () => {
// //     setNumber((prevNumber) => prevNumber - 1);
// //   };
//   return (
//     <div>
//       <h1>{n}</h1>
//       <button onClick={increase}>+1</button>
//       <button onClick={decrease}>-1</button>
//     </div>
//   );
// }

// export default Counter;
