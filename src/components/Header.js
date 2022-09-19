import React from "react";
// import Logo from "../Images/starbucks-logo.jpeg";
const Header = () => {
  return (
    <header className="w-full h-16 flex  items-center justify-center bg-slate-800 text-white ">
      <nav className="w-10/12 h-full flex justify-between items-center">
        {/* <img className="w-20 h-12 object-fit" src={Logo} alt="Company logo" /> */}{" "}
        <h1 className="text-amber-50 text-2xl font-bold">LOGO</h1>
        <ul className="w-80 h-full font-semibold flex justify-between items-center ">
          <li>About Us</li> <li>Contact</li> <li>Service</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
