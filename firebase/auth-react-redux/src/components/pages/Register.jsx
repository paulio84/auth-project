import { Link } from 'react-router-dom';
import InputField from '../InputField';
import PasswordField from '../PasswordField';
import { useApplyCSSClass, useAuthForm } from '../../hooks';

const Register = () => {
  const authForm = useAuthForm({ email: '', fullname: '', location: '', password: '' });
  useApplyCSSClass('#root', ['h-full', 'md:bg-pale']);

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white pt-10 md:p-10 md:rounded md:shadow">
          <h1 className="text-center">Sign up for your account</h1>
          <form className="mt-12 space-y-5 pb-4 border-b border-dark mb-4 w-80">
            <InputField
              name="email"
              type="email"
              value={authForm.email}
              handleChange={authForm.handleChange}
              placeholder="Enter email"
              isRequired
            />
            <InputField
              name="fullname"
              value={authForm.fullname}
              handleChange={authForm.handleChange}
              placeholder="Enter full name"
              isRequired
            />
            <InputField
              name="location"
              value={authForm.location}
              handleChange={authForm.handleChange}
              placeholder="Enter location"
            />
            <PasswordField
              name="password"
              value={authForm.password}
              handleChange={authForm.handleChange}
            />
            <button className="w-full border rounded-sm bg-react-blue p-2">Register</button>
          </form>
          <div className="text-center text-sm">
            <div>
              Already have an account?{' '}
              <Link to="/login" className="underline">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
