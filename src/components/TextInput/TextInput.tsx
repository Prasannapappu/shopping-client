import React from "react";

import "./textInput.css";

interface TextInputProps {
  label?: string;
  id?: string;
  requiredStatus?: boolean;
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  values?: string | number | Array<string>;
  name?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  errors?: string | Array<string> | any;
  addClass?: string;
  progress?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  id,
  requiredStatus,
  type,
  placeholder,
  onChange,
  disabled,
  onBlur,
  onFocus,
  values,
  name,
  errors,
  onKeyDown,
  addClass,
}) => {
  return (
    <div className="input-group">
      {label && (
        <label htmlFor={id}>
          {label}
          {requiredStatus && (
            <sup className="validation-required">&#10033;</sup>
          )}
        </label>
      )}
      <input
        className={`text-field w-full ${addClass || ""} ${
          errors ? "input-error" : ""
        }`}
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        id={id}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        value={values}
        name={name}
      />
      {errors && (
        <div className="form-error-msg" aria-live="assertive">
          <p>{errors}</p>
        </div>
      )}
    </div>
  );
};
