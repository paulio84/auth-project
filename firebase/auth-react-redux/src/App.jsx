import { Switch } from 'react-router-dom';
import { useApplyCSSClass } from './hooks';
import Layout from './components/Layout';
import { Home, LogIn, Register, NotFound, ForgotPassword } from './components/pages';
import PrivateRoute from './components/PrivateRoute';
import ExtendedRoute from './components/ExtendedRoute';

const App = () => {
  useApplyCSSClass('body', ['h-screen', 'text-dark']);

  return (
    <Layout>
      <Switch>
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
        <ExtendedRoute path="/login">
          <LogIn />
        </ExtendedRoute>
        <ExtendedRoute path="/register">
          <Register />
        </ExtendedRoute>
        <ExtendedRoute path="/forgotpassword">
          <ForgotPassword />
        </ExtendedRoute>
        <ExtendedRoute path="*">
          <NotFound />
        </ExtendedRoute>
      </Switch>
    </Layout>
  );
};

export default App;
