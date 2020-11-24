import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearAuthErrors } from '../store/features/auth/authSlice';

const useAuthForm = (authFields, action) => {
  const [authForm, setAuthForm] = useState(authFields);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearAuthErrors());
    };
  }, [dispatch]);

  const handleChange = (e) => {
    setAuthForm({ ...authForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(action(authForm));
  };

  return {
    authForm,
    handleChange,
    handleSubmit
  };
};

export default useAuthForm;
