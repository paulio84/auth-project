import Icon from './Icon';

const Header = ({ className }) => (
  <header className={className}>
    <div className="flex items-center justify-center">
      <Icon />
      <h1 className="font-asap text-2xl">Auth React-Redux</h1>
    </div>
  </header>
);

export default Header;
