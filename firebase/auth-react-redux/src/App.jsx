import { useBodyClass } from './hooks';
import Header from './components/Header';

const App = () => {
  useBodyClass('bg-pale');

  return (
    <>
      <Header />
      <div>Hello World</div>
    </>
  );
};
export default App;
