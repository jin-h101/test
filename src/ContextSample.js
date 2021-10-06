import React, { createContext, useContext,useState } from "react";

const MyContext = createContext("aaaaa");

function Child() {
  const text = useContext(MyContext);
  return <div>하이? {text}</div>;
}

function ParentThree() {
    const [value,setValue] =useState(true);
  return (
    <MyContext.Provider value="ttt">
        <Child />
    </MyContext.Provider>
  );
}

export default ParentThree;
