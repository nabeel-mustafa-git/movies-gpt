import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

const Login = ({ login = true }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative w-full min-h-svh">
      <Header />
      <div className="">
        <img
          draggable="false"
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/ca77f965-b83c-4616-93a3-a2f8fabb378c/PK-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        />
      </div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black md:w-[500px] rounded-md p-16 bg-opacity-80">
        <form className="flex flex-col gap-4">
          <label className="text-white font-bold text-4xl pb-6">{login === true ? "Sign In" : "Sign Up"}</label>
          {login === true ? (
            ""
          ) : (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="text-white bg-transparent border border-gray-400 px-6 py-3 rounded-md font-semibold outline-none"
            />
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="text-white bg-transparent border border-gray-400 px-6 py-3 rounded-md font-semibold outline-none"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="text-white bg-transparent border px-6 py-3 rounded-md border-gray-400 font-semibold outline-none"
          />
          <button className="bg-[#C11119] text-white font-semibold py-2 w-full rounded-md">{login === true ? "Sign In" : "Sign Up"}</button>
          {login === true ? (
            <p className="text-gray-400">
              New to Netflix?{" "}
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
