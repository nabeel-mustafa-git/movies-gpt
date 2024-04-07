import { Link } from "react-router-dom";
import Header from "./Header";
import { useRef, useState } from "react";
import checkValidateData from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { MOVIES_BG_IMAGE } from "../utils/constants";

const Login = ({ login = true }) => {
  const [validationError, setValidationError] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();

    const result =
      login === true
        ? checkValidateData("Dummy", email.current.value, password.current.value)
        : checkValidateData(name.current.value, email.current.value, password.current.value);

    setValidationError(result);
    if (result) return;

    if (login === false) {
      //sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const user = auth.currentUser;
              // dispatch(addUser({ uid: user.uid, email: user.email, displayName: user.displayName }));
            })
            .catch((error) => {
              alert("Error: " + error);
            });
        })
        .catch((error) => {
          alert("Error: " + error);
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        })
        .catch((error) => {
          alert("Error: User not Found");
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return (
    <div className="relative w-full min-h-svh h-fit flex flex-col items-center max-md:bg-black">
      {login === true ? <Header /> : <Header signin={true} />}
      <img draggable="false" className="absolute z-[-99] top-0 left-0 w-full h-full object-cover max-md:hidden bg-black" src={MOVIES_BG_IMAGE} />
      <div className=" bg-black md:w-[500px] max-md:w-full  rounded-md p-16 pb-36 bg-opacity-80 my-32">
        <form className="flex flex-col gap-4">
          <label className="text-white font-bold text-4xl pb-6">{login === true ? "Sign In" : "Sign Up"}</label>
          {login === true ? (
            ""
          ) : (
            <input
              type="text"
              ref={name}
              placeholder="Full Name"
              className="text-white bg-transparent border border-gray-400 px-6 py-3 rounded-md font-semibold"
            />
          )}
          <input
            type="email"
            ref={email}
            placeholder="Enter Your Email"
            className="text-white bg-transparent border border-gray-400 px-6 py-3 rounded-md font-semibold"
          />
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="text-white bg-transparent border px-6 py-3 rounded-md border-gray-400 font-semibold"
          />
          <div className="color-red">{validationError === null ? "" : validationError.map((item, index) => <p key={index}>{item}</p>)}</div>
          <button
            onClick={handleButtonClick}
            className="bgrd-red text-white font-semibold py-2 w-full rounded-md duration-150 ease-linear hover:bg-red-800"
          >
            {login === true ? "Sign In" : "Sign Up"}
          </button>
          {login === true ? (
            <p className="text-gray-400">
              New to Movai?{" "}
              <Link to="/signup">
                <span className="text-white font-semibold">Sign up now.</span>
              </Link>
            </p>
          ) : (
            <p className="text-gray-400">
              Already a User?{" "}
              <Link to="/">
                <span className="text-white font-semibold">Sign in here.</span>
              </Link>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
