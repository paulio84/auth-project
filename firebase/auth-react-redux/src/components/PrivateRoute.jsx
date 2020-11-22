import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../hooks';

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={() => (isAuthenticated ? children : <Redirect to={{ pathname: '/login' }} />)}
    />
  );
};

export default PrivateRoute;
