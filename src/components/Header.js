import React from "react";
import { Link } from "react-router-dom";

const Header = ({ signin = false }) => {
  return (
    <nav className="absolute z-10 flex w-full px-40 max-md:px-5 justify-between items-center bg-gradient-to-b from-black pb-40">
      <h2 className="text-[#C11119] text-3xl font-bold py-4 ">
        MOV<span className="text-yellow-400">AI</span>
      </h2>
      {/* <img
        draggable="false"
        className="w-[200px] max-md:w-[140px]"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      /> */}
      {signin === true ? (
        <Link to="/">
          <button className="bg-[#C11119] text-white font-semibold py-2 text-sm px-5 rounded-md">Sign In</button>
        </Link>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Header;
