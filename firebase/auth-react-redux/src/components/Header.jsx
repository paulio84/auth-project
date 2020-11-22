import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks';
import { logout } from '../store/features/auth/authSlice';
import ReactIcon from './ReactIcon';

const Header = ({ className }) => {
  const { isAuthenticated } = useAuth();
  const dispatch = useDispatch();

  return (
    <header className={`${className} ${isAuthenticated ? 'flex justify-between' : ''}`}>
      <Link to="/" className="flex items-center justify-center">
        <ReactIcon className="mr-2" />
        <h1 className="font-asap text-2xl">Auth React-Redux</h1>
      </Link>
      {isAuthenticated && <button onClick={() => dispatch(logout())}>Logout</button>}
    </header>
  );
};

export default Header;
