import { Redirect, Route } from 'react-router-dom';
import { useAuthStore } from '../hooks';

const ExtendedRoute = ({ children, path }) => {
  const { isAuthenticated } = useAuthStore();

  return (
    <Route
      path={path}
      render={() => (isAuthenticated ? <Redirect to={{ pathname: '/' }} /> : children)}
    />
  );
};

export default ExtendedRoute;
