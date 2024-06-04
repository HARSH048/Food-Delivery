import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

function App() {
  const [login, showLoginPopUp] = useState(false);
  return (
    <>
      {login ? <LoginPopup  setLogin={showLoginPopUp}/> : <></>}
      <div className="app">
        <Navbar setLogin={showLoginPopUp}/>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
