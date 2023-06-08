import React from "react";
import { Routes, Route } from "react-router-dom";

function Footer() {
  return (
    <>
      <Routes>
        <Route exact path="/" />
      </Routes>
      <footer className="footer">
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Mesto Russia
        </p>
      </footer>
    </>
  );
}

export default Footer;