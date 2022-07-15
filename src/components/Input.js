import React from 'react';
import { Form, Header } from 'semantic-ui-react';

const Input = ({
  error,
  id = '',
  label,
  name,
  onChange,
  placeholder,
  type = 'text',
  value,
}) => {
  return (
    <Form.Field>
      <label
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {error && <span className="input-error">{error}</span>}
    </Form.Field>
  );
};

export default Input;
