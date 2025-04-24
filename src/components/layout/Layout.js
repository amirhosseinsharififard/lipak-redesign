import Header from "../module/Header";

const Layout = ({children}) => {
    return (
        <>
         <Header/>
         {children}   
        </>
    );
}

export default Layout;
