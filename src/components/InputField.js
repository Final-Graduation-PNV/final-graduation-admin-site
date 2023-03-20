const InputField = ({
    name,
    type = "text",
    placeholder,
    onChange,
    className,
    value,
    required = false,

}) => {
    return (
        <input
            className={`input-field ${className}`}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
        />
    );
};
export default InputField;
