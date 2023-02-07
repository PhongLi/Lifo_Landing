import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function DefaultLayout({ children }) {
    return (
        <div className=" relative flex flex-col">
            <Navbar />
            <div className="">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
