import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../images/movai-logo.png";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { removeMainMovie } from "../utils/heroMovieSlice";
import { removeNowPlayingMovies } from "../utils/moviesSlice";
import { removePopularMovies } from "../utils/popularMoviesSlice";
import { removeTopRatedMovies } from "../utils/topRatedSlice";
import { removeUpcommingMovies } from "../utils/UpcommingSlice";

const Nav = ({ route }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    setShow(!show);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        alert("Error: " + error);
      });
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in or signed up
        dispatch(addUser({ uid: user.uid, email: user.email, displayName: user.displayName }));
        navigate(route);
      } else {
        // User is signed out
        dispatch(removeUser());
        dispatch(removeMainMovie());
        dispatch(removeNowPlayingMovies());
        dispatch(removePopularMovies());
        dispatch(removeTopRatedMovies());
        dispatch(removeUpcommingMovies());
        navigate("/");
      }
    });
    return () => unsub();
  }, []);

  return (
    <nav className="absolute z-10 flex w-full px-40 max-md:px-5 justify-between items-center bg-gradient-to-b from-black pb-20">
      <Link to="/browse">
        <img draggable="false" className="w-[140px] max-md:w-[100px]" src={logo} />
      </Link>
      <div>
        <div className="relative inline-block text-left">
          <div>
            <button
              onClick={handleClick}
              type="button"
              className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-black bg-opacity-30 px-3 py-1 text-sm font-semibold text-gray-100 shadow-sm ring-1 ring-gray-500 hover:bg-opacity-50"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div
            className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black bg-opacity-50 shadow-lg ring-1 ring-white ring-opacity-30 focus:outline-none ${
              show ? "block" : "hidden"
            }`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <a
                href=""
                className="text-gray-100 block px-4 py-2 text-sm border-b border-gray-700 hover:bg-stone-600"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                {user ? user.displayName : ""}
                {user ? <h5 className="text-gray-400 font-semibol text-base">{user.email}</h5> : ""}
              </a>

              <Link to="/browse">
                <div className="text-gray-100 block px-4 py-2 text-sm hover:bg-stone-600" role="menuitem" tabIndex="-1" id="menu-item-1">
                  Browse
                </div>
              </Link>
              <Link to="/search">
                <div className="text-gray-100 block px-4 py-2 text-sm hover:bg-stone-600" role="menuitem" tabIndex="-1" id="menu-item-1">
                  Search
                </div>
              </Link>
              <Link to="/suggestion">
                <div className="text-gray-100 block px-4 py-2 text-sm hover:bg-stone-600" role="menuitem" tabIndex="-1" id="menu-item-2">
                  AI movie suggestion
                </div>
              </Link>
              <button
                onClick={handleSignOut}
                className="text-gray-100 block w-full px-4 py-2 text-left text-sm border-t border-gray-700 hover:bg-stone-600"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-3"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
