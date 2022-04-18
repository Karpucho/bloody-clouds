import React from 'react';
import './input.less'

function Input({props}) {
  return (
    <input type={props.type} placeholder={props.placeholder} />
  );
}

export default Input;
