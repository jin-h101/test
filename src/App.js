import React from 'react';
import Button from './component/Button';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="btns">
        <Button size="large" onClick={() => console.log('클릭!!')}>
          큰 버튼
        </Button>
        <Button>중간 버튼</Button>
        <Button size="small">작은 버튼</Button>
      </div>
      <div className="btns">
        <Button size="large" color="gray">
          큰 버튼
        </Button>
        <Button color="gray">중간 버튼</Button>
        <Button size="small" color="gray">
          작은 버튼
        </Button>
      </div>
      <div className="btns">
        <Button size="large" color="pink">
          큰 버튼
        </Button>
        <Button color="pink">중간 버튼</Button>
        <Button size="small" color="pink">
          작은 버튼
        </Button>
      </div>
      <div className="btns">
        <Button size="large" color="blue" outline>
          큰 버튼
        </Button>
        <Button color="gray" outline>
          중간 버튼
        </Button>
        <Button size="small" color="pink" outline>
          작은 버튼
        </Button>
      </div>
      <div className="btns">
        <Button size="large" fullWidth>
          큰 버튼
        </Button>
        <Button size="large" color="gray" fullWidth>
          중간 버튼
        </Button>
        <Button size="large" color="pink" fullWidth>
          작은 버튼
        </Button>
      </div>
    </div>
  );
}

export default App;

// import React, { useReducer, useMemo, useEffect, useState } from 'react';
// import UserList from './UserList';
// import CreateUser from './CreateUser';

// function countActiveUsers(users) {
//   console.log('활성 사용자 수를 세는중...');
//   return users.filter((user) => user.active).length;
// }

// const initialState = {
//   users: [
//     {
//       id: 1,
//       username: 'velopert',
//       email: 'public.velopert@gmail.com',
//       active: true,
//     },
//     {
//       id: 2,
//       username: 'tester',
//       email: 'tester@example.com',
//       active: false,
//     },
//     {
//       id: 3,
//       username: 'liz',
//       email: 'liz@example.com',
//       active: false,
//     },
//   ],
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'CREATE_USER':
//       return {
//         users: state.users.concat(action.user),
//       };
//     case 'TOGGLE_USER':
//       return {
//         ...state,
//         users: state.users.map((user) =>
//           user.id === action.id ? { ...user, active: !user.active } : user,
//         ),
//       };
//     case 'REMOVE_USER':
//       return {
//         ...state,
//         users: state.users.filter((user) => user.id !== action.id),
//       };
//     default:
//       return state;
//   }
// }

// // UserDispatch 라는 이름으로 내보내줍니다.
// export const UserDispatch = React.createContext(null);

// function App() {
//   const [value, setValue] = useState(0);
//   useEffect(() => {
//     console.log(value);
//   }, []);

//   const [state, dispatch] = useReducer(reducer, initialState);

//   const { users } = state;

//   const count = useMemo(() => countActiveUsers(users), [users]);
//   return (
//     <UserDispatch.Provider value={dispatch}>
//       <CreateUser />
//       <UserList users={users} />
//       <div>활성사용자 수 : {count}</div>
//     </UserDispatch.Provider>
//   );
// }

// export default App;
