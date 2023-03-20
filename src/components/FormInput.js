const FormInput = ({
    title,
    name,
    type = "text",
    placeholder,
    className = "",
    onChange,
    value,
    required = false,
    error = ""
  }) => {
    return (
      <div className={`form-input ${className}`}>
        <label htmlFor={name}>{title}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
        <div style={{ color: "red", marginBlock: "1rem" }}>
          {error ? error : ""}
        </div>
      </div>
    );
  };
  export default FormInput;
  