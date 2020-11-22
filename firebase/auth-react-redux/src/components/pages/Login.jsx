import { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InputField from '../InputField';
import PasswordField from '../PasswordField';
import { useApplyCSSClass, useAuth, useAuthForm } from '../../hooks';
import { login, clearAuthErrors } from '../../store/features/auth/authSlice';

const LogIn = () => {
  const { authForm, handleChange } = useAuthForm({ email: '', password: '' });
  useApplyCSSClass('#root', ['h-full', 'md:bg-pale']);

  const { isAuthenticated, error } = useAuth();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(authForm));
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
          <h1 className="text-center">Log in to your account</h1>
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
            <PasswordField name="password" value={authForm.password} handleChange={handleChange} />
            <button className="w-full border rounded-sm bg-react-blue p-2">Log In</button>
          </form>
          <div className="text-center text-sm">
            <div className="mb-2">Forgot your password?</div>
            <div>
              Don't have an account?{' '}
              <Link to="/register" className="underline">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
