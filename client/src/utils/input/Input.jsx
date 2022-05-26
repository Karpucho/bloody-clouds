import React from 'react';
import './input.css'

function Input(props) {
  return (
[      <input onChange={(event) => props.setValue(event.target.value)}
              value={props.value}
              type={props.type}
              placeholder={props.placeholder}
              className="form-control" 
              style={{borderRadius: 10}}
              />]
  );
}

export default Input;
