import React from 'react';
import Header from './header';
import Footer from './footer';
import "../components/main.css"
import '../styles/animate.min.css';
import { useEffect } from 'react';
import WOW from 'wowjs';




const PageLayout = ({ children }) => {

  return (

    useEffect(() => {
      new WOW.WOW({
        live: false
      }).init();
    }, []),

    <div className="min-h-screen">
      <Header siteTitle={"Randal.io"}></Header>
      <main className="site-content">
        {children}
      </main>
      <Footer siteTitle={"Randal.io"}></Footer>
    </div>
  );
};




export default PageLayout;
