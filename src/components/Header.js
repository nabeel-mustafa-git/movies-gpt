import React from "react";

const Header = ({ signin = false }) => {
  return (
    <nav className="absolute z-10 flex w-full px-40 justify-between items-center bg-gradient-to-b from-black pb-40">
      <img
        draggable="false"
        className="w-[200px]"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {signin === true ? <button className="bg-[#C11119] text-white font-semibold py-2 text-sm px-5 rounded-md">Sign In</button> : ""}
    </nav>
  );
};

export default Header;
