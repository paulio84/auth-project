import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useApplyCSSClass } from './hooks';
import Layout from './components/Layout';
import { Home, Login, Register, NotFound } from './components/pages';

const App = () => {
  useApplyCSSClass('body', ['h-screen', 'text-dark']);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
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
