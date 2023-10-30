
import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";


const Layout =({children})=>{
    return(
        <div className="bg-slate-700">
            <Header/>
             <main className="bg-slate-700">{children}</main>
            <Footer/>
        </div>
    );
};


export default Layout;