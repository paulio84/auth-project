import { Link } from 'react-router-dom';
import PasswordField from '../PasswordField';
import { useApplyCSSClass } from '../../hooks';

const Register = () => {
  useApplyCSSClass('#root', ['h-full', 'md:bg-pale']);

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white pt-10 md:p-10 md:rounded md:shadow">
          <h1 className="text-center">Sign up for your account</h1>
          <form className="mt-12 space-y-5 pb-4 border-b border-dark mb-4 w-80">
            <input
              className="w-full border rounded-sm p-2 outline-none"
              type="email"
              placeholder="Enter email"
              autoComplete="off"
              required
            />
            <input
              className="w-full border rounded-sm p-2 outline-none"
              type="text"
              placeholder="Enter full name"
              autoComplete="off"
              required
            />
            <input
              className="w-full border rounded-sm p-2 outline-none"
              type="text"
              placeholder="Enter location"
              autoComplete="off"
            />
            <PasswordField className="w-full border rounded-sm p-2" />
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
