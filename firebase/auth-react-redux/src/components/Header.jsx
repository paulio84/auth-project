import { Link } from 'react-router-dom';
import ReactIcon from './ReactIcon';

const Header = ({ className }) => (
  <header className={className}>
    <Link to="/" className="flex items-center justify-center">
      <ReactIcon className="mr-2" />
      <h1 className="font-asap text-2xl">Auth React-Redux</h1>
    </Link>
  </header>
);

export default Header;
