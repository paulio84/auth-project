import { Link } from 'react-router-dom';
import Icon from './Icon';

const Header = ({ className }) => (
  <header className={className}>
    <Link to="/" className="flex items-center justify-center">
      <Icon />
      <h1 className="font-asap text-2xl">Auth React-Redux</h1>
    </Link>
  </header>
);

export default Header;
