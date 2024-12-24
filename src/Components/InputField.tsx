

import React from 'react';

interface InputFieldProps {
  name: string;
  type: string;
  id: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ name, type, id, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
    />
  );
};

export default InputField;