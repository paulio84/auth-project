import { Link } from 'react-router-dom';
import InputField from '../InputField';
import { useApplyCSSClass, useAuthForm } from '../../hooks';
import { forgotPassword } from '../../store/features/auth/authSlice';

const ForgotPassword = () => {
  const { authForm, handleChange, handleSubmit, error } = useAuthForm(
    { email: '' },
    forgotPassword
  );
  useApplyCSSClass('#root', ['h-full', 'md:bg-pale']);

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
