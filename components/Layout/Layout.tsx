import Header from './Header';

type PropTypes = {
  children: React.ReactNode;
};

const Layout = ({ children }: PropTypes) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
