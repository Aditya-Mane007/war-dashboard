import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer";
// import Styles from "./HomeLayout.module.css";

function HomeLayout({ children }) {
  return (
    <div className="homeLayout">
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default HomeLayout;
