import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="bg-black text-white w-full h-screen flex flex-col justify-center items-center">
        <p className="text-4xl">Oh no!</p>
        <p className="text-xl">There is some error!</p>
        <Link to="/">
          <p className="text-red-600 border-b border-red-600">Goto home</p>
        </Link>
      </div>
    </div>
  );
};

export default Error;
