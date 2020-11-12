import { useState } from 'react';
import hidePasswordIcon from '../assets/hide-password.svg';
import showPasswordIcon from '../assets/show-password.svg';

const PasswordField = ({ className }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleOnClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`flex ${className}`}>
      <input
        className="flex-grow outline-none mr-2"
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter password"
        autoComplete="off"
        required
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
