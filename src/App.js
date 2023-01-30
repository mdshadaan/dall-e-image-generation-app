import React from "react";
import  ReactDOM  from "react-dom";

import Header from "./components/Header";
import Body from "./components/Body";


const AppLayout = () => {
    return (
        <>
        <Header/>
        <Body/>
        </>
        
        /**
         * heading
         * body
         *    searchbar
         *    imagegrid
         */
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);

