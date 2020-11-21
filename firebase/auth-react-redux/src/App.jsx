import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useApplyCSSClass } from './hooks';
import Layout from './components/Layout';
import { Home, LogIn, Register, NotFound } from './components/pages';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  useApplyCSSClass('body', ['h-screen', 'text-dark']);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
