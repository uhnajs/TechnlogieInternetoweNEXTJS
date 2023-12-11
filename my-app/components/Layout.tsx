// components/Layout.tsx

import Navbar from './Navbar'; // Załóżmy, że Navbar jest eksportowany domyślnie
import Footer from './Footer'; // Załóżmy, że Footer jest eksportowany domyślnie

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
