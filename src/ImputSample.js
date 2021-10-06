//!!! useRef로 특정 DOM 선택하기 !!!///////////////////////////////////////////////////////////////////
import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickName: "",
  });
  const nameInput = useRef();
  const { name, nickName } = inputs;

  const onChange = (e) => {
    console.log("e", e.target);
    const { name, value } = e.target; // name과 value는 input 태그의 속성
    setInputs({
      ...inputs, //기존 객체 복사(현재 상태의 내용) - 객체 상태를 업데이트 할 때는 ... 무조건 사용!! 불변성 지키기
      [name]: value, // input의 name에 맞는 value가 교체
    });
  };

  const onReset = (e) => {
    setInputs({
      name: "",
      nickName: "",
    });
    nameInput.current.focus(); //DOM에 있는 focus를 사용!! (ref를 이름 부분에 넣었으므로 초기화 된 포커스도 이름부분에 나타나게 되어야 함)
  };
  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickName"
        placeholder="닉네임"
        onChange={onChange}
        value={nickName}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name}, {nickName}
      </div>
    </div>
  );
}
export default InputSample;





//!!! 여러개 input 상태 관리하기 !!!///////////////////////////////////////////////////////////////////
// import React, { useState } from "react";

// function InputSample() {
//   const [inputs, setInputs] = useState({name:'', nickName:''});
//   const {name, nickName}= inputs;

//   const onChange = (e) => {
//     const {name,value}=e.target; // name과 value는 input 태그의 속성
//     setInputs({
//       ...inputs, //기존 객체 복사(현재 상태의 내용) - 객체 상태를 업데이트 할 때는 ... 무조건 사용!! 불변성 지키기
//       [name]:value, // input의 name에 맞는 value가 교체
//     });
//   };

//   const onReset = (e) => {
//     setInputs({
//       name:'',
//       nickName:'',
//     });
//   };
//   return (
//     <div>
//       <input name="name" placeholder="이름" onChange={onChange} value={name}/>
//       <input name="nickName" placeholder="닉네임" onChange={onChange} value={nickName}/>
//       <button onClick={onReset}>초기화</button>
//       <div>
//         <b>값: </b>
//         {name}, {nickName}
//       </div>
//     </div>
//   );
// }
// export default InputSample;








//!!! input 상태 관리하기 !!!///////////////////////////////////////////////////////////////////
// import React, { useState } from "react";

// function InputSample() {
//   const [text, setText] = useState('');
//   const onChange = (e) => {
//     setText(e.target.value);
//   };
//   const onReset = (e) => {
//     setText('');
//   };
//   return (
//     <div>
//       <input onChange={onChange} value={text}/>
//       <button onClick={onReset}>초기화</button>
//       <div>
//         <b>값: </b>
//         {text}
//       </div>
//     </div>
//   );
// }
// export default InputSample;
