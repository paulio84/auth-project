import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useBodyClass } from './hooks';
import Header from './components/Header';
import Home from './components/pages/Home';

const App = () => {
  useBodyClass('bg-pale');

  return (
    <BrowserRouter>
      <Header className="py-4" />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">{/* <Login /> */}</Route>
        <Route path="/register">{/* <Register /> */}</Route>
        <Route path="*">{/* <NotFound /> */}</Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
