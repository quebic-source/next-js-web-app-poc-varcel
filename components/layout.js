import Footer from "./footer";
import NavBar from "./navbar";

export default function Layout({ children }) {
    return (
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>
        )
}