import { Link } from 'react-router-dom';
import InputField from '../InputField';
import PasswordField from '../PasswordField';
import { useApplyCSSClass, useAuthForm } from '../../hooks';

const LogIn = () => {
  const authForm = useAuthForm({ email: '', password: '' });
  useApplyCSSClass('#root', ['h-full', 'md:bg-pale']);

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white pt-10 md:p-10 md:rounded md:shadow">
          <h1 className="text-center">Sign up for your account</h1>
          <form className="mt-12 space-y-5 pb-4 border-b border-dark mb-4 w-80">
            <InputField
              name="email"
              value={authForm.email}
              handleChange={authForm.handleChange}
              type="email"
              placeholder="Enter email"
              isRequired
            />
            <PasswordField
              name="password"
              value={authForm.password}
              handleChange={authForm.handleChange}
            />
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
