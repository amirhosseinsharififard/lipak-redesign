import Footer from "../module/Footer";
import Header from "../module/Header";

const Layout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
