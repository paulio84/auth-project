import { useEffect } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InputField from '../InputField';
import { useApplyCSSClass, useAuth, useAuthForm } from '../../hooks';
import { forgotPassword, clearAuthErrors } from '../../store/features/auth/authSlice';

const ForgotPassword = () => {
  const history = useHistory();
  const { authForm, handleChange } = useAuthForm({ email: '' });
  useApplyCSSClass('#root', ['h-full', 'md:bg-pale']);

  const { isAuthenticated, error } = useAuth();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(authForm));
    history.push('/');
  };

  useEffect(() => {
    return () => {
      dispatch(clearAuthErrors());
    };
  }, [dispatch]);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white pt-10 md:p-10 md:rounded md:shadow">
          <h1 className="text-center">Reset Password</h1>
          <form
            onSubmit={handleSubmit}
            className="mt-12 space-y-5 pb-4 border-b border-dark mb-4 w-80"
          >
            {error.message && <p className="text-center text-red-600">{error.message}</p>}
            <InputField
              name="email"
              value={authForm.email}
              handleChange={handleChange}
              type="email"
              placeholder="Enter email"
              isRequired
            />
            <button className="w-full border rounded-sm bg-react-blue p-2">Reset Password</button>
          </form>
          <div className="text-center text-sm">
            <Link to="/login">Login</Link> or <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
