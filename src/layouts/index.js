import React from "react";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

// Styles & Fonts
import "typeface-noto-sans-sc";
import "../styles/global.scss";
// import "../assets/fonts/icons/icons.css";

// Icons

const Layout = ({ children, location }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}


export default Layout