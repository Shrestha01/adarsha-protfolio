import React from "react";
import { useField } from "formik";

const InputFieldComp = ({ label, isTextarea, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label>{label}</label>
      <br />
      {isTextarea ? (
        <textarea {...field} {...props} />
      ) : (
        <input {...field} {...props} />
      )}
      <br />
      <span className="text-red-600 text-sm">{meta.error}</span>
    </div>
  );
};

export default InputFieldComp;
