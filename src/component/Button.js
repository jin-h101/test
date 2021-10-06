import React from 'react';
import classNames from 'classnames';
import './Button.scss';

//l,m,s

function Button({ children, size, color, outline, fullWidth, ...rest }) {
  return (
    <button
      className={classNames('Button', size, color, { outline, fullWidth })}
      {...rest} // onClick, onMouseMove 등 이벤트를 전달하기 위해 사용
    >
      {children}
    </button>
  );
} // outline은 객체안에 집어넣어 true일때만 클래스 적용

Button.defaultProps = {
  size: 'medium',
  color: 'blue',
};

export default Button;
