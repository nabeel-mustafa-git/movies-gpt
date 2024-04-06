import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/movai-logo.png";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = ({ signin = false }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in or signed up
        dispatch(addUser({ uid: user.uid, email: user.email, displayName: user.displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsub();
  }, []);
  return (
    <nav className="absolute z-10 flex w-full px-40 max-md:px-5 justify-between items-center bg-gradient-to-b from-black pb-40">
      <img draggable="false" className="w-[180px] max-md:w-[120px]" src={logo} />
      {signin === true ? (
        <Link to="/">
          <button className="bgrd-red text-white font-semibold py-2 text-sm px-5 duration-150 ease-linear rounded-md hover:bg-red-800">
            Sign In
          </button>
        </Link>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Header;
