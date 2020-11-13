const InputField = ({ className, handleChange, isRequired, name, placeholder, type, value }) => (
  <input
    className={`w-full border rounded-sm p-2 outline-none ${className}`}
    name={name}
    type={type}
    placeholder={placeholder}
    autoComplete="off"
    required={isRequired}
    value={value}
    onChange={handleChange}
  />
);
InputField.defaultProps = {
  isRequired: false,
  placeholder: '',
  type: 'text'
};

export default InputField;
