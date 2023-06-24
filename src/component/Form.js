import React from 'react';

const Form = (props) => {
  const { label, error, ...inputProps } = props;
  return (
    <div className="in_fom">
      <input className="input_text" {...inputProps} autoComplete="off" />
      <span className="form_label">{label}</span>
      <span className="error">{error}</span>
    </div>
  );
};

export default Form;
