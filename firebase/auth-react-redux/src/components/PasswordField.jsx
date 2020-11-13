import { useState } from 'react';
import InputField from './InputField';
import hidePasswordIcon from '../assets/hide-password.svg';
import showPasswordIcon from '../assets/show-password.svg';

const PasswordField = ({ className, name, value, handleChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleOnClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`flex w-full border rounded-sm pr-2`}>
      <InputField
        name={name}
        value={value}
        handleChange={handleChange}
        className="flex-grow border-none"
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter password"
        isRequired
      />
      <img
        className="cursor-pointer"
        onClick={handleOnClick}
        src={showPassword ? hidePasswordIcon : showPasswordIcon}
        alt="Show Password"
        width="24"
        height="24"
      />
    </div>
  );
};

export default PasswordField;
