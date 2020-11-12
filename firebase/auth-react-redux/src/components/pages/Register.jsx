import { Link } from 'react-router-dom';
import { useApplyCSSClass } from '../../hooks';

const Register = () => {
  useApplyCSSClass('#root', ['h-full', 'md:bg-pale']);

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white max-w-xs md:max-w-sm pt-6 md:p-6 md:rounded md:shadow">
          <h1 className="text-center">Sign up for your account</h1>
          <form className="mt-12 space-y-5 pb-4 border-b border-dark mb-4">
            <input
              className="w-full border rounded-sm p-2"
              type="email"
              placeholder="Enter email"
              autoComplete="off"
              required
            />
            <input
              className="w-full border rounded-sm p-2"
              type="text"
              placeholder="Enter full name"
              autoComplete="off"
              required
            />
            <input
              className="w-full border rounded-sm p-2"
              type="text"
              placeholder="Enter location"
              autoComplete="off"
            />
            <input
              className="w-full border rounded-sm p-2"
              type="password"
              placeholder="Enter password"
              autoComplete="off"
              required
            />
            <button className="w-full border rounded-sm bg-react-blue p-2">Register</button>
          </form>
          <div className="text-center">
            <span className="text-sm">
              Already have an account?{' '}
              <Link to="/login" className="underline">
                Log In
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
