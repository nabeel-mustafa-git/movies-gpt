import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="bg-black text-white w-full h-screen flex flex-col justify-center items-center">
      <p className="text-4xl">Oops!</p>
      <p className="text-xl">Page not found!</p>
      <Link to="/">
        <p className="text-red-600 border-b border-red-600">Goto home</p>
      </Link>
    </div>
  );
};

export default PageNotFound;
