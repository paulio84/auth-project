import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Header className="container mx-auto px-4 py-8" />
    <section className="container mx-auto px-4">{children}</section>
  </>
);

export default Layout;
