import { useState } from 'react';

const useAuthForm = (authFields) => {
  const [authForm, setAuthForm] = useState(authFields);

  const handleChange = (e) => {
    setAuthForm({ ...authForm, [e.target.name]: e.target.value });
  };

  return {
    authForm,
    handleChange
  };
};

export default useAuthForm;
