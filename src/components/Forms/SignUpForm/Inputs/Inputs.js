import React from 'react';
import { InputTag } from './InputStyles';

const Input = ({
  border,
  placeholder,
  type,
  name,
  required,
  register,
  errors
}) => {
  return (
    <>
      <InputTag
        type={type}
        border={border}
        placeholder={placeholder}
        name={name}
        ref={register({ required })}
      />
      {console.log(errors)}
      {errors.firstName && <p>First Name cannot be empty</p>}
    </>
  );
};

export default Input;
