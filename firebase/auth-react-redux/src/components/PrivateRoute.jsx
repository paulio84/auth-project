import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => state.auth);
  const isAuthenticated = Object.keys(user).length > 0;

  return (
    <Route
      {...rest}
      render={() => (isAuthenticated ? children : <Redirect to={{ pathname: '/login' }} />)}
    />
  );
};

export default PrivateRoute;
